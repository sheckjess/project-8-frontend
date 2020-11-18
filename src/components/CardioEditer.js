import React, { Component } from "react";
// import { CollectionsOutlined } from '@material-ui/icons';
import { BrowserRouter as Router} from 'react-router-dom'
import { Container } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { InputLabel, Box } from '@material-ui/core';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from '@material-ui/core';

// const axios = require("axios");
// const cors = require('cors')

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
        console.log(e)
        this.setState({date: e})
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
        let logId = this.props.match.params.id.toString()
        let url = "https://sculpt-fitness.herokuapp.com/cardio/update/" + logId
        console.log(this.state)
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
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
            alert('Updated successfully!')
            window.location = "/cardio/history/"
        }



    render(){
        const centerit = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }
         
        const nicebuttons = {
            margin: "5px",
            backgroundColor: "black"
        }

        return(
            <Router>
      <AppBar position="relative">
      
        <Toolbar style= {{backgroundColor: 'black'}} >
          
            <Link href="/"  style={{ textDecoration: 'none' , color: 'white'}}   >
          <Typography variant="h6" color="inherit" noWrap >
            MRJ FITNESS
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>

            <div>
                <Container style={centerit} >
                    <Box>
                        <h1>Edit Cardio Entry</h1>
                    </Box>
                    <Box>
                        <form onSubmit={this.onSubmit} style={centerit} >
                            <div>
                                <InputLabel>Date: </InputLabel>
                                <Calendar 
                                    defaultView="month"
                                    onChange={this.onChangeDate}
                                />
                            </div>
                            <div>
                                <InputLabel onSubmit={this.onSubmit} style={{centerit ,margin:'5px'}}>Cardio Type: </InputLabel>
                                <select style={{margin:"5px"}}
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
                                    style={nicebuttons}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    >
                                    Submit
                                </Button>
                                <Link href="/cardio/history">
                                <Button 
                                    style={nicebuttons}
                                    variant="contained"
                                    color='primary'>
                                    Back
                                </Button>
                                </Link>
                        </form>
                    </Box>
                </Container>
            </div>
            </Router>
        )
    }
}

export default CardioEditer

