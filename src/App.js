import './App.css';
import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { render } from '@testing-library/react';

import HomePage from './components/HomePage'

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
        </Router>
      </div>
    );
  }
}
export default App;
