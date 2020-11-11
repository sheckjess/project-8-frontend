import React, {Component} from 'react'


class LandButtons extends Component {
    constructor(props){
        super(props)
        this.state = {
            img: "",
            buttonTxt: ""
        }
    }


    render(){
        return(
          <div>
              <button>{this.props.buttonTxt}</button>
          </div>
        );
      }
}





export default LandButtons