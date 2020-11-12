import React, { Component } from "react";
import Calendar from "react-calendar";
// eslint-disable-next-line
const axios = require("axios");

class LiftSubmitter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      musclegroup: "",
      lift: "",
      sets: [],
      _numberOfSets: 0,
    };
  }

  onChangeDate = (e) => {
    this.setState({ date: e });
  };

  onChangeMuscleGroup = (e) => {
    this.setState({ musclegroup: e.target.value });
  };

  onChangeLiftName = (e) => {
    this.setState({ lift: e.target.value });
  };

  onChangeSets = (e) => {
    this.setState({ _numberOfSets: e.target.value });
  };

  onChangeReps = (e) => {
    console.log(e);
    //makes a copy of the sets array in state
    var tempArray = this.state.sets

    //if the item at the id already exists
    if (tempArray[e.target.id]) {
      tempArray[e.target.id].reps = e.target.value
    }
    else {
      var newSet = {reps: 0, pounds: 777}
      newSet.reps = e.target.value
      tempArray[e.target.id] = newSet
    }

    this.setState({sets: tempArray})
  };

  onChangeRepWeight = (e) => {
    console.log(e);
    //makes a copy of the sets array in state
    var tempArray = this.state.sets

    //if the item at the id already exists
    if (tempArray[e.target.id]) {
      tempArray[e.target.id].pounds = e.target.value
    }
    else {
      var newSet = {reps: 777, pounds: 0}
      newSet.pounds = e.target.value
      tempArray[e.target.id] = newSet
    }

    this.setState({sets: tempArray})
  };

  onSubmit = (e) => {
    e.preventDefault();
    
    console.log(this.state)

    //axios.post('https://sculpt-fitness.herokuapp.com/lifting/add', tempLift)
  };

  render() {
    //create a reps element for each number in numberOfSets
    var arrayOfReps = [];
    for (let i = 0; i < this.state._numberOfSets; i++) {
      arrayOfReps.push(
        <div>
          <label>Set {i+1} Reps: </label>
          <input id={i} required onChange={this.onChangeReps} type="number" placeholder="5" min='1' max='100'></input>
          <label>Set {i+1} Weight: </label>
          <input id={i} required onChange={this.onChangeRepWeight} type="number" placeholder="20" min='10' step='5' max='1000'></input>
        </div>
      );
    }

    return (
      <>
        <h3>Add Lift</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Date: </label>
            <Calendar defaultView="month" onChange={this.onChangeDate} />
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

          {arrayOfReps}

          <button type="submit" className="">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default LiftSubmitter;

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
