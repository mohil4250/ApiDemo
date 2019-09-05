import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../Login/Login.css';
import TextField from '@material-ui/core/TextField'

class OTP extends React.Component{

    state = { visible: false };      
  
    showModal = () => {
        this.setState({
          visible: true,
          UserName:"",
          Password:"",
        });
      };
    
      handleOk = e => {
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        this.setState({
          visible: false,
        });
      };

    render(){
       
        return(
              <div>
                  
                  <div className="row">
                      <div className="col-lg-6 otpsend">
                          <span className=" mt-3">OTP send to mobile</span>
                      </div>
                      <div className="col-lg-6  otpsend">
                        <a href="#" className="float-right">Resend Otp?</a>
                      </div>
                  </div>
                  
                  <TextField
                      className= "mt-2 border-bottom border-info"
                      label="Enter OTP"
                      id="mui-theme-provider-standard-input"
                      required={true}
                      fullWidth={true}
                      type="text"
                      // error={true}
                      onChange={UserName => this.setState({ UserName: UserName.target.value })}
                    
                  />
                  <TextField
                      className= "mt-4 border-bottom border-info"
                      label=" Set password"
                      id="mui-theme-provider-standard-input"
                      required={true}
                      fullWidth={true}
                      type="password"
                      value={this.state.Password}
                      onChange={Password => this.setState({ Password: Password.target.value })}
                  />
                  <button className="btn btn-info btn-lg col-lg-12 mt-4 "  onClick={()=>this.click()}> Login</button>   

          </div>            

            );
            }
}
export default OTP;