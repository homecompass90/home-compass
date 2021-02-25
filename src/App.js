import React from 'react';
import Navbar from './components/Header';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import CreateListing from "./components/CreateListing"
import About from "./components/About"
import Login from "./components/Login"
import SignUp from "./components/SignUp"



function App() {
  //routes 
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/CreateListing' component={CreateListing} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/about' component={About} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;