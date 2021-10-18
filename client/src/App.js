import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer'
import Schedule from './pages/Schedule/Schedule'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
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
        </Switch>
        <Footer />
      </Router>
    </> 
  );
}

export default App;