import './App.css';
import React, {Component} from 'react'
import { render } from '@testing-library/react';
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import CardioSubmitter from './components/CardioSubmitter'
import LiftSubmitter from './components/LiftSubmitter'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <NavBar />
        <Router>
          <Route exact path="/"
          component={HomePage} />
          <Route exact path="/cardio"
          component={CardioSubmitter} />
          <Route exact path="/lifting"
          component={LiftSubmitter} />
        </Router>
        
      </div>
    );
  }
}
export default App;
