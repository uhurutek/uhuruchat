import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const pages = [{ 'name': 'Home', 'url': '/' }, { 'name': 'About', 'url': '/about' }, { 'name': 'Contact', 'url': '/contact' }];
function ProductSiteNav() {

    const anchor = 'left';
    const [state, setState] = useState({
        left: false,
    });
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
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
        <AppBar sx={{
            backgroundColor: "#fff", position: isSticky ? 'sticky' : 'static',
            top: isSticky ? 0 : 'auto',
            zIndex: isSticky ? 1000 : 'auto',
        }} >
            <Container>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Image src="https://uhurutek.com/assets/img/uhurutek_logo.svg" alt="logo" width={150} height={50} />
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                            <Menu
                                id="menu-appbar"
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
                                        <div style={{ textAlign: 'right', backgroundColor: '#602e13', }}>
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

                                        {/* Mobile  */}
                                        {pages.map((page) => (
                                            <Link key={page.name} href={page.url} style={{ textDecoration: 'none' }}>
                                                <MenuItem onClick={toggleDrawer} sx={{
                                                    color: '#602e13',
                                                    '&:hover': {
                                                        color: '#d76227',
                                                    },


                                                }}>
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
                                {/* Desktop   */}
                                {pages.map((page) => (
                                    <Link key={page.name} href={page.url} style={{ textDecoration: 'none', display: { xs: 'none', md: 'flex' } }}>
                                        <Button
                                            onClick={toggleDrawer}
                                            sx={{
                                                my: 2, display: { xs: 'none', md: 'block' },
                                                textTransform: 'none',
                                                color: '#602e13',
                                                '&:hover': {

                                                    color: '#d76227',
                                                },

                                                fontFamily: 'sans-serif',
                                                fontSize: 15,
                                                padding: '0px 18px',
                                            }}
                                        >
                                            {page.name}
                                        </Button>
                                    </Link>
                                ))}
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Link href="https://www.facebook.com/uhurutek" target="_blank" rel="noopener noreferrer" >
                                        <FacebookIcon sx={{
                                            color: '#602e13',
                                            fontSize: 21,
                                            marginTop: .3,
                                            '&:hover': {
                                                color: '#d76227',

                                            },
                                        }} />
                                    </Link>
                                    <Link href="https://www.instagram.com/uhurutek" target="_blank" rel="noopener noreferrer" >
                                        <InstagramIcon sx={{
                                            color: '#602e13',
                                            fontSize: 21,
                                            marginTop: .3,
                                            '&:hover': {
                                                color: '#d76227',

                                            },
                                        }} />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/uhurutek" target="_blank" rel="noopener noreferrer" >
                                        <LinkedInIcon sx={{
                                            color: '#602e13',
                                            fontSize: 21,
                                            marginTop: .3,
                                            '&:hover': {
                                                color: '#d76227',
                                            },
                                        }} />
                                    </Link>
                                    <Link href="whatsapp://send?phone=8801846412513" target="_blank" rel="noopener noreferrer" >
                                        <WhatsAppIcon sx={{
                                            color: '#602e13',
                                            fontSize: 21,
                                            marginTop: .3,
                                            '&:hover': {
                                                color: '#d76227',
                                            },
                                        }} />
                                    </Link>
                                </Box>

                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={toggleDrawer(anchor, true)}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                        color: '#602e13',
                                        '&:hover': {

                                            color: '#d76227',
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
export default ProductSiteNav;