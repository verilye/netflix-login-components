import React from 'react';
import Navbar from './navbar';
import BackgroundImage from '../../assets/concord.jpg'
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import './splash.css';


const themeDark = createTheme({
    palette: {
      background: {
        default: "#222222"
      },
      text: {
        primary: "#ffffff"
      }
    }
});


export default class Background extends React.Component{

    render(){
        return(

            <ThemeProvider theme={themeDark}>
            <CssBaseline/>
                <div id="background"
                    style={{
                        width:"100%",
                        boxShadow: "50px 20px 200px 100px black inset",
                        height:"100%",
                        position:"absolute",
                        top: "0",
                        left: "0",
                        
                    }}>
                        <Box
                            position="absolute" 
                            component="img" 
                            src={BackgroundImage}
                            sx={{
                            height:"100%",
                            width:"100%",
                            filter:"brightness(50%)",
                            top: "0",
                            left: "0",
                            zIndex:"-1",}}
                        />
                        
                        {/* TODO hide the sign in button when in the login menu */}

                        <Navbar/>
                        
        
                </div>
            </ThemeProvider>
        );
        
    }

}