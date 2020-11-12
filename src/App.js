import './App.css';
import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { render } from '@testing-library/react';
import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'
import HomePage from './components/HomePage'
import CardioSubmitter from './components/CardioSubmiter'
import LiftSubmitter from './components/LiftSubmitter'


class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
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
