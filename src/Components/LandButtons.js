import React, {Component} from 'react'


class LandButtons extends Component {
    constructor(props){
        super(props)
    }




    componentWillUnmount(){
      console.log("leaving home page")
    }

    render(){
        return(
          <div>
            <img src={this.props.src} />
            <button onClick={this.componentWillUnmount}>{this.props.buttonTxt}</button>
          </div>
        );
      }
}


export default LandButtons