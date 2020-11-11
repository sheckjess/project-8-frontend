import './App.css';
import React, {Component} from 'react'
import { render } from '@testing-library/react';
import LandButtons from './Components/LandButtons'
class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <LandButtons img={""} buttonTxt={"Cardio"} />
        <LandButtons img={""} buttonTxt={"Strength"} />
      </div>
    );
  }
}
export default App;
