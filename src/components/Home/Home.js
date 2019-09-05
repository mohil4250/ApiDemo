import React from 'react';
import Bannerslider from '../Home/Bannerslider/Bannerslider';
import Productslider from '../Home/Productslider/Productslider';
import Banner from '../Home/Banner/Banner';
import BestCameraPhone from '../Home/BestCameraPhone/BestCameraPhone'
import Bannertwo from '../Home/Banner/Bannertwo';

class Home extends React.Component{
    render(){
        return(
            <div style={{ maxWidth:'1680px', margin:'0 auto' }}>
                <Bannerslider />                
                <Productslider />
                <Banner />
                <BestCameraPhone />
                <Bannertwo />
            </div>
        );
    }
}

export default Home;