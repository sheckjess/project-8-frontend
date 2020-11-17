import React, { Component } from "react";
import { CollectionsOutlined } from '@material-ui/icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { InputLabel, Box } from '@material-ui/core';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
const axios = require("axios");
const cors = require('cors')

class CardioEditer extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: "",
            type: "",
            minutes: "",
            miles: "",
            calories: ""
        }
    }
    componentDidMount(){
        this.getDetails()
    }

    getDetails = () => {
        let logId = this.props.match.params.id;
        let url = "https://sculpt-fitness.herokuapp.com/cardio/specific/" + logId
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    date: res.date,
                    type: res.type,
                    minutes: res.minutes,
                    miles: res.miles,
                    calories: res.calories
                }, () => {
                    console.log(this.state)
                })
            })
            .catch(err => console.log(err))
    }

    onChangeDate = (e) => {
        console.log(e.target)
        this.setState({date: e.target})
        console.log(this.state.date)
    }

    onChangeCardioType = (e) => {
        console.log(e)
        this.setState({type: e.target.value})
    }

    onChangeMinutes = (e) => {
        console.log(e)
        this.setState({minutes: e.target.value})
    }

    onChangeMiles = (e) => {
        console.log(e)
        this.setState({miles: e.target.value})
    }

    onChangeCalories = (e) => {
        console.log(e)
        this.setState({calories: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        let logId = this.props.match.params.id;
        let url = "https://sculpt-fitness.herokuapp.com/cardio/update/" + logId
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
            //body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                this.setState({
                    date: data.date,
                    type: data.type,
                    minutes: data.minutes,
                    miles: data.miles,
                    calories: data.calories})
            })
            .catch(err => console.log(err))
            window.location = "/cardio/history/"
        }



    render(){
        return(
            <div>
                <Container>
                    <Box>
                        <h1>Edit carido entry</h1>
                    </Box>
                    <Box>
                        <form onSubmit={this.onSubmit}>
                            <div>
                                <InputLabel>Date: </InputLabel>
                                <Calendar 
                                    defaultView="month"
                                    onChange={this.onChangeDate}
                                />
                            </div>
                            <div>
                                <InputLabel>Cardio Type: </InputLabel>
                                <select 
                                required 
                                onChange={this.onChangeCardioType}
                                type="select">
                                    <option>Running</option>
                                    <option>Walking</option>
                                    <option>Cycling</option>
                                    <option>Swimming</option>
                                </select>
                            </div>
                            <div>
                                <InputLabel>Minutes: </InputLabel>
                                <Input
                                    required 
                                    onChange={this.onChangeMinutes}
                                    type="number"
                                    placeholder="Workout duration...">
                                </Input>
                            </div>
                            <div>
                                <InputLabel>Miles: </InputLabel>
                                <Input
                                    required 
                                    onChange={this.onChangeMiles}
                                    type="number"
                                    placeholder="Workout distance...">
                                </Input>
                            </div>
                            <div>
                                <InputLabel>Calories: </InputLabel>
                                <Input
                                    required 
                                    onChange={this.onChangeCalories}
                                    type="number"
                                    placeholder="Calories burned...">
                                </Input>
                            </div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className="">
                                    Submit
                                </Button>
                        </form>
                    </Box>
                    <Link to="/cardio/history">
                        <Button
                        variant="contained">
                            Cancel
                        </Button>
                    </Link>
                </Container>
            </div>
        )
    }
}

export default CardioEditer