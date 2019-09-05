import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import './Bannerslider.css';
import axios from 'axios';

class Bannerslider extends React.Component{

    state = {
    BannerSlider:[],
    }

    componentDidMount()
        {
            axios.get(`/live/advertise`).then(res=>{
            const rolenames = res.data.Items.filter(function(item) {
                if (item.position_type === "top_slider") {
                    return true; // skip
                    }
                    return false;
                    });
                this.setState({BannerSlider:rolenames})
            })
        }

    render(){
        return(
            <Carousel className="" indicators={false} 
                nextIcon={<div className="carousel-control-right-div"><i className="fas fa-angle-right fa-2x"></i></div>}
                prevIcon={<div className="carousel-control-left-div"><i className="fas fa-angle-left fa-2x"></i></div>}
            >
                {this.state.BannerSlider.map(slider => (
                <Carousel.Item> 
                    <Link to="/"> <img className="d-block w-100 slider-img-hw" src={slider.image} alt="First slide" /> </Link>
                </Carousel.Item>
                ))} 
            </Carousel>
            );
        }
    }

export default Bannerslider;
