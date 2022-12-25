import React from "react";
import Logo from '../../assets/logo.png';
import Button from '@mui/material/Button';
import { Box } from "@mui/system";


export default class Navbar extends React.Component{

    render(){
        return(

            <Box
                component="span"
                display="flex"
                justifyContent="space-between">
                        <a href="/">
                            <img 
                                src={Logo}
                                sx={{ flexGrow: 1 }}
                                style={{
                                    maxHeight:"70px",
                                    margin:'20px',
                                    marginLeft:"40px"
                                }}
                            />
                        </a>
                    
                        <Button 
                            variant='contained' 
                            style={{
                                fontSize:"medium",
                                backgroundColor:"#E50914",
                                maxWidth: '120px', 
                                maxHeight: '40px',
                                textTransform: "none",
                                margin:'30px',
                                marginRight:"60px"
                            }}
                            href="/login"
                        >     
                            Sign In
                        </Button>
                        
            </Box>
            
        );
    }
   
}