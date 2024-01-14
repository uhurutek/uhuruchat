import { Container, Typography } from "@mui/material";
import TabPanel from "./TabPanel";
import YouTubeVideo from "./YouTubeVideo";

const HowItWorks = () => {
    return (
        <Container id='howWork'>
            <Typography variant="h3"
                align="center"
                color="#602e13"
                gutterBottom
                mb={2}
            >
                How to get started
            </Typography>
            <Typography variant="body1"
                align="center"
                color="#602e13"
                gutterBottom
                mb={2}
            >
                Get empowered with AI-powered customer support and sales, craft your path to success.
            </Typography>

            <YouTubeVideo url='https://youtu.be/wwrPL2CWg1I?si=pXwv1nKQtBZZUQ7L' />

            <TabPanel />
        </Container>
    );
};

export default HowItWorks;