// import { render } from "@testing-library/react";
import React, { Component } from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import { Container } from '@material-ui/core';
// import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {  Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from '@material-ui/core';




class CardioHistory extends Component{
    constructor(props){
        super(props)
        this.state = {
            history: []
        }
    }

    componentDidMount = () => {
        let url = "http://sculpt-fitness.herokuapp.com/cardio"
        fetch(url)
            .then(res => res.json())
            .then(history=>{
                console.log(history)
                this.setState({history: history})
            })
    }


    // handleIdMap = (e) => {
    //     for (let i = 0; i< this.state.history.length; i++){
    //         this.state._id = this.state.history[i]._id
    //         console.log(e)
    //     }
    // }
    
    handleDelete = (id) => {
        let url = "https://sculpt-fitness.herokuapp.com/cardio/delete/" + id
        console.log(url)
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(hist => {
                this.state.history = hist
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleUpdate = (id) => {
        console.log(id)
        let url = "https://sculpt-fitness.herokuapp.com/cardio/specific/" + id
        console.log(url)
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
                <h1>Your Previous Cardio Workouts</h1>
                <Box>
                {
                    this.state.history.length ?
                    this.state.history.map((lift, i)=>{
                        console.log(lift)
                    return <div style={centerit}
                            key={i} >
                        {lift.date}<br/>
                        {lift.type}<br/>
                        {lift.minutes} minutes<br/>
                        {lift.miles} miles<br/>
                        {lift.calories} cals<br/><br/>
                        <Link href={`/cardio/edit/${lift._id}`}>
                            <Button style={nicebuttons}
                            onClick={() => {
                                this.handleUpdate(lift._id)
                            }}
                            variant="contained"
                            color='primary'>
                                update
                            </Button><br/>
                        </Link>
                        <Button style={nicebuttons}
                        onClick={() => {
                            this.handleDelete(lift._id)
                        }} 
                        variant="contained"
                        color="primary">
                            delete
                        </Button><br/>
                        <br/>
                        </div>
                        
                    }) : ""
                }
                <Link href='/cardio'>
                    <Button style={nicebuttons}
                        variant="contained"
                        color="primary">
                        Back
                    </Button>
                </Link>
                <Link href='/'>
                    <Button style={nicebuttons}
                        variant="contained"
                        color="primary">
                        Home
                    </Button>
                </Link>
                </Box>
            </Container>
            </Router>
        )
    }
}

export default CardioHistory