import { Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import image1 from '../../assets/images/whychose1.png';
import image2 from '../../assets/images/whychose2.png';
import image3 from '../../assets/images/whychose3.png';
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
                <Grid item xs={12} sm={8} md={8}>
                    <Grid container justifyContent="center" spacing={3}>
                        <Grid item xs={12} sm={12} md={12}>
                            <ChoseUsCart
                                title="Your most efficient employee "
                                description={
                                    <>
                                        <Typography variant='body1'> <li>No more missed enquiries. Ensuring customer support that never sleeps (24/7 support).</li></Typography>
                                        <Typography variant='body1'><li>Provides real-time reply that mimics human touch.</li></Typography>
                                        <Typography variant='body1'><li>
                                            Reduce your human workload by letting UhuruChat handle basic ticket resolution.
                                        </li></Typography>
                                    </>
                                }
                                icon={<Image src={image1} alt='' width={70} height={70} />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <ChoseUsCart
                                title="AI powered customer support"
                                description={
                                    <>
                                        <Typography variant='body1'>  <li>Our bot utilizes OpenAI’s gpt-3.5-turbo model to provide the most informative and relevant response possible.

                                        </li></Typography>
                                        <Typography variant='body1'><li>Generate leads from your website visitors who engage with UhuruChat bot.</li></Typography>
                                        <Typography variant='body1'><li>
                                            Keep your bot’s knowledge sharp! Feed it fresh content and updates to its knowledge base when needed. </li></Typography>

                                    </>
                                }
                                icon={<Image src={image2} alt='' width={70} height={70} />}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                    <ChoseUsCart
                        title="Easy development, integration, and use"
                        description={
                            <>
                                <Typography variant='body1'>  <li>
                                    Own your bot with custom color, avatar and name.
                                </li></Typography>
                                <Typography variant='body1'>  <li>
                                    Greet your visitors with welcome message you want.
                                </li></Typography>
                                <Typography variant='body1'>   <li>Train your chatbot with documents (PDF, DOC, TXT) and website. No coding needed.</li></Typography>
                                <Typography variant='body1'>   <li>
                                    Integrate the chat widget in your website easily using our guided instructions.
                                </li></Typography>
                                <br></br>  <br></br>  <br></br> <br></br>  <br></br>  <br></br><br></br><br></br><br></br>



                            </>
                        }
                        icon={<Image src={image3} alt='' height={70} width={70} />}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default WhyChoseUs;
