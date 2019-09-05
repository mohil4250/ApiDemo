import React,{Component} from 'react';
import Checkoutheader from './Checkoutheader';
import  Footer from '../Cartfooter/Cartfooter'
import CheckoutLogin1 from '../Checkoutpage/CheckoutLogin'
import BudgesCart1 from '../Checkoutpage/BudgesCart';

class Maincheckout extends React.Component{
    render(){
        return(
            <div >
                <Checkoutheader/>
                <CheckoutLogin1/>
                <BudgesCart1/>
                <Footer/>
              
            </div>
        );

    }
}
export default Maincheckout;