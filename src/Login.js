import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase, {auth, provider} from './firebase/firebase.js';

class Login extends React.Component {
    constructor() {
        super();
        this.login = this.login.bind(this);
    }
    login() {
        const { 
            history 
        } = this.props;

        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                //history.push('/explore');
            }); 
    }

    render() {
        return (
            <button onClick={ this.login }>Sign in with Github</button>
        )
    }
}

export default withRouter(Login);