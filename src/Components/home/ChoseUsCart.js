import { Card, CardContent, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    card: {
        margin: 2,
        padding: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: 2,
        backgroundColor: '#f5f5f5',
    },
    icon: {
        width: 7,
        height: 7,
        marginBottom: 2,
    },
}));

const ChoseUsCart = ({ title, description, icon }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid container direction="column" alignItems="center" spacing={2}>
                    <Grid item>
                        {icon}
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" align="center" color={'#602e13'} gutterBottom>
                            {title}
                        </Typography>
                        {description}


                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ChoseUsCart;