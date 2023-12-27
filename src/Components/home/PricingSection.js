import StarIcon from "@mui/icons-material/StarBorder";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";


const tiers = [
    {
        title: "Free",
        subheader: "Cheap",
        price: "0",
        description: [
            "10 users included",
            "2 GB of storage",
            "Help center access",
            "Email support",
        ],
        buttonText: "Sign up for free",
        buttonVariant: "outlined",
        backgroundColor: '#fff',
        color: '#9f4923',
    },
    {
        title: "Pro",
        subheader: "Most popular",
        price: "15",
        description: [
            "20 users included",
            "10 GB of storage",
            "Help center access",
            "Priority email support",
        ],
        buttonText: "Get started",
        buttonVariant: "contained",
        backgroundColor: '#d76227',
        HBackgroundColor: '#9f4923',
        color: 'dark',
    },
    {
        title: "Enterprise",
        subheader: "popular",
        price: "30",
        description: [
            "50 users included",
            "30 GB of storage",
            "Help center access",
            "Phone & email support",
        ],
        buttonText: "Contact us",
        buttonVariant: "outlined",
        backgroundColor: '#fff',
        color: '#9f4923',
    },
];


export default function PricingSection() {
    return (
        <>
            <Container
                disableGutters
                maxWidth="sm"
                component="main"
                sx={{ pt: 8, pb: 6 }}
            >
                <Typography
                    variant="h3"
                    align="center"
                    color="#9f4923"
                    gutterBottom
                >
                    Pricing
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Quickly build an effective pricing table for your potential customers
                    with this layout. It&apos;s built with default MUI components with
                    little customization.
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main" sx={{ mb: 8 }}>
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === "Enterprise" ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: "center" }}
                                    action={tier.title === "Pro" ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: "center",
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === "light"
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "baseline",
                                            mb: 2,
                                        }}
                                    >
                                        <Typography
                                            component="h2"
                                            variant="h3"
                                            color="text.primary"
                                        >
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /mo
                                        </Typography>
                                    </Box>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Link href="/registration" style={{ textDecoration: 'none', width: '100%' }}>
                                        <Button sx={{
                                            borderColor: '#9f4923',
                                            color: tier.color,
                                            backgroundColor: tier.backgroundColor,
                                            '&:hover': {
                                                borderColor: '#9f4923',
                                                backgroundColor: tier.HBackgroundColor,
                                            },
                                        }} fullWidth variant={tier.buttonVariant}>
                                            {tier.buttonText}
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}