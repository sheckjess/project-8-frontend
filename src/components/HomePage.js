import React, {Component} from 'react'
import LandButtons from './LandButtons'
// import cardioimg from "../images/cardioimg.png"
// import liftingimg from "../images/liftingimg.jpg"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './HomePage.css'
// import cardioimg2 from '../images/cardioimg2.png'
// import liftingimg2 from '../images/liftingimg2.png'

class HomePage extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className="container">
                {/* <Link to="/cardio">
                    <LandButtons src={cardioimg2} buttonTxt={"Cardio"} className="link-buttons" />
                </Link>
                <Link to="/lifting">
                    <LandButtons src={liftingimg2} buttonTxt={"Lifting"} className="link-buttons"/>
                </Link> */}
            </div>
        )
    }
}

export default HomePage