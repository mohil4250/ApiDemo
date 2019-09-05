import React from 'react';
import './Productlist.css';
import {Card} from 'react-bootstrap';
import axios from 'axios';  
import ProductlistH from './ProductlistH';
import { Link } from "react-router-dom";
class Productlist extends React.Component{

    state = {
        product:[],
        cat_id:'',
        }

    componentDidMount()
        {
            var str = window.location.href;
            var array = str.split("productId:",2);
            var productid = array[1];

                axios.get(`/live/cart`).then(res=>{

                const rolenames = res.data.Items.filter(function(item) {
                    if (item.prod_id == productid) {
                        return true; // skip
                        }
                        return false;
                        });

                    var cat_id = rolenames[0].cat_id;
                    this.setState({cat_id:cat_id})

                    const sortedproduct = res.data.Items.filter(function(item) {

                        if (item.cat_id == cat_id) {
                            return true; // skip
                            }
                            return false;
                            }
                            );

                this.setState({product:sortedproduct})


                  })
        }

    render(){
        return(
            <div>
            {this.state.cat_id == 1  ? <div> <ProductlistH /> </div> : 
                <div className="row">
                    {this.state.product.map(el => (                 
                        <div className="col-md-4 col-lg-3 col-xl-3">
                            <Link to={'/Product/:id/Productdetails/productId'+el.prod_id }>
                                <Card className="border-0 p-2">
                                    <div className="">
                                        <Card.Img variant="top" src={el.image} className="mx-auto product-slider-img" alt="100px180" />
                                        <Card.Body className="p-0 up">
                                        <br/>
                                        <Card.Title className="m-0 h6"> {el.prod_title} </Card.Title>
                                        <Card.Text className="m-0 p-0"> <span className="ddDiscount"> &#x20b9; {el.price} </span> 
                                        </Card.Text>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Link>
                        </div>    
                    ))}
                </div>
                     }
                    </div>
       );
    }
}

export default Productlist;