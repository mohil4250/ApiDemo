import React from 'react';
import {Card , Button, select,formcontrol, Dropdown,Form ,Col} from 'react-bootstrap';
import mobile1 from '../../assets/images/mobile1.jpg';
import { connect } from 'react-redux'
import { removeItem,addQuantity,subtractQuantity} from '../../actions/cartActions'
import { Link } from 'react-router-dom';

const productList = [
    { name: "Micromax mi", price: 23001, info: "Product with 4 GB Ram " , dis:"Flat 11% off" , save:"you will save 2000 on this order"},
    // { name: "iphone", price: 784, info: "product of apple" },
    // { name: "windows", price: 156, info: "product of microsoft" }
];

class Cartwindow extends React.Component{

     //to remove the item completely
     handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }




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
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                     <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                   
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                          </div>
                         </div>  
                     </div>
                   )
               })
          ):

             (
                <p>Nothing.</p>
             )


        return(
            <div>
                <div className="row no-gutters">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 mt-0 ">
                        <Card.Header>My cart(1) </Card.Header>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 "> 
                        <Card.Header> <i class="fa fa-map-marker" aria-hidden="true"></i>  Deliver to </Card.Header> 
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <Card.Header className="cartDropdown">
                            <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ width:'100%' }}>
                                pune 411036
                            </Dropdown.Toggle>

                            <Dropdown.Menu  style={{ padding:'100%;' }}>
                                <span>Login to view saved address</span>
                                <a href="#"> Login</a>
                                <Form>
                                <Form.Row className="set1">
                                    <Col>
                                    <Form.Control placeholder="Enter Delivery pin code"  className="form-set"/>
                                    </Col>
                                </Form.Row>
                                </Form>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Card.Header>
                    </div>
                </div>
                
                <div>
                   
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="cart">
                                <h5>You have ordered:</h5>
                                    <ul className="collection">
                                        {addedItems}
                                    </ul>
                                </div>
                            </div>
                        </div> 
                 </div>



                </div>

            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cartwindow)