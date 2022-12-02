import React from 'react'
import Background from '../splash/background'
import LoginForm from './login-form'


export default class Login extends React.Component{

    render(){

        return(
            <div>
                <Background/>
                <LoginForm/>
            </div>
        )
    }
     


}