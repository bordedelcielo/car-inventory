import React from 'react';
import { Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    Theme,
    useTheme,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    CssBaseline,
    ThemeProvider,

} from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route } from 'react-router-dom';
import { HeadsetMic } from '@mui/icons-material';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex'
        },
        appBar:{
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        hide: {
            display: 'none'
        },
        drawer: {
            width: drawerWidth,
            flexString: 0 //Terrell typed 'flexShring'. Maybe that was on purpose?
        },
        drawerPaper:{
            width: drawerWidth
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end'
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            marginLeft: -drawerWidth
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
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
    return(
        <div>
            <h1>Dashboard 📊</h1>
        </div>
    )
})