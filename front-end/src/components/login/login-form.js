import { FormControl, TextField, Button, Box } from "@mui/material"
import React from "react"



export default class LoginForm extends React.Component{

    render(){
        return(
            <Box
                mt="10%"
                ml="37.5%"
                mr="37.5%"
                
                sx={{
                    backgroundColor:"rgba(0, 0, 0, .75)"
                    
                    }}
            >   
                <Box
                    p="20%"
                > 
                    <Box 
                        sx={{

                            paddingTop:"10px",
                            paddingBottom:"10px",
                            fontSize:"25px",
                            fontWeight:"bold"    
                        }}
                    >
                        Sign In</Box>  
                    <FormControl>
                        <TextField
                            fullWidth
                            id="email" 
                            label="Email address" 
                            variant="filled"
                            sx={{input:{color:'black', backgroundColor:'white' }}}>

                        </TextField>
                        <TextField
                            fullWidth
                            id="password" 
                            label="Password" 
                            variant="filled"
                            sx={{input:{color:'black', backgroundColor:'white'}}}>
                            
                        </TextField>
                        <Button>The One Piece is REAL</Button>
                    </FormControl>
                </Box>
            </Box>
        )
    }


}