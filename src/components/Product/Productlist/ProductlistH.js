import React from 'react';
import 'antd/dist/antd.css';
import './Productlist.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { List, Col, Row} from 'antd';


class ProductlistH extends React.Component{

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
                <List itemLayout="vertical" size="large" pagination={{ onChange: page => { console.log(page); }, pageSize: 3, }}
                    dataSource={this.state.product}
                    renderItem={item => (
                        <Link to={'/Product/:id/Productdetails/productId'+item.prod_id }>
                            <List.Item>
                                <Row>
                                    <Col span={4}> 
                                        <div className="text-center"> <img src={item.image} style={{ maxWidth:'150px', maxHeight:'175px' }} className="img-fluid" /> </div> 
                                    </Col>

                                    <Col span={12}>
                                        <div className="h3"> {item.prod_title} </div>

                                        <div>
                                            <ul>
                                                <li> {item.des} </li>
                                                <li> {item.des1} </li>
                                                <li> {item.des2} </li>
                                                <li> {item.des3} </li>
                                                <li> {item.des4} </li>
                                            </ul>
                                        </div>
                                    </Col>

                                    <Col span={6}> 
                                        <div>
                                        <div className="h3 m-0"> &#x20b9; {item.price} </div> 
                                        <div> <span> <del> &#x20b9; {item.orignalprice} </del> </span>   <span className="text-success"> &nbsp; &nbsp; {item.off} </span> </div> 
                                        <div> {item.exchange} </div> 
                                        <div> {item.EMI} </div> 
                                        </div>

                                        <div className="mt-3">
                                        <div className="text-success"> {item.text} </div> 
                                            <ul>
                                                <li> <div> {item.offer1} </div> </li>
                                                <li> <div> {item.offer2} </div> </li>
                                            </ul>

                                        </div>
                                    </Col>
                                </Row>

                                {item.content}
                            </List.Item>
                        </Link>
                    )}
                />

        </div>
       );
    }
}

export default ProductlistH;