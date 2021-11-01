import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer'
import Hotels from './pages/Hotels/hotels';
import Schedule from './pages/Schedule/Schedule';
import Rules from './pages/Rules/Rules';
import Sponsors from './pages/Sponsors/Sponsors';

// TODO: Auto Build React when Node Starts
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home} />   
          <Route path='/about' exact component={About} />
          <Route path='/schedule' exact component={Schedule} />
          <Route path='/Rules and Regulations' exact component={Rules}/>
          <Route path='/hotels' exact component={Hotels}/>
          <Route path='/sponsors' exact component={Sponsors}/>
        </Switch>
        <Footer />
      </Router>
    </> 
  );
}

export default App;
      