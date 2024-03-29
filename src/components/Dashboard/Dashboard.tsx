import React, { useState } from 'react';
import { Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    Theme,
    // useTheme,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    CssBaseline,
    ThemeProvider, //optional?
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle

} from '@mui/material';
import { makeStyles, useTheme, withStyles, styled, createStyles } from '@mui/styles' //if you have issues, erase "styled" and/or "withStyles"
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route } from 'react-router-dom';
import { DataTable, CarForm } from '../../components';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex'
        },
        appBar:{
            // transition: theme.transitions.create(['margin', 'width'], {
            //     easing: theme.transitions.easing.sharp,
            //     duration: theme.transitions.duration.leavingScreen
            // }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            // transition: theme.transitions.create(['margin', 'width'], {
            //     easing: theme.transitions.easing.easeOut,
            //     duration: theme.transitions.duration.enteringScreen
            // })
        },
        menuButton: {
            // marginRight: theme.spacing(2) // problematic?
        },
        hide: {
            display: 'none'
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0 //Terrell typed 'flexShring'. Maybe that was on purpose? Now he's saying it's flexShrink?
        },
        drawerPaper:{
            width: drawerWidth
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            // padding: theme.spacing(0, 1), // problematic?
            // ...theme.mixins.toolbar, // problematic?
            justifyContent: 'flex-end'
        },
        content: {
            flexGrow: 1,
            padding: 80,
            // transition: theme.transitions.create('margin', {
            //     easing: theme.transitions.easing.sharp,
            //     duration: theme.transitions.duration.leavingScreen
            // }),
            marginLeft: -drawerWidth
        },
        contentShift: {
            // transition: theme.transitions.create('margin', {
            //     easing: theme.transitions.easing.easeOut,
            //     duration: theme.transitions.duration.enteringScreen
            // }),
            marginLeft: 0
        },
        toolbar: {
            display: 'flex'
        },
        toolbar_button: {
            marginLeft: 'auto'
        }
    })
)

interface DashProps{
    history: RouteComponentProps['history'],
    location: RouteComponentProps['location'],
    match: RouteComponentProps['match']
}

export const Dashboard = withRouter(( props:DashProps ) => {
    console.log(props)
    const { history } = props;
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    // Handle the dialog open/close
    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    }

    const handleDialogClickClose = () => {
        setDialogOpen(false);
    }
        
    const itemsList = [
        {
            text: 'Home',
            onClick: () => history.push('/')
        },
        {
            text: 'Sign In',
            onClick: () => history.push('/signin')
        }
    ]

    return(
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position='fixed' className={clsx(classes.appBar, {
                [classes.appBarShift]: open
            })}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton color='inherit' aria-label='open drawer' onClick={handleDrawerOpen}
                        edge='start' className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' noWrap>
                        Dashboard
                    </Typography>
                    <Button className={classes.toolbar_button} onClick={handleDialogClickOpen} style={{ backgroundColor:'whitesmoke', marginLeft:'auto' }}> Create New Car</Button>
                    
                    {/* Dialog Popup begin */}
                    <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby='form-dialog-title'>
                        <DialogTitle id='form-dialog-title'> Add New Car

                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>Fill out the Form to Add a Car!</DialogContentText>
                            <CarForm/>
                        </DialogContent>
                        <DialogActions><Button onClick={handleDialogClickClose}>Cancel</Button>
                        </DialogActions>
                    </Dialog>
                
                </Toolbar>
            </AppBar>
            <MUIDrawer
                className={classes.drawer} variant='persistent' anchor='left' open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                        {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {itemsList.map((item,index) =>{
                        const {text, onClick } = item;
                        return(
                            <ListItem button key={text} onClick={onClick}>
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })}
                </List>
            </MUIDrawer>

            <main className={clsx(classes.content, {
                [classes.contentShift]: open
            })}>

                <div className={classes.drawerHeader}></div>
                <DataTable/>
                {/* <h1>Dashboard 📊 needs some data later</h1>           */}
            </main>
        </div>
    )
})