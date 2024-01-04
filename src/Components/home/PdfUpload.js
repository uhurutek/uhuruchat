import { Grid, Typography } from '@mui/material';



const PdfUpload = ({ title, text }) => {

    return (
        <Grid container spacing={3} mb={8}>
            <Grid item xs={12} md={6}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='img-fluid'
                    src="https://via.placeholder.com/600x400"
                    alt="Sample"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </Grid>
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
        </Grid>
    );
};

export default PdfUpload;
