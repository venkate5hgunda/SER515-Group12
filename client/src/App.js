import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Faqs from './pages/Faqs/Faqs';
import Footer from './components/Footer/Footer'
import Hotels from './pages/Hotels/hotels';

// TODO: Auto Build React when Node Starts
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About}/>
          <Route path='/Faqs' exact component={Faqs}/>
          <Route path='/hotels' exact component={Hotels}/>
        </Switch>
        <Footer />
      </Router>
    </> 
  );
}

export default App;
