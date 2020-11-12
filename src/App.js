import './App.css';
import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { render } from '@testing-library/react';

import HomePage from './components/HomePage'
import LiftSubmitter from './components/LiftSubmitter'

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Router>
          <Route path="/"
          component={HomePage} />
          <Route path="/lifting"
          component={LiftSubmitter} />
        </Router>
      </div>
    );
  }
}
export default App;
