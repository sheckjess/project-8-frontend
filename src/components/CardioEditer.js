import React, { Component } from "react";
import { CollectionsOutlined } from '@material-ui/icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { InputLabel, Box } from '@material-ui/core';

class CardioEditer extends Component {
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
    componentDidMount(){
        this.getDetails()
    }

    getDetails(){
        let logId = this.props.match.params.id;
        let url = "https://sculpt-fitness.herokuapp.com/cardio/specific/" + logId
        fetch(url)
            .then(res => {
                this.setState({
                    date: res.data.date,
                    type: res.data.type,
                    minutes: res.data.minutes,
                    miles: res.data.miles,
                    calories: res.data.calories
                }, () => {
                    console.log(this.state)
                })
            })
            .catch(err => console.log(err))
    }



    render(){
        return(
            <div>
                <Container>
                    <Box>
                        <h1>{this.state.date}</h1>
                    </Box>
                    <Link to="/cardio/history">
                        <Button
                        variant="contained">
                            Cancel
                        </Button>
                    </Link>
                </Container>
            </div>
        )
    }
}

export default CardioEditer