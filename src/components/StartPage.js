import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
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
import Link from '@material-ui/core/Link';
import headerimg from '../images/headerimg.jpg'
import './StartPage.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import homeimg from '../images/home.png'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        MRJ FITNESS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
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
  container:{
    backgroundColor: "black",
  }
}));


const cards = [1, 2, 3, 4,];


export default function Album() {
  const classes = useStyles();
  
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
      <AppBar position="relative">
      
        <Toolbar className={classes.toolbar}>
          {/* <CameraIcon img src={homeimg} className={classes.icon} /> */}
          
            <Link to="/" style={{ textDecoration: 'none' }} color="white" style={{cursor: "pointer"}} >
          <Typography variant="h6" color="inherit" noWrap>
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
            <Typography variant="h4" align="center" color="textSecondary" className="headertext" paragraph>
              
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
            {cards.map((card) => (
              <Grid item key={card} xs={2} sm={2} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
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
    </React.Fragment>
  );
}

