import { Button, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    heroSection: {
        backgroundColor: '#fff',
        color: '#9f4923',
        paddingTop: 40,
        paddingBottom: 40,
        // [theme.breakpoints.down('sm')]: {
        //     paddingTop: 24,
        //     paddingBottom: 24,
        // },
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: 8,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitle: {
        marginBottom: 32,
    },
    actionButton: {
        marginTop: 16,
        padding: '8px 32px',
        borderRadius: 24,
        fontSize: '1rem',
        fontWeight: 'bold',
        backgroundColor: '#9f4923',
    },
}));

const HeroSection = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroSection}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6} className={classes.imageContainer}>
                        {/* Replace imageSrc with your image URL */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://via.placeholder.com/600x400" // Replace with your image URL
                            alt="Chatbot Illustration"

                            className={classes.image}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.textContainer}>
                        <Typography variant="h3" className={classes.title}>
                            Transform Your Business with Chatbots
                        </Typography>
                        <Typography variant="body1" className={classes.subtitle}>
                            Engage customers, automate tasks, and boost sales with our AI-powered chatbot solutions.
                        </Typography>
                        <Button variant="contained" color="secondary" className={classes.actionButton}>
                            Get Started
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default HeroSection;
