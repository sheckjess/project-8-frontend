import React, {Component} from 'react'


class LandButtons extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
          <div>
            <img src={this.props.src} />
            <button>{this.props.buttonTxt}</button>
          </div>
        );
      }
}


export default LandButtons