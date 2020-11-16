import { render } from "@testing-library/react";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { InputLabel, Box } from '@material-ui/core';



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
    handleIdMap = (e) => {
        for (let i = 0; i< this.state.history.length; i++){
            this.state._id = this.state.history[i]._id
            console.log(e)
        }
    }
    handleDelete = (id) => {
        let url = "https://sculpt-fitness.herokuapp.com/cardio/delete/" + id
        console.log(url)
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(hist => {
                this.state.history = hist
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleUpdate = (id) => {
        console.log(id)
        let url = "https://sculpt-fitness.herokuapp.com/cardio/specific/" + id
        console.log(url)
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
                        {lift.date}<br/>
                        {lift.type}<br/>
                        {lift.minutes} minutes<br/>
                        {lift.miles} miles<br/>
                        {lift.calories} cals<br/><br/>
                        <Link to="/cardio/edit/">
                            <Button
                            onClick={() => {
                                this.handleUpdate(lift._id)
                            }}
                            variant="contained">
                                update
                            </Button><br/>
                        </Link>
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