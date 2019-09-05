import React from 'react';
import { Modal, Button, Tabs, Tab } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './Login.css';
import loginimage from '../../../assets/images/center.png';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Signup from '../Singup/Signup';
import OTP from '../OTP/Otp';

const { TabPane } = Tabs;

function callback(key) {
}

class Login extends React.Component{

    state = { visible: false };      

    showModal = () => {
        this.setState({
          visible: true,
          UserName:"",
          Password:"",
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
      
      click(){
        alert(this.state.UserName +  "\n" + this.state.Password)
    }
    hidepassword(){
      var x = document.getElementById("password");
      var x1 = document.getElementById("passShow");

      x.style.display = "none";
      x1.style.display = "block";
    }
    render(){
      return(  
            <div>
                  <div> <label className="text-light p-0 m-0" type="primary" onClick={this.showModal} style={{cursor:'pointer'}} > Login </label> </div>
                  <div className="model-footer">
                    <Modal visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} width={700} >
                      <div className="container p-0">
                        <div className="row">
                          <div className="col-sm-5 col-md-5 col-lg-5 login-logo-div">
                              <span className="Loginset text-center">Login</span>
                              <h5 className="Loginset2 mt-3"> Get Access to your oreders, Wishlistand Recomendations   </h5>
                              <img src={loginimage} alt="Logo"  className="login-imagessetting img-fluid"/>
                          </div>
                          <div className="col-sm-7 col-md-7 col-lg-7">
                          <Tabs defaultActiveKey="1" onChange={callback}>

                            <TabPane tab="Sing In" key="1" id="hideopt" className="w-100">

                              <TextField
                                  className= "mt-2 border-bottom login-border-color"
                                  label="Mobile Number"
                                  id="mui-theme-provider-standard-input"
                                  required={true}
                                  fullWidth={true}
                                  type="text"
                                  onChange={UserName => this.setState({ UserName: UserName.target.value })}
                                />
                                <div id="password">
                                <TextField
                                  className= "mt-4 border-bottom login-border-color"
                                  label="password"
                                  id="mui-theme-provider-standard-input"
                                  required={true}
                                  fullWidth={true}
                                  type="password"
                                  onChange={Password => this.setState({ Password: Password.target.value })}
                                />

                                <label onClick={this.hidepassword} className="text-primary"> Forgot password ? </label>

                                <button className="btn login-logo-div btn-lg col-lg-12 text-white" onClick={()=>this.click()}> Login</button>   
                                <h4 className="text-center"> or</h4>
                                <button className="btn btn-warning btn-lg col-lg-12 "> Request for OTP </button>

                                </div>
                                <div id="passShow" style={{ display:'none' }}>
                                  <OTP />
                                </div>
                            </TabPane>

                            <TabPane tab="New Customer" key="2" className="w-100">

                              <Signup />
                            </TabPane>

                          </Tabs>

                          </div>
                        </div>
                      </div>
                </Modal>
              </div>
            </div>
        );
     }
  }

export default Login;