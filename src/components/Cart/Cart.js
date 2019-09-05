import React from 'react';
import './Cart.css';
import { Card } from 'react-bootstrap';
// import Cartnav from './CartTopnavbar/Cartnav';
// import Cartfooter from './Cartfooter/Cartfooter';
// import { Link } from 'react-router-dom';
import Cartwindow from './Cartwindow/Cartwindow';
 
const productList = [
  { name: "Micromax mi", price: 23001, info: "Product with 4 GB Ram " , dis:"Flat 11% off" , save:"you will save 2000 on this order"},
  // { name: "iphone", price: 784, info: "product of apple" },
  // { name: "windows", price: 156, info: "product of microsoft" }
];

class Cart extends React.Component{
 
      // hidder(){
      //   var x = document.getElementById("mainHeader");
      //   var y = document.getElementById("newNav");
      //   alert(x);
      //   x.style.display = 'none';
      //   y.style.display = 'block'; 
      // }   

      constructor(props) {
        super(props);
        this.state = {
          qty: 1,
          price:100,
          productList:productList,
        };
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
      }
      add() {
        this.setState({
          qty: this.state.qty + 1,
        });
      }
    
      subtract() {
        this.setState({
          qty: this.state.qty - 1
        });
      }

    render(){
        return(
              <div className="container-fluid p-0" onLoad={this.hidder}> 
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                          <Cartwindow />
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <Card className="text-center">
                            <Card.Header>Price Detail</Card.Header>
                              <Card.Body>
                                  <div className="row">
                                    <div className="col-lg-6 mt-4">
                                    <Card.Text className=" "> <span className="text-muted"> Price</span> </Card.Text>
                                    </div>   
                                    <div className="col-lg-6 mt-4">
                                    <Card.Text className=""> <span className="text-muted">{this.state.productList[0].price}  </span> </Card.Text>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                    <Card.Text className=""> <span className="text-muted"> Delivery  </span> </Card.Text>
                                    </div>
                                    <div className="col-lg-6 mt-4  ">
                                      <Card.Text className=""> <span className="text-success"> Free </span> </Card.Text>                        
                                    </div>
                                    <div className="col-lg-12 mt-2">
                                          <div className="div-border"> </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                    <Card.Text className=""> <span className="text-muted"> Total Payble  </span> </Card.Text>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                    <Card.Text className=""> <span className="text-dark">{this.state.price * this.state.qty} </span> </Card.Text>
                                    </div>
                                  </div>     
                              </Card.Body>
                            <Card.Footer className="text-success"> {this.state.productList[0].save}  </Card.Footer>
                          </Card>
                          <h6 className="mt-4 text-muted"> Safe and secure payment Easy return with 100% authontication </h6>
                        </div>
                    </div>
                </div>
              <div> 
                  {/* <Cartfooter /> */}
                </div>
              </div>
        );
    }
}

export default Cart;