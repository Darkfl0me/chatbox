import React, { Component } from 'react';
import * as userActions from './Actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { loginUser,authUser } from './Actions';
import LoginForm from './LoginForm';
import { withRouter } from 'react-router-dom';
import firebase, {auth, provider} from './firebase/firebase.js';

/*
function mapStateToProps(state) {
    return 
}
*/

class LoginPage extends React.Component {
    /*constructor() {
        super();
        this.login = this.login.bind(this);
    }
    login() {
        const { 
            history 
        } = this.props;

        auth.signInWithPopup(provider)
            .then((user, err) => {
                if(err) {
                    console.log('Unable to sign in with github');
                } else {
                    this.props.setCurrentUser(user);
                    console.log(user);
                    history.push('/');
                }            
            }); 
    }
    */
    render() {
        return (
            <LoginForm loginUser={this.props.loginUser} />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPage);