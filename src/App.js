import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from './components/Card';
import './App.css';
import PrimarySearchAppBar from './components/Navbar';
import Grid from '@material-ui/core/Grid';
import BasicTable from './components/Table';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
        <PrimarySearchAppBar/>
      <div className={classes.root}>
      <Grid container spacing={5} {alignItems:"center"}>
        <Grid item xs={3}>
          <SimpleCard/>
        </Grid>
        <Grid item xs={3}>
       <SimpleCard/>
        </Grid>
        <Grid item xs={3}>
       <SimpleCard/>
        </Grid>
        <Grid item xs={3}>
          <SimpleCard/>
        </Grid>
      </Grid>
      </div>
      <br/>
      <Grid container spacing={1} {alignItems:"center"}>
      <Grid item xs={6}>
        <BasicTable/>
      </Grid>
      <Grid item xs={6}>
        <BasicTable/>
      </Grid>
      </Grid>
      </div>
  );
}

export default App;
