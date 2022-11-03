import React from 'react';
import Login from './login';

class Layout extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            activeLayout : <Login/>

        }
    }

    render(){
        return (
            <div id="Layout">
                {this.state.activeLayout}
            </div>
        );
    }
}

export default Layout;