import { render } from "@testing-library/react";
import React, { Component } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class LiftHistory extends Component{
    constructor(props){
        super(props)
        this.state = {
            history: []
        }
    }


    componentDidMount = () => {
        let url = "http://sculpt-fitness.herokuapp.com/lifting"
        fetch(url)
            .then(res => res.json())
            .then(history=>{
                console.log(history)
                this.setState({history: history})
            })
    }


    render(){
        return(
            <div>
                <h1>This is the lifting history</h1>
                    {
                    this.state.history.length ?
                    this.state.history.map((lift, i)=>{
                    return <div key={i}>
                        {lift.date}<br></br>
                        {lift.musclegroup}<br></br>
                        {lift.lift}<br></br>
                        {lift.sets[0].reps} reps {lift.sets[0].pounds} lbs.<br></br>
                        <br></br>
                        <br></br>
                        </div>
                    }) : ""
                    }
                <Link to='/lifting'>
                    <button>
                        Back
                    </button>
                </Link>
                <Link to='/'>
                    <button>
                        Home
                    </button>
                </Link>
            </div>
        )
    }
}


export default LiftHistory