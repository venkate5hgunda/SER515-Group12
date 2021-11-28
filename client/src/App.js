import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Hotels from './pages/Hotels/hotels';
import Schedule from './pages/Schedule/Schedule';
import Referee from './pages/Referee/referee';
import CoachProfile from './components/coach-profile/coach-profile';
import { AuthProvider } from "./contexts/AuthContext"
import Login from "./pages/Login/Login"
import PrivateRoute from "./pages/Login/PrivateRoute"
import ForgotPassword from "./pages/Forgotpassword/ForgotPassword"
import Rules from './pages/Rules/Rules';
import Sponsors from './pages/Sponsors/Sponsors';
import Maps from './pages/Maps/Maps';
import TeamRegistration from './pages/team-registration/team-registration';
import ApplicationForms from './pages/ApplicationForms/application-forms';
import Team from './pages/Team/team'
import Drawer from './components/Drawer'
import Result from './pages/Result/Result';
import TeamDirectorProfile from './components/team-director/team-director';
import TournamentDirectorProfile from './components/tournament-director/tournament-director';
import RefreeDirectorProfile from './components/referee-director/referee-director';
import RefereeProfile from './components/referee/referee';

// TODO: Auto Build React when Node Starts
function App() {
  const [drawerOpen, toggleDrawer]=useState(false)
  console.log(drawerOpen)
  return (
    <>
      <Router>
        <AuthProvider>
        <Navbar toggleDrawer={toggleDrawer}></Navbar>
          <div className="App-body-root">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/schedule' exact component={Schedule} />
              <Route path='/hotels' exact component={Hotels} />
              <Route path='/maps' exact component={Maps} />
              <Route path='/application-forms' exact component={ApplicationForms} />
              <Route path='/team-registration' exact component={TeamRegistration} />
              <Route path='/Rules and Regulations' exact component={Rules}/>
              <Route path='/sponsors' exact component={Sponsors} />
              <Route path='/login' exact component={Login}/>
              <Route path='/referee-registration' exact component={Referee} />
              <Route path='/coach-profile' exact component={CoachProfile} />
              <Route path='/teams' exact component={Team} /> 
              <Route path='/display-result' exact component={Result} />
              <Route path='/team-director-profile' exact component={TeamDirectorProfile} />
              <Route path='/tournament-director-profile' exact component={TournamentDirectorProfile} />
              <Route path='/referee-director-profile' exact component={RefreeDirectorProfile} />
              <Route path='/referee-profile' exact component={RefereeProfile} />
            </Switch>
          </div>
        <Footer />
            <Drawer open={drawerOpen} close={toggleDrawer}/>
        </AuthProvider>
      </Router>
    </> 
  );
}

export default App;
      