import React from 'react';
import {Nav, Navbar, Form} from 'react-bootstrap';
import logo from '../../assets/images/Gradientlogo.png';
import './cartNav.css'; 

class Cartnav extends React.Component{
    render(){
        return(   
            <div>    
            <Navbar className="Navbackcolor1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2">
                            <Navbar.Brand href="#home">
                                <img src={logo} alt="Logo" className="Logosetting "/>
                            </Navbar.Brand>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <Form>
                                <span><input type="text" className ="form-control text-in mt-1" placeholder="Search for product and more " /> <i className="fa fa-search searchsetting float-right "></i> </span>
                            </Form>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <Nav className="float-right" >
                                <Nav.Link href="#home"  className="text-white ">Login & signup</Nav.Link>       
                            </Nav>     
                        </div>
                    </div>
                </div>
            </Navbar>            
            </div>
        );
    }
}
export default Cartnav;