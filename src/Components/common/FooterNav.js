import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const FooterNav = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" style={{
            background: '#fff',
            padding: '30px 0 0 0',
            borderTop: '1px solid #d76227',
            borderBottom: '2px solid #e9ecee',
            color: "#364146"
        }}>
            <Box sx={{ bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item lg={4} md={6}>
                            <Box sx={{ py: 3 }}>
                                <Typography variant="h6" className="font-raleway" gutterBottom>
                                    UhuruTek
                                </Typography>
                                <Typography variant="body1">
                                    Dream big and allow UhuruTek to make your vision a ground-breaking reality. Experience a revolution that completely rewrites the rules of technology with our advanced solutions.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item lg={2} md={6}>
                            <Box sx={{ py: 3 }}>
                                <Typography variant="subtitle1" gutterBottom>
                                    Useful Links
                                </Typography>
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <Link href="#" sx={{
                                            color: '#602e13',
                                            '&:hover': {
                                                color: '#d76227',
                                            },
                                        }}>
                                            {'>'} Home
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <Link href="#about" sx={{
                                            color: '#602e13',
                                            '&:hover': {
                                                color: '#d76227',
                                            },
                                        }}>
                                            {'>'}  About us
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <Link href="#technology" sx={{
                                            color: '#602e13',
                                            '&:hover': {
                                                color: '#d76227',
                                            },
                                        }}>
                                            {'>'} Technology
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <Link href="#services" sx={{
                                            color: '#602e13',
                                            '&:hover': {
                                                color: '#d76227',
                                            },
                                        }}>
                                            {'>'}   Services
                                        </Link>
                                    </li>
                                </ul>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={6}>
                            <Box sx={{ py: 3, }} >
                                <Typography variant="subtitle1" gutterBottom>
                                    Our Services
                                </Typography>
                                <ul style={{ listStyleType: 'none', padding: 0, }}>
                                    <li style={{ marginBottom: '1rem' }} >
                                        <Link href="#services" sx={{
                                            color: '#602e13',
                                            '&:hover': {
                                                color: '#d76227',
                                            },
                                        }}>
                                            {'>'}  Software Development
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <Link href="#services" sx={{
                                            color: '#602e13',
                                            '&:hover': {
                                                color: '#d76227',
                                            },
                                        }}>
                                            {'>'} Web Development
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <Link href="#services" sx={{
                                            color: '#602e13',
                                            '&:hover': {
                                                color: '#d76227',
                                            },
                                        }}>
                                            {'>'} Mobile App Development
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        <Link href="#services" sx={{
                                            color: '#602e13',
                                            '&:hover': {
                                                color: '#d76227',
                                            },
                                        }}>
                                            {'>'} AI/ML Solutions
                                        </Link>
                                    </li>
                                </ul>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={6}>
                            <Box sx={{ py: 3 }}>
                                <Typography variant="subtitle1" gutterBottom>
                                    Contact Us
                                </Typography>
                                <Typography variant="body1">
                                    DOM-INNO PATIO, 2 Siddeshwari Road, B-1, Dhaka, 1217, BD
                                    <br />
                                    <strong>Phone:</strong>
                                    <Link href="tel:+8801846412513" sx={{
                                        color: '#602e13',
                                        '&:hover': {
                                            color: '#d76227',
                                        },
                                    }}>
                                        {" "} +880 1846-412513
                                    </Link>
                                    <br />
                                    <strong>Email:</strong>
                                    <Link href="mailto:info@uhurutek.com" sx={{
                                        color: '#602e13',
                                        '&:hover': {
                                            color: '#d76227',
                                        },
                                    }}>
                                        {" "} info@uhurutek.com
                                    </Link>
                                </Typography>
                                <Box sx={{ mt: 1 }}>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Link href="https://www.facebook.com/uhurutek" target="_blank" rel="noopener noreferrer" sx={{
                                            color: '#602e13',

                                            '&:hover': {
                                                color: '#d76227',
                                            },
                                        }}>
                                            <FacebookIcon />
                                        </Link>
                                        <Link href="https://www.instagram.com/uhurutek" target="_blank" rel="noopener noreferrer" sx={{
                                            color: '#602e13',
                                            '&:hover': {


                                                color: '#d76227',
                                            },
                                        }}>
                                            <InstagramIcon />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/uhurutek" target="_blank" rel="noopener noreferrer" sx={{
                                            color: '#602e13',
                                            '&:hover': {


                                                color: '#d76227',
                                            },
                                        }}>
                                            <LinkedInIcon />
                                        </Link>
                                        <Link href="whatsapp://send?phone=8801846412513" target="_blank" rel="noopener noreferrer" sx={{
                                            color: '#602e13',
                                            '&:hover': {


                                                color: '#d76227',
                                            },
                                        }}>
                                            <WhatsAppIcon />
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ bgcolor: '#f7f8f9', paddingBottom: '10px', paddingTop: '10px' }}>
                <Container maxWidth="lg">
                    <Typography variant="body2" align="center" color="black" sx={{ py: 2 }}>
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
