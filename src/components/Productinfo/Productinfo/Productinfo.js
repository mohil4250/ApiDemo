import React from 'react';
import './Productinfo.css';
import 'antd/dist/antd.css';
import {Row , Col, Affix, Icon } from 'antd';
import Breadcrumb from '../../Product/Breadcrumb/Breadcrumb';
import {Button, Badge} from 'react-bootstrap';
import Gallery from '../Gallery/Gallery';
import Specification from '../Specification/Specification';
import Infotable from '../Infotable/Infotable';
import Ratting from '../Ratting/Ratting';
import BestCameraPhone from '../../Home/BestCameraPhone/BestCameraPhone';

class Productinfo extends React.Component{
    render(){
        return(
        <div className="info-container mx-auto main-div">
            <div className="row main-row">
                <div className="col-md-4 col-lg-4">
                    <div className="aaa"> 
                    <Gallery />
                    </div>
                </div>
                <div className="col-md-8 col-lg-8 p-0">
                    <div className="row"> 
                        <div className="col-md-12 col-lg-12 p-0"> <Breadcrumb /> </div>
                           <div className="col-md-12 col-lg-12 p-0"> 
                            <div> <span> Redmi Note 7S (Onyx Black, 64 GB)  (4 GB RAM) </span> </div>
                                    <div> 
                                        <Badge variant="success" className="ratting-text"> 
                                        <span> 4.4 <Icon className="rattin-star" type="star" theme="filled" /> </span>
                                        </Badge>
                                        <span className="text-muted ratting-text"> 49,116 Ratings & 4,044 Reviews </span>
                                    </div>
                                <div className="py-2"> <span className="success"> Extra ₹4000 discount </span> </div>
                                
                                <div> <span className="h1"> ₹31,999 </span> <span> <span className="">₹35,999 11% off </span> <span> <i className="fa fa-info-circle" aria-hidden="true"></i> </span> </span> </div>

                                <div className="product-info-offer" style={{ fontSize:'80%' }}>
                                    <ul className="product-info-ul" style={{ listStyleType:'none' }}>
                                        <li> <div className="offerlist-text"> <span> <i className="fa fa-tag offerlist-icon"></i> </span> <span> No cost EMI ₹2,667/month. Standard EMI also availableView Plans </span> </div> </li>
                                        <li> <div className="offerlist-text"> <span> <i className="fa fa-tag offerlist-icon"></i> </span> <span> Get upto ₹17900 off on exchangeBuy with Exchange </span> </div> </li>
                                        <li> <div className="offerlist-text"> <span> <i className="fa fa-tag offerlist-icon"></i> </span> <span> Special PriceExtra ₹4000 discount(price inclusive of discount)T&C </span> </div> </li>
                                        <li> <div className="offerlist-text"> <span> <i className="fa fa-tag offerlist-icon"></i> </span> <span> Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C </span> </div> </li>
                                    </ul>
                                </div>
                            </div>
                        <div className="col-md-12 col-lg-12 p-0"> <Infotable /> </div>
                        <div className="col-md-12 col-lg-12"> <Specification /> </div>
                        <div className="col-md-12 col-lg-12 p-0"> <Ratting /> </div>
                    </div>
                </div>
            </div>


            <BestCameraPhone />
        </div>
        );
    }
}

export default Productinfo;
