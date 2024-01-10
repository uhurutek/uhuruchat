import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
const TwoPartGrid = ({ title, textContent, image, contentPosition }) => {
    const isContentOnLeft = contentPosition;

    const contentGridItem = (
        <Grid item xs={12} md={6}>
            <>
                <Typography variant="h3" color='#602e13' sx={{ my: 2 }} gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h6">
                    {textContent}
                </Typography>
            </>
        </Grid>
    );

    const imageGridItem = (
        <Grid item xs={12} md={6}>
            <Image
                src={image}
                alt="Sample"
                width={600}
                height={400}
                style={{ maxWidth: '100%' }}
            />
        </Grid>
    );

    return (
        <Grid container spacing={3} mb={8}>
            <Grid item xs={12}>
                <Grid container spacing={3} justifyContent="center">
                    {isContentOnLeft ? contentGridItem : imageGridItem}
                    {isContentOnLeft ? imageGridItem : contentGridItem}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TwoPartGrid;
