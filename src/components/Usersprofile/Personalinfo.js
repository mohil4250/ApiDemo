import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core/';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { grey } from '@material-ui/core/colors';


const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#2F0047 !important',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '2F0047',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '2F0047',
            },
            '&:hover fieldset': {
                borderColor: '#2F0047',
            },
            '&.Mui-focused fieldset': {
                borderColor: '2F0047',
            },
        },
    },
})(TextField);


class Persnalinfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: true,
            btnlbl: 'Edit',
            firstname: "",
            lastname: "",
            email: "",
            mobile: "",
        }
    }
    checkDisabled(flag) {
        if (this.state.disabled == true)
            this.setState({
                disabled: false,
                btnlbl: 'Cancel'


            })
        if (this.state.disabled == false)
            this.setState({
                disabled: true,
                btnlbl: 'Edit'
            })
    }
    render() {
        return (

            <div className="container1">
                <span> Information</span> <a onClick={() => this.checkDisabled(this.state.disabled)}> {this.state.btnlbl}</a>
                <div className="row mt-4">
                    <div className="col-lg-5 col-md-5 col-sm-5 col-5">

                        <CssTextField
                            label="First Name"
                            variant="outlined"
                            id="custom-css-outlined-input"
                            value={this.state.firstname}
                            onChange={firstname => this.setState({ firstname: firstname.target.value })}
                            fullWidth={true}
                            disabled={this.state.disabled}
                        />
                    </div>
                    <div className="col-lg-5 col-md-5 col-md-5 col-sm-5 col-5">
                        <CssTextField
                            label="Last Name"
                            variant="outlined"
                            id="custom-css-outlined-input"
                            value={this.state.lastname}
                            onChange={lastname => this.setState({ lastname: lastname.target.value })}
                            fullWidth={true}
                            disabled={this.state.disabled}
                        />
                    </div>
                    <div className="col-lg-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-2">
                        <Button variant="contained" color="primary" disabled={this.state.disabled} > Save   </Button>
                    </div>
                </div>
                <div className="row mt-5" >
                    Your Gender
                   <div className="col-lg-5  col-md-5 col-sm-5 col-5"><input type="radio" />Male</div>
                    <div className="col-lg-5 col-lg-5  col-md-5 col-sm-5 col-5"><input type="radio" /> Female</div>
                </div>

                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                        Email id
                        <CssTextField
                            label="Email"
                            variant="outlined"
                            id="custom-css-outlined-input"
                            value={this.state.email}
                            onChange={email => this.setState({ email: email.target.value })}
                            fullWidth={true}
                            disabled={this.state.disabled}
                        />
                    </div>
                    <div className="col-lg-3 col-md-3 co-sm-3 col-3  mt-4">
                        <Button variant="contained" color="primary" disabled={this.state.disabled} > Save   </Button>
                    </div>

                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 mt-4">
                        Mobile Number
                      <CssTextField
                            label="Mobile No"
                            variant="outlined"
                            id="custom-css-outlined-input"
                            value={this.state.mobile}
                            onChange={mobile => this.setState({ mobile: mobile.target.value })}
                            fullWidth={true}
                            disabled={this.state.disabled}
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-4 mt-4 pt-4">
                        <Button variant="contained" color="primary" disabled={this.state.disabled} >Save </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="mt-5"> FAQ s</h4>
                        <b> Q.1 What happens when I update my email address (or mobile number)?</b>
                        <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                        <b> Does my Seller account get affected when I update my email address?</b>
                        <p> GoldeZon    has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
                    </div>
                </div>
            </div>

        );
    }
}
export default Persnalinfo;