import { render } from "@testing-library/react";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { InputLabel, Box } from '@material-ui/core';

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
            <Container>
                <h1>Your previous lifts</h1>
                <Box>
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


export default LiftHistory