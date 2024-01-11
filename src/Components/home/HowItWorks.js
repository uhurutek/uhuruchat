import { Container, Typography } from "@mui/material";
import TabPanel from "./TabPanel";
import YouTubeVideo from "./YouTubeVideo";

const HowItWorks = () => {
    return (
        <Container>
            <Typography variant="h3"
                align="center"
                color="#602e13"
                gutterBottom
                mb={2}
            >
                How to get started
            </Typography>
            <YouTubeVideo url='https://www.youtube.com/watch?v=wWgIAphfn2U' />

            <TabPanel />
        </Container>
    );
};

export default HowItWorks;