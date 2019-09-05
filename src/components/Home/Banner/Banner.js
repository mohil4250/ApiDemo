import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import axios from 'axios';

class Banner extends React.Component{

    state = {
        BannerSlider:[],
        }
    
        componentDidMount()
            {
                axios.get(`/live/advertise`).then(res=>{
                const rolenames = res.data.Items.filter(function(item) {
                    if (item.position_type === "banner") {
                        return true; // skip
                        }
                        return false;
                        });
                    this.setState({BannerSlider:rolenames})
                })
            }
   
     render(){
        var size= 3;
         return( 
            <div className="container-fluid p-0">
                <div className="row">
                    {this.state.BannerSlider.slice(0, size).map(slider => (
                        <div className="col-md-4 col-lg-4 col-xl-4 pl-3">
                            <Link to = "/"> 
                                <img src={slider.image} alt="" className="img-fluid imgsetting1"/>
                            </Link>
                        </div>
                    ))} 
                </div>
            </div>
         );
     }
        
}
export default Banner;