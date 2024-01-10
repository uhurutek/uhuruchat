import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Container, Grid, Typography } from '@mui/material';
import ChoseUsCart from './ChoseUsCart';




const WhyChoseUs = () => {
    return (
        <Container>
            <Typography
                variant="h3"
                align="center"
                color="#602e13"
                sx={{
                    my: 4,
                    pt: 4,

                }}
                gutterBottom
            >
                Why Choose UhuruChat?


            </Typography>
            <Grid container justifyContent="center" spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <ChoseUsCart
                        title="Your Most Efficient Employee "
                        description={
                            <>
                                <li>No more missed inquiries. Ensuring customer support that never sleeps (24/7 support)</li>
                                <li>Provides real-time reply that mimics human touch.</li>
                                <li>
                                    Reduce your human workload by letting Uhuruchat handle basic ticket resolution.
                                </li>
                                <br></br><br></br><br></br> <br></br>
                            </>
                        }
                        icon={<AcUnitIcon />}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ChoseUsCart
                        title="AI Powered Customer Support"
                        description={
                            <>
                                <li>Leverages on advanced GPT-3.5 turbo language models from OpenAI, offering exceptional capabilities.

                                </li>
                                <li>Generate leads from your website visitors who engage with UhuruChat bot</li>
                                <li>
                                    Retrain your bot to keep updated by training it with the latest contents and knowledge base. </li>
                                <br></br><br></br><br></br>
                            </>
                        }
                        icon={<AcUnitIcon />}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ChoseUsCart
                        title="Easy Development, Integration, and use"
                        description={
                            <>
                                <li>Enables you to create a custom-made chatbot by giving it a name, avatar, or logo and configurable messages for end-users.


                                </li>
                                <li>Allows you to train your chatbot through contextual learning by providing a website link or knowledge base portal URL, or by uploading documents in PDF or document format, without requiring any coding</li>
                                <li>
                                    You can Integrate the chat widget in your website using the generated instructions.
                                </li>
                                <b></b>
                            </>
                        }
                        icon={<AcUnitIcon />}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default WhyChoseUs;
