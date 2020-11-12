import React, {Component} from 'react'
import './LandButtons.css'


class LandButtons extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
          <div className="container">
            <img src={this.props.src} className="button-image" alt="buttons" />
            {/* <button>{this.props.buttonTxt}</button> */}
          </div>
        );
      }
}


export default LandButtons