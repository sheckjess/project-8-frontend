import './App.css';
import React, {Component} from 'react'
import { render } from '@testing-library/react';
import LandButtons from './components/LandButtons'

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <LandButtons buttonTxt={"Cardio"} />
        <LandButtons buttonTxt={"Strength"} />
      </div>
    );
  }
}
export default App;
