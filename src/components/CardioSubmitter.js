import React, { Component } from "react";
import Calendar from "react-calendar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const axios = require('axios')

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
      }

      handleHistory = (e) => {
          console.log('handled')
      } 

    render(){
        return(
            <div>
                <h3>Add Cardio</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Date: </label>
                        <Calendar 
                            defaultView="month"
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cardio Type: </label>
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
                    <div className="form-group">
                        <label>Minutes: </label>
                        <input
                            required 
                            onChange={this.onChangeMinutes}
                            type="number"
                            placeholder="Workout duration...">
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Miles: </label>
                        <input
                            required 
                            onChange={this.onChangeMiles}
                            type="number"
                            placeholder="Workout distance...">
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Calories: </label>
                        <input
                            required 
                            onChange={this.onChangeCalories}
                            type="number"
                            placeholder="Calories burned...">
                        </input>
                    </div>
                    <button
                        type="submit"
                        className="">
                        Submit
                    </button>
                </form>
                <Link to="/cardio/history">
                    <button onClick={this.handleHistory}>
                        Cardio History
                    </button>
                </Link>
            </div>
        )
    }
}

export default CardioSubmitter