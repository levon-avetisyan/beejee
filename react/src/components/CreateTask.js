import React, {Component} from 'react';
import axios from 'axios';
import classnames from 'classnames';

class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            text: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newTask = {
            username: this.state.username,
            email: this.state.email,
            text: this.state.text
        };

        axios.post('/create', newTask)
            .then(res => {
                this.setState({
                    username: '',
                    email: '',
                    text: '',
                    errors: {}
                });
                this.props.history.push('/tasks')
            })
            .catch(err => this.setState({errors: err.response.data}));
    }

    render() {
        const {errors} = this.state;

        return (
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-6 offset-3">
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
                                           value={this.state.email}/>
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
                                <button className="btn btn-primary btn-block" type="submit">Create</button>
                            </form>
                        </div>
                    </div>
                </div>

        );
    }
}

export default CreateTask;
