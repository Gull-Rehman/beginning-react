import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import AddUser from './components/Users/addUser/addUser';
import Posts from './components/Posts/Posts';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Redirect to="/home" />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
            <Route path='/addUser'>
              <AddUser />
            </Route>
            <Route path='/posts'>
              <Posts />
            </Route>
            <Route path='/products'>
              <Products />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
