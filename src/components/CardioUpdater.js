import { CollectionsOutlined } from '@material-ui/icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class CardioUpdater extends Component{
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
    componentWillMount(){
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
                    <Link to="/cardio">
                        <Button>
                            Cancel
                        </Button>
                    </Link>
                </Container>
            </div>
        )
    }
}

export default CardioUpdater