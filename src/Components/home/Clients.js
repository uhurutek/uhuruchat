import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    item: {
        textAlign: 'center',
        // padding: theme.spacing(2),
    },
}));

const Clients = () => {
    const classes = useStyles();

    // Mock image data for demonstration
    const images = [
        '/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg',
        '/image5.jpg', '/image6.jpg', '/image7.jpg', '/image8.jpg',
        // Add more image paths as needed
    ];

    return (
        <Container maxWidth="lg" sx={{ pb: 8, pt: 8 }}>
            <Typography
                variant="h3"
                align="center"
                color="#602e13"
                gutterBottom
            >
                Trusted by 100+ businesses

            </Typography>
            <Grid container spacing={3}>
                {images.map((image, index) => (
                    <Grid key={index} item xs={6} sm={3} className={classes.item}>
                        <Image
                            src={image}
                            alt={`Image ${index + 1}`}
                            width={150}
                            height={150}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Clients;