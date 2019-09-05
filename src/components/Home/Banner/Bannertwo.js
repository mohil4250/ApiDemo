import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import axios from 'axios';

class Bannertwo extends React.Component{

    state = {
        FeaturBrand:[],
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
                this.setState({FeaturBrand:rolenames})
            })
        }
   
     render(){
        var size= 7;
         return( 
             <div>
                <div className="container-fluid p-0 mt-2">
                    <div className="row rowcolor">
                        <div className="col-lg-12">
                            <h4 className="mt-2">Featured Brand</h4>
                        </div>
                        {this.state.FeaturBrand.slice(3, size).map(slider => (
                            <div className="col-md-3 col-lg-3 col-xl-3">
                                <Link to="/">
                                    <img src={slider.image} alt=""  className="img-fluid imgsetting1"/>
                                </Link>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
         );
     }
        
}
export default Bannertwo;