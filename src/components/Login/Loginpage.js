import React from 'react';
import Login from './Login/Login';
import OTP from './OTP/Otp';
import Signup from './Singup/Signup';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

class Loginpage extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Login}/>
                        <Route path="/OTP" component={OTP}/>
                        <Route path="/Singup" component={Signup}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Loginpage;