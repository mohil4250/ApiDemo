import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import Product from './components/Product/Product';
import Productdetails from './components/Productinfo/Productdetails';
import Cart from './components/Cart/Cart';
import OTP from './components/Login/OTP/Otp';
import Buynow from './components/Cart/DeliveryAddress/Main_deliveryadd';
import Notication from './components/Static/Mainnotification/Notication';
import Customer from './components/Static/Customercare/Maincustomer'
import Profile from './components/Usersprofile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
 
    <div>

        <Header />
          <Route path="/" exact component={Home} />
          <Route path="/Product/:id" exact component={Product} />
          <Route path="/Product/:id/Productdetails/:id" exact component={Productdetails} />
          <Route path="/Product/Productdetails/Cart" exact component={Cart} />
          <Route path="/Product/Productdetails/Buynow" exact component={Buynow} />
          <Route path="/OTP" exact component={OTP} />
          <Route path="/Customer" exact component={Customer} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/Notication" exact component={Notication} />
        <Footer />

    </div>
    </BrowserRouter>
  );
}

export default App;
