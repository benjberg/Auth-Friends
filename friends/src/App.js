import React from 'react';
import { Route,NavLink } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import FriendForm from './components/FriendForm';
import {PrivateRoute} from './utils/utils';
import FriendsList from './components/FriendsList';
function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <h1>friends app</h1>
        <NavLink to='/login'>
          <h3>Log In</h3>
        </NavLink>
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <PrivateRoute path='/friendslist' component={FriendsList} />
      <PrivateRoute path='/friendform' component={FriendForm} />
    </div>
  );
}
export default App;

