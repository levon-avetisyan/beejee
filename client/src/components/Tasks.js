import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logoutUser} from "../actions/authActions";
import Spinner from './common/Spinner';
import Pagination from './common/Pagination';
import {updateTaskStatus} from "../actions/taskActions";


class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            loading: true,
            currentPage: 1,
            tasksPerPage: 5,
        };
        this.sortBy = this.sortBy.bind(this);
    }

    componentDidMount() {
        axios.get('/tasks')
            .then(res => {
                const tasks = res.data;
                this.setState({tasks: tasks, loading: false});
            })
            .catch(err => console.log(err))
    }

    sortBy(val) {
        const tasks = [...this.state.tasks];
        const sort = (key) => tasks.sort(function (a, b) {
            let A = a[key].toLowerCase();
            let B = b[key].toLowerCase();
            if (A < B)
                return -1;
            if (A > B)
                return 1;
            return 0
        });
        sort(val);
        this.setState({tasks: tasks});
    }

    onCheckBoxClick(e) {
        const id = e.target.id;
        window.location.href += 'update/status/' + id;
        const updatedTaskData = {};
        if (e.target.checked) {
            updatedTaskData.status = 'done';
            console.log(updatedTaskData);
        } else {
            updatedTaskData.status = 'to do';
            console.log(updatedTaskData);
        }
        this.props.updateTaskStatus(updatedTaskData, id);
        window.location.href = '';
    }

    render() {
        const {tasks, loading, tasksPerPage, currentPage} = this.state;
        const {isAuthenticated} = this.props.auth;

        // Get current tasks
        const indexOfLastTask = currentPage * tasksPerPage;
        const indexOfFirstTask = indexOfLastTask - tasksPerPage;
        const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

        // Change page
        const paginate = pageNumber => this.setState({currentPage: pageNumber});

        const sortDropDown = (
            <div className="dropdown mb-3">
                <button className="btn btn-secondary dropdown-toggle" type="button"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                    Sort by
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" onClick={() => this.sortBy('username')}>Name</button>
                    <button className="dropdown-item" onClick={() => this.sortBy('email')}>Email</button>
                    <button className="dropdown-item" onClick={() => this.sortBy('status')}>Status</button>
                </div>
            </div>
        );

        let taskItems;

        if (tasks.length === 0 || loading) {
            taskItems = <Spinner/>
        } else {
            taskItems = currentTasks.map(task => {
                return (
                    <div key={task._id} className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1 pr-3">{task.username}</h5>
                            <small>{task.email}</small>
                        </div>
                        <p className="mb-1">{task.text}</p>
                        <div className="d-flex justify-content-between">
                            <div className="d-block text-right">
                                {isAuthenticated ?
                                    <Link to={`/edit/${task._id}`}>
                                        <i className="fas fa-edit"></i>
                                    </Link> : ''
                                }
                            </div>
                            <div className="task-status">
                                {isAuthenticated ?
                                    <div className="custom-control custom-checkbox">
                                        {task.status === 'to do' ? <input type="checkbox" onClick={this.onCheckBoxClick.bind(this)} className="custom-control-input" id={task._id}/>
                                        : <input type="checkbox" checked="checked" onClick={this.onCheckBoxClick.bind(this)} className="custom-control-input" id={task._id}/>}
                                        <label className="custom-control-label" htmlFor={task._id}></label>
                                    </div>
                                    : task.status === 'to do' ? <i className="fas fa-minus text-warning"></i> : <i className="fas fa-check text-success"></i>
                                }
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return (
            <div>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-6 offset-3">
                            <div className="list-group">
                                {sortDropDown}
                                {taskItems}
                                <Pagination tasksPerPage={tasksPerPage} totalTasks={tasks.length} paginate={paginate}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Tasks.propTypes = {
    auth: PropTypes.object.isRequired,
    updateTaskStatus: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    task: state.task,
});

export default connect(mapStateToProps, {logoutUser, updateTaskStatus})(Tasks);
