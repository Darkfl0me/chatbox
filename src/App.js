import React, { Component } from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import Login from './Login';
import Explore from './Explore';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      githubId: '',
      username: ''
    }
  }
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/explore' component={Explore}/>
        </Switch>
      </div>
    );
  }
}

export default App;
