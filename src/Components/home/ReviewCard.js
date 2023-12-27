import { Avatar, Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 400,
        margin: 'auto',
        backgroundColor: '#f9f9f9',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
    },
    rating: {
        display: 'flex',
        alignItems: 'center',
    },

}));

const ReviewCard = ({ name, comment, rating }) => {
    const classes = useStyles();

    const avatarUrl = `https://i.pravatar.cc/150?u=${name}`;

    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <div>
                        <Avatar alt={name} src={avatarUrl} className={classes.avatar} />

                        <div className={classes.rating}>
                            <Typography variant="h6">Rating:</Typography>
                            <Rating value={rating} readOnly />
                        </div>
                        <Typography variant="subtitle1" gutterBottom>
                            {comment}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            - {name}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ReviewCard;
