import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import { Link } from "react-router-dom";
import headerimg from '../images/headerimg.jpg';
import './StartPage.css';
import { BrowserRouter as Router } from 'react-router-dom';
import cardioimg from '../images/runrunrun.jpg';
import liftingimg from '../images/lifting1.jpg';
import cardioimg2 from '../images/runrunrun2.jpg';
import liftingimg2 from '../images/lifting2.jpg';
// import { render } from '@testing-library/react';
import {Link} from '@material-ui/core';


function Copyright() {
  return (
    <Router>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        MRJ FITNESS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Router>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${headerimg})`,
    backgroundPosition: 'right center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(8, 0, 6),
    paddingTop: '100px'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    paddingTop: '80px'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  toolbar:{
    backgroundColor: "black",
  },
  paper: {
    padding: theme.spacing(1), //grid padding
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container:{
    backgroundColor: "black",
  }
}));


// const cards = [{runningimg}, {lifting}, {cardio}, {cardiotwo}];

// const cards = [{img:{runningimg}, title: 'run one'},
// {img:{lifting}, title: 'lift'},
// {img:{cardio}, title: 'cardio'},
// {img:{cardiotwo}, title: 'cardio two'}];

let cards = [1,2,3,4]





export default function StartPage() {
  const classes = useStyles();
  
  
  return (
  
    <Router>
      <CssBaseline />
      <Router>
      <AppBar position="relative">
      
        <Toolbar className={classes.toolbar}>
          {/* <CameraIcon img src={homeimg} className={classes.icon} /> */}

            <Link href="/"  style={{ textDecoration: 'none' , color: 'white'}}   >
          <Typography variant="h6" color="inherit" noWrap >
            MRJ FITNESS
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      </Router>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              MRJ FITNESS
            </Typography>
            
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  {/* <Button variant="contained" color="primary">
                    Main call to action
                  </Button> */}
                </Grid>
                <Grid item>
                  {/* <Button variant="contained" color="primary">
                    Secondary action
                  </Button> */}
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          
              <Grid item key={cards} xs={2} sm={2} md={6}>
              <Card className={classes.cards}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {cardioimg}
                    
                  />
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cardio
                    </Typography>
                    <Typography>
                      Create & Submit Your Cardio Routine
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                    <Link href= "/cardio"  style={{ textDecoration: 'none' }}>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={cards} xs={2} sm={2} md={6}>
              <Card className={classes.cards}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {liftingimg}
                    
                  />
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lifting
                    </Typography>
                    <Typography>
                      Create & Submit Your Lifting Routine
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                    <Link href="/lifting" style={{ textDecoration: 'none' }}>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={cards} xs={2} sm={2} md={6}>
              <Card className={classes.cards}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {cardioimg2}
                    
                  />
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cardio History
                    </Typography>
                    <Typography>
                     Access Your Cardio Routine. Update & Delete Available
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                    <Link href="/cardio/history" style={{ textDecoration: 'none' }}>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={cards} xs={2} sm={2} md={6}>
              <Card className={classes.cards}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {liftingimg2}
                    
                  />
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lifting History
                    </Typography>
                    <Typography>
                    Access Your Lifting Routine. Update & Delete Available
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                    <Link href="/lifting/history" style={{ textDecoration: 'none' }}>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              
            
          </Grid>
          
        </Container>
        
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          MRJ FITNESS
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Matthew Knight Lewis. Robert Shirak. Jesse Maretz.
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </Router>
  );
}

