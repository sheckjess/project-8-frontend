import React, { Component } from "react";
import Calendar from "react-calendar";
const axios = require('axios')

class LandButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      musclegroup: "",
      lift: "",
      sets: [],
    };
  }

  onChangeDate = (e) => {
    console.log(e)
    this.setState({date: e.target.value});
  };

  onChangeMuscleGroup = (e) => {
    console.log(e)
    this.setState({musclegroup: e.target.value});
  };

  onChangeLiftName = (e) => {
    console.log(e)
    this.setState({lift: e.target.value});
  };

  onChangeSets = (e) => {
    console.log(e)
    //For each number in 'Sets", there should be a 'Reps' Rendered in the form
  };

  onSubmit = (e) => {
    e.preventDefault();
    //var tempLift = {}
    //axios.post('https://sculpt-fitness.herokuapp.com/lifting/add', tempLift)
  };

  render() {
    return (
      <>
        <h3>Add Lift</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Date: </label>
            <Calendar
              defaultActiveStartDate
              defaultView="month"
              onChange={this.onChangeDate}
            />
          </div>
          <div className="form-group">
            <label>Muscle Group: </label>
            <select required onChange={this.onChangeMuscleGroup} type="select">
              <option>Legs</option>
              <option>Chest</option>
              <option>Arms</option>
              <option>Back</option>
            </select>
          </div>
          <div className="form-group">
            <label>Lift Name: </label>
            <input
              required
              onChange={this.onChangeLiftName}
              type="text"
              placeholder="Squat"
            ></input>
          </div>
          <div className="form-group">
            <label>Sets: </label>
            <input
              required
              onChange={this.onChangeSets}
              type="number"
              placeholder="1"
              step="1"
              min="1"
              max="10"
            ></input>
          </div>
          <button type="submit" className="">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default LandButtons;

/* JSON FORMAT FOR A LIFT 
    {
      "date": "1519211911670",
      "musclegroup": "Legs",
      "lift": "Squat",
      "sets": [
          {
              "reps":"10",
              "pounds":"135"
          },
          {
              "reps":"6",
              "pounds":"185"
          },
          {
              "reps":"6",
              "pounds":"195"
          }
        ]
    }
*/
