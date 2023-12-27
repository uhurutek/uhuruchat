import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { SwipeableDrawer } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useState } from 'react';
const pages = [{ 'name': 'Home', 'url': '/' }, { 'name': 'About', 'url': '/about' }, { 'name': 'Contact', 'url': '/contact' }];

function NavBar() {
    const anchor = 'left';
    const [state, setState] = useState({
        left: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        console.log("object");
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <AppBar sx={{ backgroundColor: "#fff" }} position="sticky">
            <Container>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',

                                textDecoration: 'none',
                                color: '#d76227',
                                '&:hover': {

                                    color: '#9f4923',
                                },
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                            <Menu
                                id="menu-appbar"
                                // anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                // open={Boolean(anchorElNav)}
                                onClose={toggleDrawer}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    <Box
                                        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
                                        role="presentation"
                                        onClick={toggleDrawer(anchor, false)}
                                        onKeyDown={toggleDrawer(anchor, false)}
                                    >
                                        <div style={{ textAlign: 'right', backgroundColor: '#9f4923', }}>
                                            <Button
                                                sx={{
                                                    display: 'inline-block',
                                                    color: 'white',
                                                    padding: '8px 16px',
                                                    borderRadius: '4px',
                                                }}
                                            >
                                                X
                                            </Button>
                                        </div>


                                        {pages.map((page) => (
                                            <Link key={page.name} href={page.url} style={{ textDecoration: 'none' }}>
                                                <MenuItem onClick={toggleDrawer}>
                                                    <Typography textAlign="center">{page.name}</Typography>
                                                </MenuItem>
                                            </Link>
                                        ))}
                                    </Box>
                                </SwipeableDrawer>
                            </Menu>
                        </Box>
                        {/* mobile */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>



                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {pages.map((page) => (
                                    <Link key={page.name} href={page.url} style={{ textDecoration: 'none', display: { xs: 'none', md: 'flex' } }}>
                                        <Button
                                            onClick={toggleDrawer}
                                            sx={{
                                                my: 2, display: { xs: 'none', md: 'block' }, color: '#d76227',
                                                '&:hover': {

                                                    color: '#9f4923',
                                                },
                                            }}
                                        >
                                            {page.name}
                                        </Button>
                                    </Link>
                                ))}
                                <Link href="/registration">
                                    <FacebookOutlinedIcon sx={{
                                        display: {
                                            xs: 'none', md: 'block', color: '#d76227',
                                            '&:hover': {

                                                color: '#9f4923',
                                            },
                                        }
                                    }} />
                                </Link>
                                <Link href="/registration">
                                    <FacebookOutlinedIcon sx={{
                                        display: {
                                            xs: 'none', md: 'block', color: '#d76227',
                                            '&:hover': {

                                                color: '#9f4923',
                                            },
                                        }
                                    }} />
                                </Link>
                                <Link href="/registration">
                                    <FacebookOutlinedIcon sx={{
                                        display: {
                                            xs: 'none', md: 'block', color: '#d76227',
                                            '&:hover': {

                                                color: '#9f4923',
                                            },
                                        }
                                    }} />
                                </Link>
                                <Link href="/registration">
                                    <FacebookOutlinedIcon sx={{
                                        display: {
                                            xs: 'none', md: 'block', color: '#d76227',
                                            '&:hover': {

                                                color: '#9f4923',
                                            },
                                        }
                                    }} />
                                </Link>


                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={toggleDrawer(anchor, true)}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                        color: '#d76227',
                                        '&:hover': {

                                            color: '#9f4923',
                                        },
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>

                            </div>
                        </Box>
                    </Toolbar>
                </Container></Container>
        </AppBar >
    );
}
export default NavBar;