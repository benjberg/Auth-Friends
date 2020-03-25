import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import {PrivateRoute} from './utils/utils';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <PrivateRoute exact path='/friend_list' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;