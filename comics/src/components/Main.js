import React from 'react';
import { makeStyles , useTheme} from '@material-ui/core/styles';
import Comics from './Comics';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
// import Button from '@material-ui/core/Button';

const drawerWidth = 240;
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
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }
}));


export default function Main() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    
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

{/* Comics, menu and Search */}
                <Grid container item xs={12} spacing={1}
                   direction="row"
                   justify="flex-start"
                   alignItems="flex-start"
                   className={classes.panels}
                   >
                       <Grid container item  sm={1} spacing={1}
                            direction="row"
                            justify="center"
                            alignItems="stretch">
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Drawer
                                    className={classes.drawer}
                                    variant="persistent"
                                    anchor="left"
                                    open={open}
                                    classes={{
                                    paper: classes.drawerPaper,
                                    }}
                                >
                                    <div className={classes.drawerHeader}>
                                    <IconButton onClick={handleDrawerClose}>
                                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                    </IconButton>
                                    </div>
                                    <Divider />
                                    <List>
                                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                        <ListItem button key={text}>
                                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                        <ListItemText primary={text} />
                                        </ListItem>
                                    ))}
                                    </List>
                                    
                                </Drawer>
                        </Grid>

                       {/* comic panel */}
                            <Grid container item xs={12} sm={9} spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="stretch">
                            <Comics/>
                            </Grid>

                        {/* right panel */}
                            <Grid item xs={12} sm={2} >
                                <div className={classes.rightpanel}>
                                    Hello World
                                </div>
                            </Grid>
                </Grid>
             </Grid>
        </div>
    )
}

