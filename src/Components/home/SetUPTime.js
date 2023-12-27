import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

const SetUPTime = () => {
    return (
        <div style={{ paddingBottom: "25px" }}>

            <Container align="center" maxWidth="lg" sx={{ pb: 4, pt: 8, border: '2px solid #9f4923', borderRadius: '7px' }}>
                <Typography variant="h3" sx={{
                    fontWeight: 'bold',
                    marginBottom: 5,
                    color: '#9f4923',
                }}>
                    5 minute set-up process

                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2, }}>
                    Spend 5 minutes to get a ChatGPT powered chatbot that works 24/7 to help you engage and retain more users and boost conversions.
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

                            backgroundColor: '#9f4923',
                        },

                    }}>
                        Get Started
                    </Button>
                </Link>
            </Container>

        </div>
    );
};

export default SetUPTime;