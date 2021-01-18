import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Comics from './Comics';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background:"yellow",
    color: theme.palette.text.secondary,
  },
}));


export default function Main() {
    const classes = useStyles();
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
          <div className={classes.root}>
             <Grid container spacing={3}
              direction="row"
              justify="center"
              alignItems="stretch">

                <Grid item sm={11} >
                <Carousel>
                    {
                        items.map( (item, i) => {
                            return (
                                <Paper key={i} className={classes.paper} >
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>                        
                                </Paper>
                            )

                        } )
                    }
                </Carousel>
                </Grid>

                <Comics/>

             </Grid>
        </div>
    )
}

