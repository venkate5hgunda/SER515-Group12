import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer'
import Hotels from './pages/Hotels/hotels';
import Schedule from './pages/Schedule/Schedule';
import { AuthProvider } from "./contexts/AuthContext"
import Login from "./pages/Login/Login"
import PrivateRoute from "./pages/Login/PrivateRoute"
import ForgotPassword from "./pages/Forgotpassword/ForgotPassword"

import Rules from './pages/Rules/Rules';
import Sponsors from './pages/Sponsors/Sponsors';

import Maps from './pages/Maps/Maps';


// TODO: Auto Build React when Node Starts
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home} />   
          <Route path='/about' exact component={About} />
          <Route path='/schedule' exact component={Schedule} />
          <Route path='/Rules and Regulations' exact component={Rules}/>
          <Route path='/hotels' exact component={Hotels}/>
          <Route path='/sponsors' exact component={Sponsors} />
          <Route path='/maps' exact component={Maps}/>
          <Route path='/login' exact component={Login}/>

        </Switch>
        <Footer />
        </AuthProvider>
      </Router>
    </> 
  );
}

export default App;
      