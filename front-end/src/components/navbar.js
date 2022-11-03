import React from "react";
import Logo from '../assets/logo.png';
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import { AppBar, Divider, Grid, Toolbar } from "@mui/material";



export default class Navbar extends React.Component{

    render(){
        return(

            <Box
                component="span"
                display="flex"
                justifyContent="space-between">

                        <img 
                            src={Logo}
                            sx={{ flexGrow: 1 }}
                            style={{
                                maxHeight:"70px",
                                margin:'20px',
                                marginLeft:"40px"
                            }}
                        />
                    
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
                        >     
                            Sign In
                        </Button>
                        
            </Box>
            
        );
    }
   
}