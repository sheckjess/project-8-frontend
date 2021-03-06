import React, { Component } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router} from 'react-router-dom';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// Material UI
import { Container } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { InputLabel, Box } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from '@material-ui/core';

const axios = require("axios");

class LiftSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      musclegroup: "",
      lift: "",
      sets: [],
      _numberOfSets: 0
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
    //makes a copy of the sets array in state
    var tempArray = this.state.sets;
    //if the item at the id already exists
    if (tempArray[e.target.id]) {
      tempArray[e.target.id].reps = e.target.value;
    } else {
      var newSet = { reps: 0, pounds: 777 };
      newSet.reps = e.target.value;
      tempArray[e.target.id] = newSet;
    }
    this.setState({ sets: tempArray });
  };
  onChangeRepWeight = (e) => {
    //makes a copy of the sets array in state
    var tempArray = this.state.sets;
    //if the item at the id already exists
    if (tempArray[e.target.id]) {
      tempArray[e.target.id].pounds = e.target.value;
    } else {
      var newSet = { reps: 777, pounds: 0 };
      newSet.pounds = e.target.value;
      tempArray[e.target.id] = newSet;
    }
    this.setState({ sets: tempArray });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state._numberOfSets < this.state.sets.length)
      console.log("user deleted at least one set");
    var tempArray = this.state.sets;
    tempArray.length = this.state._numberOfSets;
    this.setState({ sets: tempArray });
    axios
      .post("https://sculpt-fitness.herokuapp.com/lifting/add", this.state)
      .then(() => {
        console.log("attempt submission");
        window.location = "/";
      });
  };
  render() {

    const centerit = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
  }
   
    const nicebuttons = {
      margin: "5px",
      backgroundColor: "black"
  };


    //create a reps element for each number in numberOfSets
    var arrayOfReps = [];
    for (let i = 0; i < this.state._numberOfSets; i++) {
      arrayOfReps.push(
        <div>
          <InputLabel>Set {i + 1} Reps: </InputLabel>
          <Input
            id={i}
            required
            onChange={this.onChangeReps}
            type="number"
            placeholder="5"
            min="1"
            max="100"
          ></Input>
          <InputLabel>Set {i + 1} Weight: </InputLabel>
          <Input
            id={i}
            required
            onChange={this.onChangeRepWeight}
            type="number"
            placeholder="20"
            min="10"
            step="5"
            max="1000"
          ></Input>
        </div>
      );
    }
    return (
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
        <h1>Add Lift</h1>
        <Box maxWidth={400}>
          <form onSubmit={this.onSubmit} style={centerit}>
            <div>
              <InputLabel>Date: </InputLabel>
              <Calendar defaultView="month" onChange={this.onChangeDate} />
            </div>
            <div style={{margin: "5px", centerit}}>
              <InputLabel>Muscle Group: </InputLabel>
              <select style= {{margin: '5px'}}
                required
                onChange={this.onChangeMuscleGroup}
                value={this.state.musclegroup}
              >
                <option>Legs</option>
                <option>Chest</option>
                <option>Arms</option>
                <option>Back</option>
              </select>
            </div>
            <div>
              <InputLabel>Lift Name: </InputLabel>
              <Input style={{margin: '5px'}}
                required
                onChange={this.onChangeLiftName}
                type="text"
                placeholder="Squat"
              ></Input>
            </div>
            <div>
              <InputLabel>Sets: </InputLabel>
              <Input
                required
                onChange={this.onChangeSets}
                type="number"
                placeholder="1"
                step="1"
                min="1"
                max="10"
              ></Input>
            </div>
            {arrayOfReps}
            <Button 
              variant="contained"
              color="primary"
              type="submit"
              style={nicebuttons}
            >
              Submit
            </Button>
            <Link href="/lifting/history">
            <Button 
              variant="contained"
              color="primary"
              type="submit"
              style={nicebuttons}>Lifting History</Button>
          </Link>
          </form>
        </Box>
      </Container>
      </Router>
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

    //Continuing thanks to Beau Carnes at freecodecamp for his MERN tutorial
*/
