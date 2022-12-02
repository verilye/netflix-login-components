import { FormControl, TextField, Button, Box } from "@mui/material"
import React from "react"



export default class LoginForm extends React.Component{

    render(){
        return(
            <Box
                mt="4%"
                ml="38%"
                mr="38%"
                pl="3.5%"
                sx={{
                    textAlign:"left",
                    backgroundColor:"rgba(0, 0, 0, .65)",
                }}
            >   
                    <Box 
                        sx={{
                            paddingTop:"15%",
                            paddingBottom:"5%",
                            fontSize:"30px",
                            fontWeight:"bold",
                            fontColor:"white" 
                        }}
                    >
                        Sign In
                    </Box>  
                    <FormControl>
                        <TextField
                            
                            id="email" 
                            label="Email address" 
                            variant="filled"
                            sx={{
                                input:{
                                    color:'black', 
                                    backgroundColor:'white',
                                    width:'300px',
                                    marginBottom:'20px',
                                    borderRadius:'5px',
                                }
                                }}>

                        </TextField>
                        <TextField
                            fullWidth
                            id="password" 
                            label="Password" 
                            variant="filled"
                            sx={{
                                input:{
                                    color:'black', 
                                    backgroundColor:'white',
                                    borderRadius:'5px',
                                    marginBottom:'15%',
                                    }
                                }}>
                            
                        </TextField>
                        <Button 
                            variant='contained' 
                            style={{
                                fontSize:"medium",
                                backgroundColor:"#E50914",
                                textTransform: "none",
                                padding:"10px",
                                fontWeight:"bold",
                                marginBottom:"60%",
                            }}
                            href="/login"
                        >     
                            Sign In
                        </Button>
                    </FormControl>
            </Box>
        )
    }


}