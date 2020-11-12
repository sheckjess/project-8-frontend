import React, { Component } from "react";
import Calendar from "react-calendar";
const axios = require('axios')

class CardioSubmitter extends Component {
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

    onChangeDate = (e) => {
        console.log(e)
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
        e.preventDefault();
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
            </div>
        )
    }
}

export default CardioSubmitter