import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const FooterNav = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer">
            <Box sx={{ bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item lg={4} md={6}>
                            <Box sx={{ py: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    UhuruTek
                                </Typography>
                                <Typography variant="body1">
                                    Dream big and allow UhuruTek to make your vision a ground-breaking reality. Experience a revolution that completely rewrites the rules of technology with our advanced solutions.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item lg={2} md={6}>
                            <Box sx={{ py: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    Useful Links
                                </Typography>
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    <li>
                                        <Link href="#" color="inherit">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#about" color="inherit">
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#technology" color="inherit">
                                            Technology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#services" color="inherit">
                                            Services
                                        </Link>
                                    </li>
                                </ul>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={6}>
                            <Box sx={{ py: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    Our Services
                                </Typography>
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    <li>
                                        <Link href="#services" color="inherit">
                                            Software Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#services" color="inherit">
                                            Web Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#services" color="inherit">
                                            Mobile App Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#services" color="inherit">
                                            AI/ML Solutions
                                        </Link>
                                    </li>
                                </ul>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={6}>
                            <Box sx={{ py: 3 }}>
                                <Typography variant="h6" gutterBottom>
                                    Contact Us
                                </Typography>
                                <Typography variant="body1">
                                    DOM-INNO PATIO, 2 Siddeshwari Road, B-1, Dhaka, 1217, BD
                                    <br />
                                    <strong>Phone:</strong>
                                    <Link href="tel:+8801846412513" color="inherit">
                                        +880 1846-412513
                                    </Link>
                                    <br />
                                    <strong>Email:</strong>
                                    <Link href="mailto:info@uhurutek.com" color="inherit">
                                        info@uhurutek.com
                                    </Link>
                                </Typography>
                                <Box sx={{ mt: 3 }}>
                                    <Typography variant="h6" gutterBottom>
                                        Social Links
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Link href="https://www.facebook.com/uhurutek" target="_blank" rel="noopener noreferrer">
                                            <FacebookIcon />
                                        </Link>
                                        <Link href="https://www.instagram.com/uhurutek" target="_blank" rel="noopener noreferrer">
                                            <InstagramIcon />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/uhurutek" target="_blank" rel="noopener noreferrer">
                                            <LinkedInIcon />
                                        </Link>
                                        <Link href="whatsapp://send?phone=8801846412513" target="_blank" rel="noopener noreferrer">
                                            <WhatsAppIcon />
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Typography variant="body2" align="center" color="text.secondary" sx={{ py: 2 }}>
                        &copy; <span id="currentYear">{currentYear}</span>{' '}
                        <strong>
                            <span>UhuruTek</span>
                        </strong>{' '}
                        . All Rights Reserved | Developed by <strong> UhuruTek </strong>
                    </Typography>
                </Container>
            </Box>
        </footer>
    );
};

export default FooterNav;
