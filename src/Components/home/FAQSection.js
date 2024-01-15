import { Container, Typography } from "@mui/material";
import Faq from "react-faq-component";
const data = {
    rows: [
        {
            title: "What is Uhuruchat?",
            content: "Uhuruchat is an AI Chatbot builder for creating a personalized customer support system. It allows you to create and deploy your own custom GPT chatbot by uploading your website link or any PDF."
        },
        {
            title: "Can I give instructions or customize my bot?",
            content: "Yes, UhuruChat offers various customization options to tailor your chatbot's personality, tone, and responses. You can configure specific prompts, responses, and dialogues to align with your brand and goals."
        },
        {
            title: "How do I embed the chatbot into my website?",
            content: "Simply copy the provided JavaScript code snippet and put it in your website source to integrate the Uhuruchat widget into your website."
        },
        {
            title: "Does UhuruChat support multiple website links?",
            content: "Yes, UhuruChat can process multiple website links to train your chatbot and expand its knowledge base. This allows it to answer a broader range of questions accurately."
        },
        {
            title: "What type of files UhuruChat can read?",
            content: "UhuruChat supports doc, pdf, CSV utf-8 format to extract information."
        },
        {
            title: "Which GPT model is UhuruChat based on?",
            content: "UhuruChat utilizes advanced GPT-3.5 turbo language models from OpenAI, offering exceptional capabilities for natural language processing, question-answering, and conversation generation."
        }
    ]
};


const styles = {
    // bgColor: 'white',
    titleTextColor: "#602e13",
    rowTitleColor: "#602e13",
    // rowContentColor: 'grey',
    arrowColor: "#602e13",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};
const headerStyle = {
    color: '#602e13',
    textAlign: 'center',
};

const FAQSection = () => {
    return (
        <Container id="faq" sx={{
            pb: 7
        }}>
            <div style={headerStyle}>
                <Typography variant="h3" sx={{ my: 4, pt: 4 }}>FAQ</Typography>
            </div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </Container>
    );
};

export default FAQSection;