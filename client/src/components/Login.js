import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {userLogin} from './../actions/authActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
        const user = {
            username: this.state.username,
            password: this.state.password,
        };

        this.props.userLogin(user);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }

        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-6 offset-3">
                            <form onSubmit={this.onSubmit} className="login-form">
                                <div className="form-group">
                                    <label>Username</label>
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
                                    <label>Password</label>
                                    <input type="password"
                                           name="password"
                                           className={classnames('form-control', {
                                               'is-invalid': errors.password
                                           })}
                                           onChange={this.onChange}
                                           value={this.state.password}
                                    />
                                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                </div>
                                <button className="btn btn-primary btn-block" type="submit">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    userLogin: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {userLogin})(Login)

