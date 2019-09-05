import React from 'react';
import 'antd/dist/antd.css';
import color4 from '../../assets/images/color/black.jpg';
import { Radio, Row , Col } from 'antd';

class Infotable extends React.Component{
    render(){
        return(
            <div>
            <div className="row">
                <div className="col-md-6 col-lg-6"> <div className="pt-3"> Color </div> </div>
                <div className="col-md-6 col-lg-6"> <div className="pt-2"> Storage </div> </div>

                <div className="col-md-6 col-lg-6">
                    <Radio.Group>
                        <Row gutter={24}>
                            <Col lg={{ span:6 }} md={{ span:6 }} className="p-1"> <Radio.Button value="color1" style={{ height:'70px', width:'70px' }}> <img src={color4} style={{ height:'50px', width:'50px' }} alt="color1" /> </Radio.Button> </Col>
                            <Col lg={{ span:6 }} md={{ span:6 }} className="p-1"> <Radio.Button value="color2" style={{ height:'70px', width:'70px' }}> <img src={color4} style={{ height:'50px', width:'50px' }} alt="color2" /> </Radio.Button> </Col>
                            <Col lg={{ span:6 }} md={{ span:6 }} className="p-1"> <Radio.Button value="color3" style={{ height:'70px', width:'70px' }}> <img src={color4} style={{ height:'50px', width:'50px' }} alt="color3" /> </Radio.Button> </Col>
                            <Col lg={{ span:6 }} md={{ span:6 }} className="p-1"> <Radio.Button value="color4" style={{ height:'70px', width:'70px' }}> <img src={color4} style={{ height:'50px', width:'50px' }} alt="color4" /> </Radio.Button> </Col>
                        </Row>
                    </Radio.Group>
                </div>

                <div className="col-md-6 col-lg-6">
                    <Radio.Group>
                        <Row gutter={8}>
                            <Col span={12} className="p-1"> <Radio.Button className="p-1" value="color1"> 32 GB </Radio.Button> </Col>
                            <Col span={12} className="p-1"> <Radio.Button className="p-1" value="color2"> 64 GB </Radio.Button> </Col>
                        </Row>
                    </Radio.Group>
                </div>
                <div className="col-md-6 col-lg-6"> <div className="pt-2"> Highlights </div> </div>
                <div className="col-md-6 col-lg-6"> <div className="pt-2"> Easy Payment Options </div> </div>

                <div className="col-md-6 col-lg-6">
                    <ul>
                        <li>2 GB RAM | 32 GB ROM | Expandable Upto 256 GB</li>
                        <li>13.84 cm (5.45 inch) HD+ Display</li>
                        <li>12MP Rear Camera | 5MP Front Camera</li>
                        <li>4000 mAh Li-Polymer Battery</li>
                        <li>Qualcomm Snapdragon 439 Processor</li>
                    </ul>
                </div>

                <div className="col-md-6 col-lg-6">
                    <ul className="px-0">
                        <li>No cost EMI starting from ₹517/month</li>
                        <li> Cash on Delivery </li>
                        <li>Net banking & Credit/ Debit/ ATM card </li>

                    </ul>
                </div>
                <div className="col-lg-12"> <div className="pt-/2"> Seller </div> </div>
                <div className="col-lg-12"> 
                    <ul className="px-0">
                        <li> 10 Days Replacement Policy  </li>
                    </ul>
                </div>

            </div>

            </div>
        );
    }
}

export default Infotable;