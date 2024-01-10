import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Stepper from '@mui/material/Stepper';
import { useState } from 'react';
import registrationImage from '../../assets/images/register.png';
import TwoPartGrid from './TwoPartGrid';

const steps = ['Create Account', 'Create Bot', 'Trining Bot', 'Integrate Bot'];

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
                    <Typography sx={{ mt: 2, mb: 1, py: 1 }}>

                        {
                            activeStep === 0 && <TwoPartGrid key={activeStep} title={"Create Account"} textContent={<>
                                <li>Click on “registration”</li>
                                <li>Provide your name, email and set password</li>
                                <li>Verify email address </li>
                            </>} image={registrationImage} contentPosition="left" />
                        }
                        {
                            activeStep === 1 && <TwoPartGrid key={activeStep} title={"Create Bot"} textContent={<>
                                <li>Personalize your bot
                                </li>
                                <li>
                                    Give it a  name, avatar, color, and data source (URL, doc, pdf etc),

                                </li>
                                <li>
                                    Feed insights to generate more accurate information
                                </li>
                            </>} image={registrationImage} />
                        }
                        {
                            activeStep === 2 && <TwoPartGrid key={activeStep} title={"Train Bot"} textContent={<>
                                <li>
                                    Click on “Train Bot”
                                </li>
                                <li>
                                    Provide Website URL and knowledge base portal, or upload any document to train.Takes only few minutes
                                </li><li>

                                    Test your bot in Chat Playground
                                </li>
                            </>} image={registrationImage} contentPosition="left" />
                        }
                        {
                            activeStep === 3 && <TwoPartGrid key={activeStep} title={"Integrate  Bot"} textContent={<>
                                <li>Click “Integrate Bot”

                                </li>
                                <li>
                                    Copy the provided JavaScript code snippet and put in your website source to Integrate the Uhuruchat widget in your website.
                                </li>
                                <li>
                                    Click “Run” and it’s ready to use!
                                </li>
                            </>} image={registrationImage} />
                        }
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1, border: "1px solid #d76227" }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext} sx={{ mr: 1, border: "1px solid #d76227", color: "#d76227" }}
                            disabled={activeStep >= 3}
                        >

                            {activeStep === 3 ? 'Finished' : 'Next'}
                        </Button>
                    </Box>


                </div>
            </Box>
        </Container>
    );
}