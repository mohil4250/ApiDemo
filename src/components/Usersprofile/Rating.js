import React from 'react';
import RatingImage from '../../assets/images/7.png'

class Rating extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 mx-auto  col-offset-6 ">
                        <img src={RatingImage} alt=""  className="img-fluid  mt-4"/>
                        <h4 className="mt-4" > No reviews and rating</h4>
                        <small>You have not rated or reviewed any product yet!</small>
                    </div>
                  
                </div>
          </div>
        )
    }
}
    
export default Rating;