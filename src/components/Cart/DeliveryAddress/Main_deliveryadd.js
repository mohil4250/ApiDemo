import React,{Component} from 'react';
// import Checkoutheader from './Checkoutheader';
// import  Footer from '../Cartfooter/Cartfooter'
// import CheckoutLogin1 from '../Checkoutpage/CheckoutLogin'
// import BudgesCart1 from '../Checkoutpage/BudgesCart';
import   Checkoutheader from '../Checkoutpage/Checkoutheader';
import   Footer from '../Cartfooter/Cartfooter';
import   Loginadd  from '../DeliveryAddress/Loginaddressheader';
import   Delform from'../DeliveryAddress/Delfrom';
import '../DeliveryAddress/Main_deliveryaddress.css';




class Main_deliveryadd extends React.Component{
    render(){
        return(
            <div >
                {/* <Checkoutheader/> */}
              <Loginadd />
              <Delform />
                {/* <Footer/> */}
            </div>
        );

    }
}
export default Main_deliveryadd;