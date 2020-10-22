import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TimelineIcon from '@material-ui/icons/Timeline';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: '10px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
 
  return (
    <Card style={{marginTop: '50px', height: '200px', width:'20%'}} className={classes.root}>
      <CardContent>
        <div style={{position:'relative'}}>
      <TimelineIcon style={{ 
                            position:'absolute',
                            fontSize: '3rem',
                            right: 0,
                            top: '-15px',
                     }} />
          </div>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <h2>TOTAL TRAFFIC</h2>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <h1>456,890</h1>
        </Typography>
        <Typography variant="body2" component="p">
          Since last month
          <br />
        </Typography>
                           <br />
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
