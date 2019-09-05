import React,{Component} from 'react';
import {Card, Row,Container,Col ,Badge,Button} from 'react-bootstrap';
import '../DeliveryAddress/Main_deliveryaddress.css';

const BudgesHeaders = [
    { info1: "LOGIN",  info2: "ORDER SUMMURY " ,  info3:"PAYMENT OPTION"},
    { Number: '+91-844620222'}    
];

class Loginaddressheader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            BudgesHeaders:BudgesHeaders
        };
    
   }
    render(){
        return(
            <Container className="mt-3">
                <Row>
                    <Col lg={9}  md={8} sm={8} col={8}>
                    <Card >
                            <Card.Header> <Badge variant="dark " >1</Badge>
                               <span className="pl-2"> {this.state.BudgesHeaders[0].info1}</span>
                                <i className="fa fa-check pl-2"></i>
                                <Button variant="info float-right mt-3">CHANGE</Button>
                                <p className="ml-3"> {this.state.BudgesHeaders[1].Number}</p>

                        </Card.Header>
                    </Card>
                  </Col>
                  <Col lg={3}  md={4} sm={4} col={4}>
                      <h4>Price detail</h4>
                  </Col>
              </Row>
             </Container> 
        );

    }
}
export default Loginaddressheader;