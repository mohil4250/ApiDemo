import React from 'react';
import 'antd/dist/antd.css'; 
import '../Login/Login.css';
import TextField from '@material-ui/core/TextField'

class Signup extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        mobile: '',
        otp:'',
        password:'',
        errormessage: ''
      };
    }    
  
    showModal = () => {
        this.setState({
          visible: true,
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

      showOTP(){
        var z = document.getElementById("hideOTP");
        var z1 = document.getElementById("showOTP");
        z.style.display = "none";
        z1.style.display = "block";
      }

      handleChange(ev){
        let mobile = ev.target.value;
        let err = '';
          if (mobile !="" && !Number(mobile)) {
            err = <strong>Mobile Number must be a number</strong>;
            this.setState({errormessage: err});
          }
            this.setState({
              [ev.target.name]:ev.target.value
              })
        }
        getvalue()
        {
          var mobile = this.state.mobile
          var otp = this.state.otp
          var password = this.state.password
        }
    render(){
        return(
              <div> 
              <form>  
                  <TextField
                      className= "mt-2 border-bottom border-info"
                      label="Enter Mobile Number"
                      id="mui-theme-provider-standard-input"
                      required={true}
                      fullWidth={true}
                      autoFocus={true}
                      type="text"
                      maxLength="10"
                      name="mobile"
                      value = {this.state.mobile}
                      onChange={this.handleChange.bind(this)}  
                  />
                    {this.state.errormessage}    
                  <div id="hideOTP" onClick={this.showOTP}>
                  <button className="btn btn-info btn-lg col-lg-12  mt-4" >Continue</button>   

                  <button className="btn btn-warning btn-lg col-lg-12 mt-4 "> <a href="#"> Existing user ? Login</a></button>
                  </div>
                  <div id="showOTP" style={{ display:'none' }}>
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
                          type="number"
                          name="otp"
                          value = {this.state.otp}
                          onChange={this.handleChange.bind(this)}
                      />
                      <TextField
                          className= "mt-2 border-bottom border-info"
                          label="Enter Password"
                          id="mui-theme-provider-standard-input"
                          required={true}
                          fullWidth={true}
                          type="password"
                          name="password"
                          value = {this.state.password}
                          onChange={this.handleChange.bind(this)}
                      />


                      <button className="btn btn-info btn-lg col-lg-12 mt-4" onClick={()=> this.getvalue()}> Login</button>   

          </div>            
                  </div>
                  </form>
              </div>
              
    );
  }
}
export default Signup;