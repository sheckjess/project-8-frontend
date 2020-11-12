import './App.css';
import React, {Component} from 'react'
import { render } from '@testing-library/react';
import HomePage from './components/HomePage'

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <HomePage />
      </div>
    );
  }
}
export default App;
