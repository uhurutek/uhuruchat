import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Stepper from '@mui/material/Stepper';
import { useState } from 'react';
import createBotImage from '../../assets/images/create_bot.png';
import integrateBotImage from "../../assets/images/integrate_bot.png";
import registrationImage from '../../assets/images/register.png';
import trainBotImage from '../../assets/images/train-chatbot.png';

import TwoPartGrid from './TwoPartGrid';

const steps = ['Register', 'Create ', 'Train', 'Integrate'];

export default function TabPanel() {
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <Container sx={{ paddingTop: "35px" }}>
            <Box sx={{ width: '100%' }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} >
                            <StepButton
                                sx={{
                                    '& .MuiStepLabel-root .Mui-active': {
                                        color: '#613015', // circle color (ACTIVE)
                                    },
                                }}
                                onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    <div style={{ marginTop: "16px", marginBottom: "8px", paddingTop: "8px", paddingBottom: "8px" }}>

                        {
                            activeStep === 0 && <TwoPartGrid key={activeStep} imageGrid={8} textGrid={4} imageHight={400} imageWidth={800} title={<Typography variant='h4' color="#602e13"
                                gutterBottom>Create Account</Typography>} textContent={<>
                                    <Typography variant='body1'> <li>Click on “registration”</li></Typography>
                                    <Typography variant='body1'> <li>Provide your name, email and set password</li></Typography>
                                    <Typography variant='body1'>   <li>Verify email address </li></Typography>
                                </>} image={registrationImage} contentPosition="left" />
                        }
                        {
                            activeStep === 1 && <TwoPartGrid imageGrid={7} textGrid={5} key={activeStep} imageHight={400} imageWidth={800} title={<Typography variant='h4' color="#602e13"
                                gutterBottom>Create Bot</Typography>} textContent={<>
                                    <Typography variant='body1'>  <li>Personalize your bot
                                    </li></Typography>
                                    <Typography variant='body1'>  <li>
                                        Give it a  name, avatar, color, and data source (URL, doc, pdf etc),

                                    </li></Typography>
                                    <Typography variant='body1'>    <li>
                                        Feed insights to generate more accurate information
                                    </li></Typography>
                                </>} image={createBotImage} />
                        }
                        {
                            activeStep === 2 && <TwoPartGrid imageGrid={7} textGrid={5} imageHight={400} imageWidth={800} key={activeStep} title={<Typography variant='h4' color="#602e13"
                                gutterBottom>Train Bot</Typography>} textContent={<>
                                    <Typography variant='body1'> <li>
                                        Click on “Train Bot”
                                    </li></Typography>
                                    <Typography variant='body1'>   <li>
                                        Provide Website URL and knowledge base portal, or upload any document to train.Takes only few minutes
                                    </li></Typography>
                                    <Typography variant='body1'><li>

                                        Test your bot in Chat Playground
                                    </li></Typography>
                                </>} image={trainBotImage} contentPosition="left" />
                        }
                        {
                            activeStep === 3 && <TwoPartGrid imageGrid={7} textGrid={5} imageHight={400} imageWidth={800} key={activeStep} title={<Typography variant='h4' color="#602e13"
                                gutterBottom>Integrate  Bot</Typography>} textContent={<>
                                    <Typography variant='body1'> <li>Click “Integrate Bot”

                                    </li></Typography>
                                    <Typography variant='body1'> <li>
                                        Copy the provided JavaScript code snippet and put in your website source to Integrate the Uhuruchat widget in your website.
                                    </li></Typography>
                                    <Typography variant='body1'>  <li>
                                        Click “Run” and it’s ready to use!
                                    </li></Typography>
                                </>} image={integrateBotImage} />
                        }
                    </div>
                    {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button

                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1, border: "1px solid #d76227", color: "#d76227" }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext} sx={{ mr: 1, border: "1px solid #d76227", color: "#d76227" }}
                            disabled={activeStep >= 3}
                        >

                            {activeStep === 3 ? 'Finished' : 'Next'}
                        </Button>
                    </Box> */}


                </div>
            </Box>
        </Container>
    );
}