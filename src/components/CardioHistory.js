import { render } from "@testing-library/react";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { InputLabel, Box } from '@material-ui/core';
const axios = require("axios");

class CardioHistory extends Component{
    constructor(props){
        super(props)
        this.state = {
            history: []
        }
    }

    componentDidMount = () => {
        let url = "http://sculpt-fitness.herokuapp.com/cardio"
        fetch(url)
            .then(res => res.json())
            .then(history=>{
                console.log(history)
                this.setState({history: history})
            })
    }

    handleDelete = (e) => {
        e.preventDefault()
        console.log(e)
        axios
            .delete("https://sculpt-fitness.herokuapp.com/cardio/delete/", data)
            .then(() => {
                console.log(data)
            })
            
    }

    render(){
        return(
            <Container>
                <h1>Your previous cardio workouts</h1>
                <Box>
                {
                    this.state.history.length ?
                    this.state.history.map((lift, i)=>{
                    return <div key={i}>
                        {lift.date}<br></br>
                        {lift.type}<br></br>
                        {lift.minutes} minutes<br></br>
                        {lift.miles} miles<br></br>
                        {lift.calories} cals<br></br>
                        <button onClick={this.handleDelete}>
                            delete
                        </button>
                        <br></br>
                        </div>
                    }) : ""
                }
                <Link to='/cardio'>
                    <Button
                        variant="contained"
                        color="primary">
                        Back
                    </Button>
                </Link>
                <Link to='/'>
                    <Button
                        variant="contained"
                        color="primary">
                        Home
                    </Button>
                </Link>
                </Box>
            </Container>
        )
    }
}

export default CardioHistory