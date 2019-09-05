import React,{Component} from 'react';
import {Card, Row,Container,Col ,Badge,Button,InputGroup} from 'react-bootstrap';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { grey } from '@material-ui/core/colors';
import BudgesCart1 from '../Checkoutpage/BudgesCart'
import Bag from './Budgestwo'
// input

    

import '../DeliveryAddress/Main_deliveryaddress.css';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'grey',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'grey',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'black',
        },
        '&:hover fieldset': {
          borderColor: 'none',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'grey',
        },
      },
    },
  })(TextField);
  

    export default class Delform extends React.Component{
        constructor(props){
            super(props)
            this.state={
                name:"",
                mobileno:"",
                pincode:"",
                Locality:"",
                massege:"",
                city:"",
                state1:"" 
                // selected: 'radio-1'

            }
        }

        //  handleChange(event) {
        //   setSelectedValue(event.target.value);
        // }
        click(){
            alert(this.state.name +  "\n" + this.state.add)
        }

    render(){
        return(
            <Container className="mt-3 ">
            <Row>
                <Col lg={9}  md={9} sm={9} col={9}>
             <Card>
                      
                 <Card.Header> <Badge variant="dark">2</Badge>DELIVERY ADDRESS</Card.Header>
                    <Card.Body className="p-2 ">
                        <Row className="pl-3">

                            <Col lg={5}  md={5} sm={5} col={5} className="mt-3">
                                 <CssTextField
                                    label="Name"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    value={this.state.name}
                                    onChange={name => this.setState({ name: name.target.value })}
                                    fullWidth={true}  
                               />  
                              {/* <Button onClick={()=>this.click()}>submit</Button> */}
                            </Col>
                            <Col lg={5}  md={5} sm={5} col={5}  className="mt-3" >
                                 <CssTextField
                                    label="Mobile No"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    value={this.state.mobileno}
                                    onChange={mobileno => this.setState({ mobileno: mobileno.target.value })}
                                    fullWidth={true}  
                               />
                               
                         </Col>
                         <Col lg={2}  md={2} sm={2} col={2}>
                         </Col>
                         </Row>
                         <Row  className="pl-3">
                         <Col lg={5}  md={5} sm={5} col={5}  className="mt-3">
                                <CssTextField
                                    label="Pin code"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    value={this.state.pincode}
                                    onChange={pincode => this.setState({ pincode: pincode.target.value })}
                                    fullWidth={true}  
                               />  
                            </Col>

                            <Col lg={5}  md={5} sm={5} col={5}  className="mt-3">
                                <CssTextField
                                    label="Locality"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    value={this.state.Locality}
                                    onChange={Locality => this.setState({ Locality: Locality.target.value })}
                                    fullWidth={true}  
                                />  
                            </Col>
                            <Col lg={2}  md={2} sm={2} col={2}>
                         </Col>
                         </Row>
                            <Row  className="pl-3">
                            <Col lg={10}  md={12} sm={12} col={12} className="mt-2 ">
                               <CssTextField
                                    label="Enter text"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    value={this.state.massege}
                                    onChange={massege => this.setState({ massege: massege.target.value })}
                                    multiline={true}
                                    rows={2}
                                    fullWidth={true}  
                                 />  
                           </Col>
                           <Col lg={2}  md={2} sm={2} col={2}>
                         </Col>
                                  {/* <Button onClick={()=>this.click()} className="mt-2 ">submit</Button> */}
                         </Row>
                         <Row  className="pl-3">
                         <Col lg={5}  md={5} sm={5} col={5}  className="mt-3">
                                 <CssTextField
                                    label="City/district/town"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    value={this.state.city}
                                    onChange={city => this.setState({ city: city.target.value })}
                                    fullWidth={true}  
                                 />  
                            </Col>

                            <Col lg={5}  md={5} sm={5} col={5}  className="mt-3">
                                {/* <CssTextField
                                    label="state"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    value={this.state.state1}
                                    onChange={state1 => this.setState({ state1: state1.target.value })}
                                    fullWidth={true}  
                                />   */}
                                <select class="browser-default custom-select custom-select-lg w-100 h-100">
                                  <option selected>Select state</option>
                                  <option value="Maharastra">Maharastra </option>
                                  <option value="Karnataka">Karnataka</option>
                                  <option value="3Gujarat">Gujarat</option>
                                  <option value="Keral">Keral </option>
                                  <option value="punjab">punjab</option>
                                  <option value="Bihar">Bihar</option>
                              </select>

                            </Col> 
                            <Col lg={2}  md={2} sm={2} col={2}>
                         </Col>
                         </Row>
                         <Row  className="pl-3">
                           <Col lg={5}  md={5} sm={5} col={5}  className="mt-3">
                                <CssTextField
                                  label="Landmark(optional)"
                                  variant="outlined"
                                  id="custom-css-outlined-input"
                                  value={this.state.city}
                                  onChange={city => this.setState({ city: city.target.value })}
                                  fullWidth={true}  
                               />  
                            </Col>

                            <Col lg={5}  md={5} sm={5} col={5}  className="mt-3">
                              <CssTextField
                                  label="Alternate phone(optional) "
                                  variant="outlined"
                                  id="custom-css-outlined-input"
                                  value={this.state.state1}
                                  onChange={state1 => this.setState({ state1: state1.target.value })}
                                  fullWidth={true}  
                                />  
                            </Col> 
                             <Col lg={2}  md={2} sm={2} col={2}>
                            </Col>
                       </Row>
                         <Row>
                            <Col lg={5}  md={5} sm={5} col={5}  className="mt-3">
                                <input type='radio' id='radio-1' name='myRadio' value='radio-1' />
                                {/* onChange={this.state.selected === 'radio-1'} onChange={(e) => this.setState({ selected: e.target.value })} />
                                o`nChange={state1 => this.setState({ state1: state1.target.value })} */}
                                <span> Home (All day delivery)</span>
                            </Col>

                            <Col lg={5}  md={5} sm={5} col={5}  className="mt-3">
                                    <input type='radio' id='radio-1' name='myRadio' value='radio-1' />
                                {/* onChange={this.state.selected === 'radio-1'} onChange={(e) => this.setState({ selected: e.target.value })} />
                                onChange={state1 => this.setState({ state1: state1.target.value })} */}
                              <span> Work (Delivery between 10 AM to 5 PM)</span>
                            </Col> 
                                <Col lg={2}  md={2} sm={2} col={2}>
                            </Col>
                              <Button onClick={()=>this.click()} className="mt-2 ml-3 btn-warning  ">Save and Deliver Here</Button> 
                          </Row> 
                    </Card.Body>
                </Card>                    
             </Col>
             <Bag />
                  <Col lg={3}  md={3} sm={3} col={3}>
                      {/* <h4>Price detail</h4> */}
                  </Col>
        </Row>
  </Container> 
        );
    }

}
// export default Delform;