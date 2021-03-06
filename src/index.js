import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './Signup';
import Profile from './Profile';
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/" component={App} />
    <Route path="/?key=:id" component={App}/>
 </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);


