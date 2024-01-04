import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

const TryIt = () => {
    return (
        <div style={{ paddingBottom: "25px" }}>

            <Container align="center" maxWidth="lg" sx={{ pb: 4, pt: 8, border: '2px solid #602e13', borderRadius: '7px' }}>
                <Typography variant="h3" sx={{
                    fontWeight: 'bold',
                    marginBottom: 5,
                    color: '#602e13',
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

                            backgroundColor: '#602e13',
                        },
                    }}>
                        Get Started
                    </Button>
                </Link>
            </Container>

        </div>
    );
};

export default TryIt;