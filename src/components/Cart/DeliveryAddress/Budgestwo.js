import React,{Component} from 'react';
import {Card, Row,Container,Col ,Badge} from 'react-bootstrap';


const BudgesHeaders = [
    { info1: "DELIVERY ADDRESS",  info2: "ORDER SUMMURY " ,  info3:"PAYMENT OPTION"},
    
];
class  Budgestwo extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            BudgesHeaders:BudgesHeaders
        };
    }
    render(){
        return(
            <Container className="mt-3">
                {/* <Row>
                    <Col lg={12}  md={12} sm={12} col={12} className="mt-3">
                        <Card>
                            <Card.Header> 
                                <Badge variant="dark">2</Badge>
                             {this.state.BudgesHeaders[0].info1}
                            </Card.Header>
                        </Card>
                  </Col>
            </Row> */}

              <Row>
                    <Col lg={12}  md={12} sm={12} col={12} className="mt-3">
                        <Card>
                            <Card.Header>
                                 <Badge variant="dark">3</Badge>
                                 <span className="pl-2">   {this.state.BudgesHeaders[0].info2}</span>
                                </Card.Header>
                        </Card>
                  </Col>
             </Row>
                

              <Row>
                    <Col lg={12}  md={12} sm={12} col={12} className="mt-3">
                        <Card>
                            <Card.Header>
                                <Badge variant="dark">4</Badge>
                                <span className="pl-2">   {this.state.BudgesHeaders[0].info3}</span>
                            </Card.Header>
                     </Card>
                 </Col>
            </Row>
            </Container>
            
          );
    }
}

export default Budgestwo;








