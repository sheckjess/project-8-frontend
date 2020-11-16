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

    handleUpdate = (id) => {
        console.log(id)
        let url = "https://sculpt-fitness.herokuapp.com/lifting/update/" + id
        console.log(url)
    }

    handleDelete = (id) => {
        let url = "https://sculpt-fitness.herokuapp.com/lifting/delete/" + id
        console.log(url)
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(hist => {
                console.log(hist)
                this.state.history = hist
            })
            .catch(err => {
                console.log(err)
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
                        {lift.date}<br/>
                        {lift.musclegroup}<br/>
                        {lift.lift}<br/>
                        {lift.sets[0].reps} reps {lift.sets[0].pounds} lbs.<br/>
                        <Button
                        onClick={() => {
                            this.handleUpdate(lift._id)
                        }}
                        variant="contained">
                            update
                        </Button><br/>
                        <Button
                        onClick={() => {
                            this.handleDelete(lift._id)
                        }} 
                        variant="contained"
                        color="secondary">
                            delete
                        </Button><br/>
                        <br/>
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