import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logoutUser} from "../actions/authActions";
import Spinner from './common/Spinner';


class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            loading: true
        };
    }

    componentDidMount() {
        axios.get('/tasks')
            .then(res => {
                this.setState({
                    tasks: res.data,
                    loading: false
                });
                console.log(this.state.tasks)
            })
            .catch(err => console.log(err))
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;

        const {tasks, loading} = this.state;

        let taskItems;

        if (tasks === null || loading) {
            taskItems = <Spinner/>
        } else {
            if (tasks.length > 0) {
                taskItems = tasks.map(task =>
                    <div key={task._id} className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1 pr-3">{task.username}</h5>
                            <small>{task.email}</small>
                        </div>
                        <p className="mb-1">{task.text}</p>
                        <span className="d-block text-right mt-3">
                            {isAuthenticated ?
                                <Link to={`/edit/${task._id}`}>
                                    <i className="fas fa-edit"></i>
                                </Link> : ''}
                        </span>
                    </div>
                )
            } else {
                taskItems = <Spinner/>
            }
        }
        return (
            <div>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-6 offset-3">
                            <div className="list-group">
                                {taskItems}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Tasks.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(Tasks);
