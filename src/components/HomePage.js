import React, {Component} from 'react'
import LandButtons from './LandButtons'
import cardioimg from "../images/cardioimg.png"
import liftingimg from "../images/liftingimg.jpg"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './HomePage.css'
class HomePage extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className="testing">
                <Link to="/cardio">
                    <LandButtons src={cardioimg} buttonTxt={"Cardio"} className="link-buttons" />
                </Link>
                <Link to="/lifting">
                    <LandButtons src={liftingimg} buttonTxt={"Lifting"} className="link-buttons"/>
                </Link>
            </div>
        )
    }
}

export default HomePage