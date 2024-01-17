import { Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import banner from '../../assets/images/uhuruchat_banner.png';

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
                            Your gateway to intelligent conversations
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 2, }}>
                            Seamless, smart, and easy to train chatbot solution – redefining customer experience with AI brilliance.

                        </Typography>
                        <Link href={`${process.env.NEXT_PUBLIC_PORTAL_URL}/register`} style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{
                                marginTop: 1,
                                padding: '8px 32px',
                                borderRadius: 24,
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                backgroundColor: '#d76227',
                                '&:hover': {

                                    backgroundColor: "#602e13",
                                },
                            }}>
                                Get started for FREE
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <Image src={banner} height={400} width={600} alt="Chatbot Illustration" style={imageStyle} />

                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default HeroSection;
