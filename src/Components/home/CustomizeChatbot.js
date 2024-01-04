import { Grid, Typography } from '@mui/material';


const CustomizeChatbot = ({ title, text }) => {

    return (
        <Grid container spacing={3} mb={8}>

            <Grid item xs={12} md={6}>
                <div>
                    <Typography variant="h5" color='#602e13' gutterBottom>
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
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </Grid>
        </Grid>
    );
};

export default CustomizeChatbot;
