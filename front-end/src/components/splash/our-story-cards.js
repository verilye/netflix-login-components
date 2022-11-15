import { Grid} from "@mui/material";
import React from "react";



export default class OurStoryCards extends React.Component{

    render(){
        return(
            <Grid 
            container 
            spacing={6} 
            direction="row"
            alignItems="center" 
            justifyContent="center">

                <Grid item xs={2}>
                    <h2>Watch Flitnex on your TV. Now.</h2>
                    <p>Watch titles on Smart TVs, PlayStation, Atari, Raspberry Pi, Fridge and more!</p>
                    <img></img>
                </Grid>
                <Grid item xs={2}>
                    <h2>Watch Flitnex everywhere.</h2>
                    <p>You cannot escape</p>
                </Grid>
                <Grid item xs={2}>
                    <h2>Create Profiles for kids</h2>
                    <p>Plonk them down and forget, the babysitter of the future</p>
                </Grid>
                <Grid item xs={2}>
                    <h2>Download your shows to watch them offline</h2>
                    <p>We WILL delete them</p>
                </Grid>
            </Grid>
        );
    }


}