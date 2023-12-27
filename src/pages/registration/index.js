
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const theme = createTheme();

export default function SignInSide() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            "url(https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography variant="h3"
                            align="center"
                            color="#9f4923"
                            gutterBottom>
                            Sign up
                        </Typography>
                        <Box
                            // component="form"
                            noValidate
                            // onSubmit={handleSubmit}
                            sx={{ mt: 3 }}
                        >
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="name"
                                            name="name"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            autoFocus
                                            InputLabelProps={{
                                                style: { color: '#d76227' },

                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            InputLabelProps={{
                                                style: { color: '#d76227' },

                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="organization"
                                            name="organization"
                                            required
                                            fullWidth
                                            id="organization"
                                            label="Organization"
                                            InputLabelProps={{
                                                style: { color: '#d76227' },

                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                            InputLabelProps={{
                                                style: { color: '#d76227' },

                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="confirmPassword"
                                            label="Confirm Password"
                                            type="password"
                                            id="confirmPassword"
                                            autoComplete="new-password"
                                            InputLabelProps={{
                                                style: { color: '#d76227' },

                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox value="allowExtraEmails" color="primary" />
                                            }
                                            label="I want to receive inspiration, marketing promotions and updates via email."
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox value="allowTerms" color="primary" />
                                            }
                                            required
                                            label="I agree to the terms and conditions."
                                        />
                                    </Grid>

                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        mt: 3, mb: 2,

                                        backgroundColor: '#d76227',
                                        '&:hover': {

                                            backgroundColor: '#9f4923',
                                        },
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </form>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            mt: 1, backgroundColor: '#800000',
                                            '&:hover': {

                                                backgroundColor: 'red',
                                            },
                                        }}
                                    >
                                        Google
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            mt: 1,
                                        }}
                                    >
                                        Microsoft
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}