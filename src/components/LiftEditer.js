import React, { Component } from "react";
// import { CollectionsOutlined } from '@material-ui/icons';
import { BrowserRouter as Router } from 'react-router-dom'
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

class LiftEditer extends Component {
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


      componentDidMount(){
        this.getDetails()
    }

    getDetails = () => {
        let logId = this.props.match.params.id;
        let url = "https://sculpt-fitness.herokuapp.com/lifting/specific/" + logId
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    date: data.date,
                    musclegroup: data.musclegroup,
                    lift: data.lift,
                    sets: data.sets,
                    _numberOfSets: data.sets.length
                }, () => {
                    console.log(this.state)
                })
            })
            .catch(err => console.log(err))
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
        e.preventDefault()

        let logId = this.props.match.params.id;
        let url = "https://sculpt-fitness.herokuapp.com/lifting/update/" + logId
        console.log(this.state)
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                this.setState({
                    date: data.date,
                    musclegroup: data.musclegroup,
                    lift: data.lift,
                    sets: data.sets,
                    _numberOfSets: data._numberOfSets})
            })
            .catch(err => console.log(err))
            alert("Updated successfully!")
            window.location = "/lifting/history/"
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
    };



        var arrayOfReps = [];
            for (let i = 0; i < this.state._numberOfSets; i++) {
            arrayOfReps.push(
                <div key={i}>
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
                <Container style={centerit}>
                    <Box>
                        <h1>Edit Lifting Entry</h1>
                    </Box>
                    <Box >
                        <form style={centerit}
                        onSubmit={this.onSubmit}>
                            <div>
                                <InputLabel>Date: </InputLabel>
                                <Calendar defaultView="month" onChange={this.onChangeDate} />
                            </div>
                            <div style={{margin:"5px", centerit}}>
                                <InputLabel style={{margin:"5px"}}
                                >Muscle Group: </InputLabel>
                                <select 
                                    required
                                    onChange={this.onChangeMuscleGroup}
                                    value={this.state.musclegroup}>
                                    <option>Legs</option>
                                    <option>Chest</option>
                                    <option>Arms</option>
                                    <option>Back</option>
                                </select>
                            </div>
                            <div className="">
                                <InputLabel>Lift Name: </InputLabel>
                                <Input
                                    required
                                    onChange={this.onChangeLiftName}
                                    type="text"
                                    placeholder="Squat"
                                ></Input>
                            </div>
                            <div className="">
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
                        </form>
                    </Box>
                    <Link href="/lifting/history">
                        <Button 
                        style={nicebuttons}
                        variant="contained"
                        color="primary">
                            Cancel
                        </Button>
                    </Link>
                </Container>
            </div>
            </Router>
        )
    }
}

export default LiftEditer