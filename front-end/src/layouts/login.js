import React from 'react';
import CallToAction from '../components/splash/call-to-action';
import Navbar from '../components/splash/navbar';
import OurStoryCards from '../components/splash/our-story-cards';
import BackgroundImage from '../assets/concord.jpg'
import { Box } from '@mui/material';


class Login extends React.Component{

    render(){
        return(
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
                    
                    <Navbar/>
                    <CallToAction/>
                    {/* <OurStoryCards/> */}
            </div>
                
        );
    }

}

export default Login;