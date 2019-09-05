import React from 'react';
import {Card, Button,Badge, Row,Col,Form} from 'react-bootstrap';
import './checkoutpage.css';



class CheckoutLogin extends React.Component{
    render(){
        return(
            <div className="container mt-1">   
                    <div className="row" >
                        <div className="col-lg-8">
                        <Card>
                            <Card.Header> <Badge variant="dark">1</Badge> LOGIN  OR SIGN UP </Card.Header>
                            <Card.Body>
                                {/* <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button> */}
                                <Row>
                                    <Col lg={6}  md={6} sm={6} col={6}>
                                        <Form>
                                            <Form.Group controlId="">
                                                {/* <Form.Label>Email address</Form.Label> */}
                                                <Form.Control type="text" placeholder="Enter email or mobile"  className="border0" />
                                                {/* <Form.Text className="text-muted">
                                                </Form.Text> */}
                                                <Button type="submit"  className="mt-4 btn-block    ">Continue</Button>
                                            </Form.Group>
                                        </Form>
                                    </Col>

                                    <Col lg={6} md={6} sm={6} col={6} >
                                         <Form.Text  className="p-2">
                                         <span>Advantages of secure Login</span>  <br />  
                                         <i className="fa fa-truck fa-2x text-primary pt-1"></i>
                                         <span > Easily track orders, Hassel free Return</span>
                                        </Form.Text> 
                                        
                                        <Form.Text className="p-2"> 
                                         <i className="fa fa-bell fa-2x text-primary pt-1"></i>
                                         <span> Easily track orders, Hassel free Return</span>
                                        </Form.Text>
                                        <Form.Text  className="p-2">
                                         <i className="fa fa-star fa-2x text-primary pt-1"></i>
                                         <span> Easily track orders, Hassel free Return</span>
                                        </Form.Text>
                            
                                    </Col>
                             </Row>
                            </Card.Body>
                        </Card>
                      </div>
                      <div className="col-lg-4">
                      <Card>
                        <Card.Header>Featured</Card.Header>
                        
                        </Card>
                      </div>
                 </div>
                 
           </div>
           
        );
    }
}

export  default CheckoutLogin ;