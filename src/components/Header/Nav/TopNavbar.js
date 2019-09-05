import React from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './Nav.css';
import logo from '../../../assets/images/Gradientlogo.png';
import {Link} from 'react-router-dom';
// import Cartnav from '../../Cart/CartTopnavbar/Cartnav';
import Loginpage from '../../Login/Loginpage';


class TopNavbar extends React.Component{
    render(){
        return( 
            <div>
            <Navbar className="Nabackcolor p-0" expand="lg" id="mainHeader">
                <div className="container1">
                    <div className="row m-0">
                        <div className="col-lg-2 col-md-2 col-sm-2 pr-0">
                            <Link to="/">
                                <Navbar.Brand className="pt-2">
                                    <img src={logo} alt="Logo"  className="Logosetting float-right"/>
                                </Navbar.Brand>
                            </Link>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 nav-search">
                            <Form >
                                <div className="row m-0">
                                    <div className="col-lg-12 col-md-12 col-sm-12 p-lg-0">
                                    <FormControl type="text" placeholder="Search Products and more" className="form-control1" />
                                    <span> <i className="fa fa-search text-dark search"></i> </span>   
                                    </div>
                                </div>
                            </Form>
                        </div>
                    
                        <div className="col-lg-4 col-md-4 col-sm-4 text-center">
                            <div className="row p-0">
                                <div className="col-xl-1"></div>
                                <div className="col-sm-3 col-md-4 col-lg-4 col-xl-3 p-3">
                                <Link to="/"> <Loginpage /> </Link> 
                                </div>
                         
                                <div className="col-sm-3 col-md-4 col-lg-4 col-xl-3 nav-dropdown"> 
                                    <NavDropdown className="text-white" title="More" id="basic-nav-dropdown">
                                        <NavDropdown.Item >Action</NavDropdown.Item>
                                        <NavDropdown.Item> <Link to="/Customer"> 24/7 Customer Support </Link> </NavDropdown.Item>
                                        <NavDropdown.Item> <Link to="/Notication"> Notication </Link> </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item> <Link to="/Profile"> Profile </Link> </NavDropdown.Item>
                                    </NavDropdown> 
                                </div>
                            
                                <div className="col-sm-3 col-md-3 col-lg-4 col-xl-3 nav-dropdown">  
                                    <Link to="/Product/Productdetails/Cart" className="text-white">
                                        <span> <i className="fa fa-shopping-cart"></i></span><span className="pl-1">Cart</span> 
                                    </Link>
                                </div>
                                <div className="col-xl-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>

            <div id="newNav" style={{ display:'none' }}>
                {/* <Cartnav /> */}
            </div>

            </div>
        );
    }
}
export default TopNavbar;