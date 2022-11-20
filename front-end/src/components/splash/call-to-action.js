import { TextField, Button, Box } from "@mui/material";
import React from "react";




export default class CallToAction extends React.Component{

    render(){
        return(
            <Box
                mt="10%"
                ml="30%"
                mr="30%"
                >
                <Box
                    ml="5%"
                    mr="5%"
                    fontSize="50px"
                    fontWeight="bold"
                    
                >
                    Unlimited movies, TV shows and more.
                </Box>
                <Box sx={{
                    paddingTop:"10px",
                    paddingBottom:"10px",
                    fontSize:"25px",    
                }}
                >
                    Watch anywhere. Cancel at any time. Ads.</Box>
                <Box
                    mb="10px"
                >Ready to make an account? Enter your email to create or restart your membership.</Box>
                <TextField 
                    fullWidth
                    id="email" 
                    label="Email address" 
                    variant="filled"
                    sx={{input:{color:'black', backgroundColor:'white'}}}
                    InputProps={{
                        endAdornment:
                            <Button
                                sx={{
                                    width:"40%",
                                    height:"55px",
                                    backgroundColor:"red",
                                    fontSize:"20px",
                                }}
                                color="error"  
                                fontWeight="bold"
                                variant="contained"
                                href={`main`}
                                >
                                Get Started &gt;
                            </Button>}}
    >
                </TextField>
            </Box>
        )
    }

}