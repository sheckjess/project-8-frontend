import { render } from "@testing-library/react";
import React, { Component } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class CardioHistory extends Component{
    constructor(props){
        super(props)
        this.state = {
            history: []
        }
    }

    fetchHistory = (e) => {
        let url = "http://sculpt-fitness.herokuapp.com/cardio"
        fetch(url)
            .then(res => res.json())
            .then(history=>{
                console.log(history)
                this.setState({history: history})
            })
    }
    componentDidMount = () => {
        this.fetchHistory()
    }

    render(){
        return(
            <div>
                <h1>This is the cardio history</h1>
                {
                    this.state.history.length ?
                    this.state.history.map((lift, i)=>{
                    return <div key={i}>
                        {lift.date}<br></br>
                        {lift.type}<br></br>
                        {lift.minutes}<br></br>
                        {lift.miles}<br></br>
                        {lift.calories}<br></br>
                        <br></br>
                        </div>
                    })
                    : ""
                    }
                <Link to='/cardio'>
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

export default CardioHistory