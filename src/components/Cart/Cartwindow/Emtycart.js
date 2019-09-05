import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './Productlist.css';
import shoe from '../../../assets/images/mobile/6.png';
import shoe1 from '../../../assets/images/mobile/7.jpg';
import { List, Col, Row, Avatar,  } from 'antd';

const listData = [];
for (let i = 0; i < 1  ; i++) {
    listData.push({
     title: `Mi mobile ${i}`,
      li:   '2 GB RAM | 32 GB ROM | Expandable Upto 256 GB',
      des : '13.84 cm (5.45 inch) HD+ Display',
      des1 : '12MP Rear Camera | 5MP Front Camera',
      des2 : '4000 mAh Li-Polymer Battery',
      des3 : 'Qualcomm Snapdragon 439 Processor',
      des4 :'Brand Warranty of 2 Years Available for Mobile and 6 Months for Accessories',
      url : shoe,
      sellprice : '8499',
      orignalprice : '10499',
      off : '19% off',
      exchange : 'Up to 8000 off on exchage',
      EMI : 'EMI starting from 401/from',
      text : 'Offers',
      offer1 : 'Special Price',
      offer2 : 'Bank Offer',
      delevery: 'expected to arrive 4 Sept',
     days:'10 days replacement Warrenty'
      
    },
    // {
    //     title: `Ant Design Title${i}`,
    //      li:   '2 GB RAM | 32 GB ROM | Expandable Upto 256 GB',
    //      des : '13.84 cm (5.45 inch) HD+ Display',
    //      des1 : '12MP Rear Camera | 5MP Front Camera',
    //      des2 : '4000 mAh Li-Polymer Battery',
    //      des3 : 'Qualcomm Snapdragon 439 Processor',
    //      des4 :'Brand Warranty of 2 Years Available for Mobile and 6 Months for Accessories',
    //      url : shoe1,
    //      Delivery : 'Expected delivery 4 Sep',
    //      orignalprice : '10499',
    //      off : '19% off',
    //      exchange : 'Up to 8000 off on exchage',
    //      EMI : 'EMI starting from 401/from',
    //      text : 'Offers',
    //      offer1 : 'Special Price',
    //      offer2 : 'Bank Offer',
    //    }
    );
}

class ProductlistH extends React.Component{

    constructor() {
        super();
        this.state = { listData: listData };
      }

    render(){
        return(
        <div>
            {/* {this.state.listData.map(el => (                  
                        <div className="row">
                            <div className="col-md-4">
                                <img src={el.url}/>
                            </div>
                            <div className="col-md-4">
                                <p>{el.title}</p>
                                <p>{el.des}</p>
                                <p>{el.des1}</p>
                                <p>{el.des2}</p>
                                <p>{el.des3}</p>
                                <p>{el.des4}</p>
                            </div>
                        </div>
                ))}  */}

                <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}

    renderItem={item => (
      <List.Item>
        {/* <List.Item.Meta /> */}
        <Row>
            <Col span={6}> 
                <div className="text-center"> <img src={item.url} style={{ maxWidth:'150px', maxHeight:'175px' }} className="img-fluid" /> 
                </div> 
            </Col>

            <Col span={12}>
                    <div className="h3"> {item.title} </div>
                    <div>
                        <span>  {item.des} </span>
                        <div className="h3 m-0"> &#x20b9; {item.sellprice} </div> 
                        <div> <span> <del> &#x20b9; {item.orignalprice} </del> </span>   <span className="text-success"> &nbsp; &nbsp; {item.off} </span> </div> 
                        <div> {item.exchange} </div> 
                        <div> {item.EMI} </div> 
                    </div>  
                 </Col>
            <Col span={6}> 
                <div>
                <div className="h6 m-0">  {item.delevery} </div> 
                <div className="m-2 text-muted">  {item. days} </div> 
                {/* <div> <span> <del> &#x20b9; {item.orignalprice} </del> </span>   <span className="text-success"> &nbsp; &nbsp; {item.off} </span> </div> 
                <div> {item.exchange} </div> 
                <div> {item.EMI} </div>  */}
                </div>

                {/* <div className="mt-3">
                <div className="text-success"> {item.text} </div> 
                    <ul>
                        <li> <div> {item.offer1} </div> </li>
                        <li> <div> {item.offer2} </div> </li>
                    </ul>

                </div> */}
            </Col>
        </Row>

        {item.content}
      </List.Item>
    )}
  />

 </div>
       );
    }
}

export default ProductlistH;