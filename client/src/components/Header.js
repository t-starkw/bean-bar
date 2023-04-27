import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import bean from '../img/trio.jpg'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    height: '600px',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundImage: `url(${bean})`,
    backgroundSize: "cover",

}));



export default function Header() {
    const [state, setState] = React.useState({
        left: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem>
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Section 1" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Section 2" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </Box>
    );
    return (
        <>
            <Typography>
                <h4 align="center">Open 6:00 AM - 6:00PM daily.</h4>
            </Typography>

            <AppBar position="static" color="transparent">
                <StyledToolbar>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer('left', true)}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={state['left']}
                        onClose={toggleDrawer('left', false)}
                    >
                        {list('left')}
                    </Drawer>
                    <Typography
                        variant="h2"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, alignSelf: 'flex-start' }}
                    >
                        <h3 align="center" >BEAN & BREW</h3>
                    </Typography>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="display more actions"
                        edge="end"
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>

            </StyledToolbar>
        </AppBar>
            </>
            )
}

