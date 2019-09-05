import React,{Component} from 'react';
import './Cartfooter.css';
import {Nav } from 'react-bootstrap';
class Cartfooter extends Component{
    render(){
        return(
            <div className="container-fluid p-0 mt-4"> 
                <div className="row ">
                    <div className="col-lg-12 bgh p-4">
                        <span className="ml-4" > Top Stories <a href="#"> Top Brands</a>  </span>   
                    </div>
                    <div className="container he">
                        <div className="row">
                        <div className="col-lg-9">  
                            <Nav defaultActiveKey="/home" as="ul">
                               
                                    <span className="mt-2">Policies :</span>
            
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-1" className="text-muted">Return Policy |</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2" className="text-muted">Terms of use |</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2" className="text-muted">Security |</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2" className="text-muted">Privacy |</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2" className="text-muted">infrigment |@2019 goldenzon </Nav.Link>
                                </Nav.Item>
                        </Nav>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 mt-2 ">  
                        <span>Need Help ? <a href="#">help</a> or <a href="#"> Contact us</a></span>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        );
    }
}
export default Cartfooter;