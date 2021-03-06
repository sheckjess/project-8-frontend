import React, { Component } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter as Router} from 'react-router-dom'
import { Container } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { InputLabel, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from '@material-ui/core';
const axios = require("axios");




class CardioSubmitter extends Component {
    constructor(props){
        super(props)
        this.state = {
            history: "",
            newCardio: {
                date: "",
                type: "",
                minutes: 0,
                miles: 0,
                calories: 0,
            }
        }
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
        axios
            .post("https://sculpt-fitness.herokuapp.com/cardio/add", this.state)
            .then(() => {
                console.log("attempt submission")
                window.location ="/cardio/history"
            })
        /*
        let url = "http://sculpt-fitness.herokuapp.com/cardio"
        fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.history),
      })
          .then(res => res.json())
          .then(history=>{
            this.setState({cardio: [...this.state.history, history]})
            console.log(this.state)
          })
          */
      }

      handleHistory = (e) => {
          console.log('handled')
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
      

            <Container style={centerit}>
                <h1>Add Cardio</h1>
                <Box maxWidth={400} >
                <form onSubmit={this.onSubmit} style={centerit}>
                    <div >
                        <InputLabel>Date: </InputLabel>
                        <Calendar 
                            defaultView="month"
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <div>
                        <InputLabel style={{margin:"5px", centerit}}>Cardio Type: </InputLabel>
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
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={nicebuttons}>
                        Submit
                    </Button>
                    <Link href="/cardio/history">
                    <Button
                    variant="contained"
                    color="primary"
                    style={nicebuttons}
                    onClick={this.handleHistory}>
                        Cardio History
                    </Button>
                </Link>
                </form>
                </Box>
            </Container>
            </Router>
        )
    }
}

export default CardioSubmitter