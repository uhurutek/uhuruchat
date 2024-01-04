import { Container, Typography } from "@mui/material";
import CustomizeChatbot from "./CustomizeChatbot";
import PdfUpload from "./PdfUpload";

const HowToSetup = () => {
    return (
        <Container>
            <Typography variant='h3' align='center' color='#602e13' gutterBottom>
                How it works
            </Typography>
            <PdfUpload title="Share a link or PDF file" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque ratione illum nam reprehenderit fugiat. Ex eveniet nesciunt blanditiis optio." />
            <CustomizeChatbot title="Customize your chatbot" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque ratione illum nam reprehenderit fugiat. Ex eveniet nesciunt blanditiis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque ratione illum nam reprehenderit fugiat. Ex eveniet nesciunt blanditiis optio." />
            <PdfUpload title="Ready in 5 minutes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque ratione illum nam reprehenderit fugiat. Ex eveniet nesciunt blanditiis optio." />
            <CustomizeChatbot title="Embed Chatbot on site" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque ratione illum nam reprehenderit fugiat. Ex eveniet nesciunt blanditiis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque ratione illum nam reprehenderit fugiat. Ex eveniet nesciunt blanditiis optio." />
        </Container>
    );
};

export default HowToSetup;

