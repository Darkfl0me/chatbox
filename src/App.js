import React, { Component } from 'react';
//import { Route, Switch, Link, Redirect} from 'react-router-dom';
import { auth } from './firebase/firebase'
import LoginPage from './LoginPage';
import { bindActionCreators } from 'redux';
import { loadUser, authenticated } from './Actions';
import { connect } from 'react-redux';
import Explore from './Explore';
import { Loader } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
  render() {
    console.log(this.props.authUser);
    let app;
    if(this.props.authUser === true) {
      app = <Explore />
    } else {
      app = <LoginPage />
    }
    return (
      <div>
        {app}
      </div>
    ) 
  }
}

function mapStateToProps(state) {
    return {
		  authUser: state.authenticated,
		  //userProfileLoading: state.userProfileLoading,
		  user: state.user
	}    
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ authenticated }, dispatch)
}

export default connect(mapStateToProps, null)(App);
