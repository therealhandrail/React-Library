import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menuOpen: false };
    }

    sideBar = () => {
        const NavigateToPage = (page) => {
            window.location.assign(page);
        }
        return(
            <Drawer open={this.state.menuOpen} onClose={() => this.setState({ menuOpen: false })}>
                <ListItem Button onClick={() => {NavigateToPage("/")}}>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem Button onClick={() => {NavigateToPage("/Account")}}>
                    <ListItemText primary="Account" />
                </ListItem>
            </Drawer>
        )}

    header = () => {
        return (
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            onClick={() => this.setState({ menuOpen: true })}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Header
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

    footer = () => {
        return (
            <div>
                <Toolbar>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Account">
                                Account
                            </Link>
                        </li>
                    </ul>
                </Toolbar>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.sideBar()}
                {this.header()}
                <div style={{ height: '100vh' }}>
                    {this.props.children}
                </div>
                {this.footer()}
            </div>
        );
    }
}

Container.propTypes = {
    children: PropTypes.node,
};

export default Container;