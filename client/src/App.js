import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer'
import Schedule from './pages/Schedule/Schedule'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Hotels from './pages/Hotels/hotels';
import Teams from './pages/Team/team';
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
          <Route path='/hotel' exact component={Hotels}/>
          <Route path='/teams' exact component={Teams}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

