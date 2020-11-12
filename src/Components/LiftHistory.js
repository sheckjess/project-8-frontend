import { render } from "@testing-library/react";
import React, { Component } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class LiftHistory extends Component{
    constructor(props){
        super(props)
        this.state = {
            history: []
        }
    }

    fetchHistory = (e) => {
        let url = "http://sculpt-fitness.herokuapp.com/lifting"
        axios.get(url)
            .then(res => {
                let history = res.data
                this.setState({ history })
            })
    }


    render(){
        return(
            <div>
                <h1>This is the lifting history</h1>
                <p>Soon to be replaced with API data...</p>
                <Link to='/lifting'>
                    <button>
                        Back
                    </button>
                </Link>
                <Link to='/'>
                    <button>
                        Home
                    </button>
                </Link>
            </div>
        )
    }
}


export default LiftHistory