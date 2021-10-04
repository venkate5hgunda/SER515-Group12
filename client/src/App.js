import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

// TODO: Auto Build React when Node Starts
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={Signup} />
          <Route path="/login" component={Login} />
          <Route path='/about' exact component={About}/>
        </Switch>
        <Footer />
      </Router>
    </> 
  );
}

export default App;
