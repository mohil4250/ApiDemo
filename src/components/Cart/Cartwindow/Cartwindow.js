import React from 'react';
import { Card, Button, select, formcontrol, Dropdown, Form, } from 'react-bootstrap';
import mobile1 from '../../assets/images/mobile1.jpg';
import { connect } from 'react-redux'
import { removeItem, addQuantity, subtractQuantity } from '../../actions/cartActions'
import { Link } from 'react-router-dom';
import './Cartwindow.css';
import { Col, Row } from 'antd';

const productList = [
    { name: "Micromax mi", price: 23001, info: "Product with 4 GB Ram ", dis: "Flat 11% off", save: "you will save 2000 on this order" },

];
class Cartwindow extends React.Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    constructor(props) {
        super(props);
        this.state = {
            qty: 1,
            price: 100,
            productList: productList,
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
    render() {
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <Row>
                            <Col span={8}>
                                <div className="collection-item avatar" key={item.id}>
                                    <div className=""> <img src={mobile1} style={{ maxWidth: '150px', maxHeight: '175px' }} className="img-fluid" /> </div>
                                    {/* <img src={item.img} alt={item.img} className="img-size" /> */}
                                    <div className="row mt-2">
                                        <button className="btn btn-light pl-4" onClick={() => { this.handleAddQuantity(item.id) }}> <i className="fa fa-plus" ></i></button>
                                        <button className="btn btn-light" onClick={() => { this.handleSubtractQuantity(item.id) }}> <i className="fa fa-minus" ></i></button>
                                        <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                                  
                                        <Button className="btn-warning mt-3" >Placeorder</Button> </div >
                                  </div>
                            </Col>
                            <Col span={10}>
                                <div className="h3"> {item.title} </div>
                                    <div>
                                        <span>  {item.desc} </span>
                                        <div className="h3 m-0"> &#x20b9; {item.price} </div>
                                        <div> <span className="text-success"> &nbsp; &nbsp; {item.off} </span> </div>
                                        <div>  <b>Quantity: {item.quantity}</b> </div>
                                        <div> {item.EMI} </div>
                                    </div>
                               </Col>

                            <Col span={6}>
                                <div>
                                    <div className="h6 m-0">  {item.delevery} </div>
                                    <div className="m-2 text-muted">  {item.days} </div>
                                </div>
                            </Col> 
                        </Row>



                        // <div className="container">
                        //     <div className="row">
                        //         <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        //             <div className="collection-item avatar" key={item.id}>
                        //                 <img src={item.img} alt={item.img} className="img-size" />
                        //             </div>
                        //         </div>
                        //         <div className="col-lg-6 col-md-6 col-sm-6 col-6"> 
                        //                 <span className="title">{item.title}</span>
                        //                 <p><b>Price: {item.price}$</b></p>
                        //                 <p>
                        //                     <b>Quantity: {item.quantity}</b>
                        //                 </p>
                        //                 <p>{item.desc}</p>                            
                        //           </div>
                        //             <div className="col-lg-3 col-md-3 col-sm-3 col-3"> 
                        //                <span>Expected delivery  4 aug 2019</span>
                        //             </div>

                        //             <div className="row">
                        //                 <div className="add-remove">
                        //                    <button className="btn btn-light ml-2" onClick={() => { this.handleAddQuantity(item.id) }}> <i className="fa fa-plus" ></i></button>
                        //                    <button  className="btn btn-light" onClick={() => { this.handleSubtractQuantity(item.id) }}> <i className="fa fa-minus" ></i></button>
                        //                 </div >
                        //                 <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                        //                 <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}>Save for Letter</button>
                        //             </div>
                        //         </div>
                        //         <div className="bb"></div> 
                        //     </div>

                    )
                })
            ) :
            (
                <p>Cart is Empty</p>
            )

        return (
            <div>
                <div className="row no-gutters">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 mt-0 ">
                        <Card.Header>My cart(1) </Card.Header>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 ">
                        <Card.Header> <i class="fa fa-map-marker text-info" aria-hidden="true"></i>  Deliver to </Card.Header>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <Card.Header className="cartDropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width: '100%' }}>
                                    pune 411036
                            </Dropdown.Toggle>

                                <Dropdown.Menu style={{ padding: '100%;' }}>
                                    <span>Login to view saved address</span>
                                    <a href="#"> Login</a>
                                    <Form>
                                        <Form.Row className="set1">
                                            <Col>
                                                <Form.Control placeholder="Enter Delivery pin code" className="form-set" />
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Card.Body>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="text-center"> <img src={mobile1} style={{ maxWidth: '150px', maxHeight: '175px' }} className="img-fluid" /> </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="h3"> Price 30 </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                 </Card.Text>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer className="text-muted "> <Button variant="warning">Place order</Button></Card.Footer>
                        </div>
                    </div>
                </div> */}
                <div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cart">
                                    {/* <h5>You have ordered:</h5> */}
                                    <div className="collection">
                                        {addedItems}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cartwindow)