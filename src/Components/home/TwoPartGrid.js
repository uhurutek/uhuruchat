import { Grid } from '@mui/material';
import Image from 'next/image';
const TwoPartGrid = ({ title, textContent, image, contentPosition, imageGrid, textGrid, imageHight, imageWidth }) => {
    const isContentOnLeft = contentPosition;

    const contentGridItem = (
        <Grid item xs={12} md={textGrid}>
            <>
                {title}
                {textContent}
            </>
        </Grid>
    );

    const imageGridItem = (
        <Grid item xs={12} md={imageGrid} >
            <Image
                src={image}
                alt="Sample"
                width={imageWidth}
                height={imageHight}
                style={{ maxWidth: '100%', marginTop: "9px", border: '1px solid #eaeaea', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            />
        </Grid>
    );

    return (
        <Grid container spacing={3} >
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
