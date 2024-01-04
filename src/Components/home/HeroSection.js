import { Button, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';


const homeStyle = {
    backgroundColor: '#fff',
    color: '#602e13',
    paddingTop: 40,
    paddingBottom: 40,
}
const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: 8,
}
const HeroSection = () => {
    return (
        <div style={homeStyle}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">

                    <Grid item xs={12} md={6} >
                        <Typography variant="h3" sx={{
                            fontWeight: 'bold',
                            marginBottom: 5,
                        }}>
                            Transform Your Business with Chatbots
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 2, }}>
                            Engage customers, automate tasks, and boost sales with our AI-powered chatbot solutions.
                        </Typography>
                        <Link href="/registration" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{
                                marginTop: 1,
                                padding: '8px 32px',
                                borderRadius: 24,
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                backgroundColor: '#d76227',
                                '&:hover': {

                                    backgroundColor: "#602e13",
                                },
                            }}>
                                Get Started
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Chatbot Illustration"
                            style={imageStyle}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default HeroSection;
