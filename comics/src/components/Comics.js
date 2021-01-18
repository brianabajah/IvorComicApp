import React from 'react';

import cmbooks from '../resources/cmbooks.json';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });



export default function Comics() {
    const classes = useStyles();

    return (
            <>
            {cmbooks.res.map((d,i)=>{
                return(
                <Grid item key={i}>
                <Card className={classes.root}>
                        <CardActionArea>
                            <Image 
                                src={d.url}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                   {d.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {d.releaseDate}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                </Grid>
                )
            })}
            
        </>
    )
}
