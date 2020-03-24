import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
function App() {
  return (
   <Router>
   <div className="App">
      <Switch>
        <Route path='/login' component={Login}/>
        <Route component={Login} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;
