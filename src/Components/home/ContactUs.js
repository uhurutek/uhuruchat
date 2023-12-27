import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //
    };

    return (
        <>
            <Typography variant="h3"
                align="center"
                color="#9f4923"
                gutterBottom
                mb={2}>
                Contact Us
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: "50px",
                }}
            >

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        maxWidth: 600,
                        mx: "auto",
                        p: 2,
                        border: "2px solid  #d76227",
                        padding: "30px",
                        borderRadius: "12px",
                        boxShadow: 1,
                    }}
                >

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            margin="normal"
                            required
                            InputLabelProps={{
                                style: { color: '#d76227' }, // Change the label color here

                            }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                            type="email"
                            InputLabelProps={{
                                style: { color: '#d76227' }, // Change the label color here

                            }}
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            margin="normal"
                            required
                            multiline
                            rows={4}
                            InputLabelProps={{
                                style: { color: '#d76227' }, // Change the label color here

                            }}
                        />
                        <Button
                            fullWidth
                            type="submit"
                            sx={{
                                mt: 2,
                                backgroundColor: "#d76227",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#9f4923",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Box>
        </>
    );
}


