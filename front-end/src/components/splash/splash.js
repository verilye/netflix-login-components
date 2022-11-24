import React from 'react';
import CallToAction from './call-to-action';
import Navbar from './navbar';
import Background from './background'
import './splash.css';


class Login extends React.Component{

    render(){
        return(

            <div>   

                <Background/>
                <Navbar/>
                <CallToAction/>
    
            </div>
        );
        
    }

}

export default Login;