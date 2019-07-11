import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";
import {connect} from 'react-redux';
import {getTaskById} from "../actions/taskActions";
import {updateTask} from "../actions/taskActions";

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            text: '',
            msg: '',
            errors: {},
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.props.getTaskById(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }

        if (nextProps.task.task) {
            const task = nextProps.task.task;
            this.setState({
                username: task.username,
                email: task.email,
                text: task.text,
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const id = this.props.match.params.id;

        const updatedTaskData = {
            username: this.state.username,
            email: this.state.email,
            text: this.state.text,
        };

        this.props.updateTask(updatedTaskData, id);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {errors} = this.state;

        let taskContent = (
            <form onSubmit={this.onSubmit} noValidate>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"
                           name="username"
                           className={classnames('form-control', {
                               'is-invalid': errors.username
                           })}
                           onChange={this.onChange}
                           value={this.state.username}
                    />
                    {errors.username && (<div className="invalid-feedback">{errors.username}</div>)}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email"
                           name="email"
                           className={classnames('form-control', {
                               'is-invalid': errors.email
                           })}
                           onChange={this.onChange}
                           value={this.state.email}
                    />
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                    <label>Task</label>
                    <textarea name="text"
                              className={classnames('form-control', {
                                  'is-invalid': errors.text
                              })}
                              onChange={this.onChange}
                              value={this.state.text}/>
                    {errors.text && (<div className="invalid-feedback">{errors.text}</div>)}
                </div>
                <button className="btn btn-primary btn-block" type="submit">Edit Task</button>
            </form>
        );

        return (
            <div className="container">
                <div className="row pt-5">
                    <div className="col-6 offset-3">
                        {taskContent}
                    </div>
                </div>
            </div>
        )
    }
}

Task.propTypes = {
    getTaskById: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    task: state.task,
    errors: state.errors
});

export default connect(mapStateToProps, {getTaskById, updateTask})(Task);
