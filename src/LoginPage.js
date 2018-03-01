import React, { Component } from 'react';
import * as userActions from './Actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { loginUser,authUser } from './Actions';
import LoginForm from './LoginForm';
import { withRouter } from 'react-router-dom';
import firebase, {auth, provider} from './firebase/firebase.js';

class LoginPage extends React.Component {
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