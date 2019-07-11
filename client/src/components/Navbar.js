import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from "../actions/authActions";

class Navbar extends Component {

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const {isAuthenticated} = this.props.auth;

        return (
            <nav className="navbar navbar-expand-lg" id="siteNav">
                <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"
                     aria-controls="navbarNav"
                     aria-expanded="false"
                     aria-label="Toggle navigation">
                    <div className="toggle">
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="collapse navbar-collapse pr-lg-3" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Tasks</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">Create Task</Link>
                        </li>

                        {isAuthenticated ? <li className="nav-item">
                            <button className="nav-link page-link rounded"
                               onClick={this.onLogoutClick.bind(this)}>Logout</button>
                        </li> : <li className="nav-item">
                            <Link to="/login" className="nav-link page-link rounded">Login</Link>
                        </li>}

                    </ul>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(Navbar);
