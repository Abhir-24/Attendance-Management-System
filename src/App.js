// DSC Attendance Management System
// Made by Abhir Raj Shrivastava
// Batch: F2
// Enrollment no. 9919103059

import React, { Component } from "react";
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import About from './components/About/About';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </Router>
    );
  }
}

export default App;
