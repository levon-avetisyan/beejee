import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser} from "./actions/authActions";

import PrivateRoute from './components/common/PrivateRoute';

import {Provider} from 'react-redux';
import store from './store';

import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import Login from './components/Login';
import CreateTask from './components/CreateTask';
import Task from './components/Task';

import { logoutUser } from './actions/authActions';

import './App.css';

// Check for token
if (localStorage.jwtToken) {
    // Set Auth token header auth
    setAuthToken(localStorage);

    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);

    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = '/tasks';
    }
}


function App() {
    return (
        <Provider store={store}>
            <Router>
                <main className="App">
                    <Navbar/>
                    <Route exact path="/" component={Tasks}/>
                    <Route exact path="/tasks" component={Tasks}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/create" component={CreateTask}/>
                    <Switch>
                        <PrivateRoute exact path="/edit/:id" component={Task}/>
                        <PrivateRoute exact path="/edit" component={Task}/>
                    </Switch>
                </main>
            </Router>
        </Provider>
    );
}

export default App;
