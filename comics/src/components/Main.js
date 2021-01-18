import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Comics from './Comics';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
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
  rightpanel:{
    backgroundColor:"pink",
    marginBottom:0
  },
//   panels:{
//     [theme.breakpoints.down('sm')]: {
//         backgroundColor: theme.palette.secondary.main,
//         justify:"center"
//       },
//       [theme.breakpoints.up('sm')]: {
//         backgroundColor: theme.palette.secondary.main,
//         justify:"space-between"
//       }
//   }
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
              <CssBaseline />
             <Grid container spacing={3}
              direction="row"
              justify="center"
              alignItems="stretch">

{/* Jumbtron */}
                <Grid item sm={12} >
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

{/* Comics menu and Search */}
                <Grid container item xs={12} spacing={2}
                   direction="row"
                   justify="space-between"
                   alignItems="stretch"
                   className={classes.panels}
                   >
                       <Grid container item xs={12} sm={9} spacing={3}
                            direction="row"
                            justify="center"
                            alignItems="stretch">

                        </Grid>

                       {/* comic panel */}
                            <Grid container item xs={12} sm={9} spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="stretch">
                            <Comics/>
                            </Grid>

                        {/* right panel */}
                            <Grid item xs={12} sm={3} >
                                <div className={classes.rightpanel}>
                                    Hello World
                                </div>
                            </Grid>
                </Grid>
             </Grid>
        </div>
    )
}

