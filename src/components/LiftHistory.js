// import { render } from "@testing-library/react";
import React, { Component } from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import { Container } from '@material-ui/core';
// import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from '@material-ui/core';

class LiftHistory extends Component{
    constructor(props){
        super(props)
        this.state = {
            history: []
        }
    }


    componentDidMount = () => {
        let url = "http://sculpt-fitness.herokuapp.com/lifting"
        fetch(url)
            .then(res => res.json())
            .then(history=>{
                console.log(history)
                this.setState({history: history})
            })
    }

    handleUpdate = (id) => {
        console.log(id)
        let url = "https://sculpt-fitness.herokuapp.com/lifting/update/" + id
        console.log(url)
    }

    handleDelete = (id) => {
        let url = "https://sculpt-fitness.herokuapp.com/lifting/delete/" + id
        console.log(url)
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(hist => {
                console.log(hist)
                this.state.history = hist
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return(
            <Router>
            <AppBar position="relative">
      
        <Toolbar style={{backgroundColor:"black"}}>

            <Link href="/"  style={{ textDecoration: 'none' , color: 'white'}}   >
          <Typography variant="h6" color="inherit" noWrap >
            MRJ FITNESS
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      
            <Container style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <h1>Your Previous Lifts</h1>
                <Box style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    {
                    this.state.history.length ?
                    this.state.history.map((lift, i)=>{
                    return <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}
                        key={i}>
                        {lift.date}<br/>
                        {lift.musclegroup}<br/>
                        {lift.lift}<br/>
                        {lift.sets[0].reps} reps {lift.sets[0].pounds} lbs.<br/>
                        <Link href={`/lifting/edit/${lift._id}`}>
                            <Button style={{margin: '5px', backgroundColor: "black"}}
                            onClick={() => {
                                this.handleUpdate(lift._id)
                            }}
                            variant="contained"
                            color="primary">
                                update
                            </Button>
                        </Link><br/>
                        <Button style={{margin: '5px', backgroundColor: "black"}}
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
                <Link href='/lifting'>
                    <Button style={{margin: '5px', backgroundColor: "black"}}
                        variant="contained"
                        color="primary">
                        Back
                    </Button>
                </Link>
                <Link href='/'>
                    <Button style={{margin: '5px', backgroundColor: "black"}}
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


export default LiftHistory