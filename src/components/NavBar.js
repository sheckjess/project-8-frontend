import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,

  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
      <AppBar position="static">
      
        <Toolbar className>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton> */}
          <Link to='/'style={{ textDecoration: 'none' }}>
          <Typography  variant="h6" className={classes.title}>
            MRJ FITNESS
          </Typography>
          </Link>
          {/* <Button href="/calender" color="inherit">Calender</Button> */}
        </Toolbar>
      </AppBar>
      </Router>
    </div>
  );
}
