import './App.css';
import React, {Component} from 'react'
import { render } from '@testing-library/react';
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import CardioSubmitter from './components/CardioSubmitter'
import LiftSubmitter from './components/LiftSubmitter'
import CardioHistory from './components/CardioHistory'
import LiftHistory from './components/LiftHistory'
import CardioEditer from './components/CardioEditer'
import LiftEditer from './components/LiftEditer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './components/LandButtons.css'
import StartPage from './components/StartPage'
class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        {/* <NavBar /> */}
        {/* <StartPage /> */}
        <Router>
          <Route exact path="/"
          component= {StartPage} />
          <Route exact path="/cardio"
          component={CardioSubmitter} />
          <Route exact path="/lifting"
          component={LiftSubmitter} />
          <Route exact path="/cardio/history"
          component={CardioHistory} />
          <Route exact path="/lifting/history"
          component={LiftHistory} />
          <Route exact path="/cardio/edit/:id"
          component={CardioEditer} />
          <Route exact path="/lifting/edit/:id"
          component={LiftEditer} />
        </Router>
      </div>
    );
  }
}
export default App;