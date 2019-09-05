import React from 'react';
import 'antd/dist/antd.css';
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';
import one from '../../../assets/images/color/black.jpg';
import two from '../../../assets/images/color/blue.jpg';
import three from '../../../assets/images/color/red.png';
import four from '../../../assets/images/color/white.jpg';
import  {connect}  from 'react-redux';
import { addToCart } from '../../actions/cartActions';

const slideimg = [
    {
        url : one,
    },
    {
        url : two,
    },
    {
        url : three,
    },
    {
        url : four,
    },

]

class Gallery extends React.Component{

    constructor() {
        super();
        this.state = { slideimg: slideimg };
      }

      handleClick = (id)=>{
        this.props.addToCart(id);
        alert(id); 
    }
    

    render(){
        return(
            <div>
            <div className="pro-img-slider">
                <Carousel >
                {this.state.slideimg.map(el => (
                    <div>
                    <img src={el.url} alt="one" style={{ maxWidth:'300px', maxHeight:'350px', margin: '0 auto' }} /> 
                    </div>
                    ))}
                </Carousel>
            </div>

                <div className="row">
                    <div className="col-md-6 col-lg-6 p-1">
                        <Link to = "/Product/Productdetails/Buynow">
                            <Button className="btn-warning w-100"> Buy Now </Button>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-6 p-1">
                         <Link to = "/Product/Productdetails/Cart"> 
                            <Button className="btn-warning w-100"  onClick={()=>{this.handleClick(this.props.items[0].id)}}> Add To Cart </Button>
                        </Link> 
                    </div>
                
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Gallery)