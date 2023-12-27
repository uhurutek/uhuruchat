import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ReviewCard from './ReviewCard';

const useStyles = makeStyles((theme) => ({
    carouselContainer: {
        display: 'flex',
        overflowX: 'auto',
        // gap: theme.spacing(2),
        // padding: theme.spacing(2),
        // marginBottom: theme.spacing(2),
        scrollbarWidth: 'none', /* Hides scrollbar for Chrome */
        '-ms-overflow-style': 'none', /* Hides scrollbar for IE/Edge */
        '&::-webkit-scrollbar': {
            display: 'none', /* Hides scrollbar for Firefox */
        },
    },
}));
const reviews = [
    { name: 'John Doe', comment: 'Great service!', rating: 5 },
    { name: 'Alice Smith', comment: 'Amazing product!', rating: 4 },
    { name: 'Bob Johnson', comment: 'Excellent support!', rating: 4.5 },
    // Add more review objects as needed
];

const ReviewsCarousel = () => {
    const classes = useStyles();

    return (
        <Container sx={{ mb: 8, mt: 8 }}>
            <Typography
                variant="h3"
                align="center"
                color="#9f4923"
                gutterBottom
            >
                Loved by our customers
            </Typography>
            <div className={classes.carouselContainer}>
                <Grid container spacing={2}>
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            name={review.name}
                            comment={review.comment}
                            rating={review.rating}
                        />
                    ))}
                </Grid>
            </div>
        </Container>
    );
};

export default ReviewsCarousel;
