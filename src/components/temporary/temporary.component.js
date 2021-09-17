import React from 'react';
import './temporary.component.scss';

class Temporary extends React.Component{
    constructor(){
        super();

        this.state={
            user:{
                name: 'Guest',
                privelages: 'Read-Only',
            },
            ads: true
        }
    }
        clickLogin(){
            this.state.user.name= 'akash';
            this.state.user.privelages= 'Read-Write';
            this.state.ads= false;
        }
        clickLogout(){
            this.state.user.name= 'Guest';
            this.state.user.privelages= 'Read-Only';
            this.state.ads= true;
        }
        buttonClick(){
            console.log("came here")
            
          }
    render(){
        return(
        <div>
            <h1>Hello {this.state.user.name}</h1>
            <p> you have no rights to reject these ads</p>
            <h1>Hello {this.state.user.name}</h1>
            <button onClick={this.buttonClick.bind(this)}>Click me</button>
            <button onClick={this._clickLogin.bind(this)}>Login</button>
            {/* <button onClick={this._clickLogout.bind(this)}>Logout</button> */}
        </div>
        )
    }
}

export default Temporary;