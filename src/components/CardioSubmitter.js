import React, { Component } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { InputLabel, Box } from '@material-ui/core';

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
                window.location ="/"
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
        return(
            <Container>
                <h1>Add Cardio</h1>
                <Box maxWidth={400}>
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
                <Link to="/cardio/history">
                    <Button 
                    variant="contained"
                    color="primary"
                    onClick={this.handleHistory}>
                        Cardio History
                    </Button>
                </Link>
                </Box>
            </Container>
        )
    }
}

export default CardioSubmitter