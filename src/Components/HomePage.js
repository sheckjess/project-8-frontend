import React, {Component} from 'react'
import LandButtons from './LandButtons'
import cardioimg from "../images/cardioimg.png"
import liftingimg from "../images/liftingimg.jpg"

class HomePage extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div>
                <LandButtons src={cardioimg} buttonTxt={"Cardio"} />
                <LandButtons src={liftingimg} buttonTxt={"Strength"} />
            </div>
        )
    }
}

export default HomePage