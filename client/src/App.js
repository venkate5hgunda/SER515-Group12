import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Hotels from './pages/Hotels/hotels';
import Schedule from './pages/Schedule/Schedule';
import Maps from './pages/Maps/Maps';
import TeamRegistration from './pages/team-registration/team-registration';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home} />   
          <Route path='/about' exact component={About} />
          <Route path='/schedule' exact component={Schedule} />
          <Route path='/hotels' exact component={Hotels} />
          <Route path='/maps' exact component={Maps} />
          <Route path='/team-registration' exact component={TeamRegistration} />
        </Switch>
        <Footer />
      </Router>
    </> 
  );
}

export default App;
      