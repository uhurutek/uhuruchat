import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        maxWidth: '100%',
        height: 'auto',
        // borderRadius: theme.spacing(1),
    },
}));

const CustomizeChatbot = ({ title, text }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} mb={8}>

            <Grid item xs={12} md={6}>
                <div>
                    <Typography variant="h5" color='#9f4923' gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body1">
                        {text}
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://via.placeholder.com/600x400" // Replace with your image URL
                    alt="Sample"
                    className={classes.image}
                />
            </Grid>
        </Grid>
    );
};

export default CustomizeChatbot;
