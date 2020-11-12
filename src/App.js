import './App.css';
import React, {Component} from 'react'
import { render } from '@testing-library/react';
import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'


class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <NavBar />
        <HomePage />
      </div>
    );
  }
}
export default App;
