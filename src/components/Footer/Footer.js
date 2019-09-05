import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(   
              <div className="container-fluid footer-color p-0">
                  <div className="footerimage">
                    <div className="row pt-5 ">
                        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                        <span className="headsetting"> ABOUT</span>
                        <ul className="Nav navset">
                            <li className="nav-item  ">
                                    <a className="nav-link text-white" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="#">Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Carrier </a>   
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">GoldenZon</a>
                                    <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Press</a>
                                </li>
                            </li>
                       </ul>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                        <span className="headsetting"> PAYMENT</span>
                        <ul className="Nav navset">
                                <li className="nav-item  ">
                                        <a className="nav-link text-white" href="#">Payment</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white " href="#">Shipping</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Cancellation & Return </a>   
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">FAQ</a>
                                        <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Report Infrigment</a>
                                    </li>
                                </li>
                       </ul>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                        <span className=" headsetting"> POLICY</span>
                            <ul className="Nav navset">
                                <li className="nav-item  ">
                                        <a className="nav-link text-white" href="#">Return policy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white " href="#">Terms of use</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Security </a>   
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Privacy</a>
                                        <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Sitemap</a>
                                        <li className="nav-item">
                                        <a className="nav-link text-white" href="#">ERP compliances</a>
                                    </li>
                                    </li>
                            </li>
                       </ul>
                        </div>
                        <div className="col-lg-z col-md-2 col-sm-3 col-xs-6">
                             <span className=" headsetting"> FOLLOW US</span>
                             <ul className="Nav navset">
                                <li className="nav-item  ">
                                        <a className="nav-link text-white" href="#">Facebook</a>
                                    </li>
                                    <li className="nav-item"> 
                                        <a className="nav-link text-white " href="#">Twitter</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Youtube </a>   
                                    </li>
                          </ul>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                             <span className="headsetting"> MAIL US</span>
                                <ul className="Nav navset">
                                    <li className="nav-item  ">
                                      <a className="nav-link text-white tSet768" href="#">Info@goldenzon.com</a>
                                    </li>
                                </ul>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6">
                             <span className="headsetting">  REGISTERED OFFICE</span>
                             <address className="text-white navset11"> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,pune-560016</address>
                        </div>
                    </div>
               </div>  

                <div className="row footer-color1 p-3">
                    <div className="col-lg-3 col-md-3 col-sm-2"><a href="#" className="fontset"> Sell on Goldenzon</a></div>
                    <div className="col-lg-2 col-md-2 col-sm-2"><a href="#" className="fontset"> Advertise</a></div>
                    <div className="col-lg-2 col-md-2 col-sm-1"><a href="#" className="fontset">Gift cards</a></div>
                    <div className="col-lg-2 col-md-2 col-sm-2"><a href="#" className="fontset"> Help center</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-5 p-0"><a href="#" className="fontset"> @2019  Goldenzon.com</a></div>
                </div>
         </div> 
        );
    }
}
export default Footer;