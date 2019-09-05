import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import soImg from '../../assets/images/3.png';
import './Productslider.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Productslider extends React.Component {
   
      state = {
          product:[],
          }

      componentDidMount()
            {
              axios.get(`/live/cart`).then(res=>{
              console.log(res.data.Items);
              this.setState({product:res.data.Items})
            })
          }

    render() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (

      <div className="container-fluid p-2" style={{ maxWidth: '1680px' }}>
        <div className="row p-2 m-0">
            <div className="col-md-8 col-lg-9 col-xl-10 globle-shadow"> 
                <div className="col-lg-12"> 
                    <h3 className="px-3 py-2 m-0"> Deals of the Day  <span> <Button className="float-right globel-btn-color"> View All </Button> </span> </h3> 
                </div>
                <hr className="m-2" />

                <Slider {...settings}>
                    {this.state.product.map(el => (
                        <div className="border border-top-0 border-left-0 border-bottom-0 p-0">
                        <Link to={'/Product/productId:'+el.prod_id }>
                            <Card className="border-0 p-2">
                                <div className="">
                                    <Card.Img variant="top" src={el.image} className="mx-auto product-slider-img" alt="100px180" />
                                    <Card.Body className="text-center p-0">
                                        <Card.Title className="m-0 h6"> {el.prod_title} </Card.Title>
                                            <Card.Text className="m-0 p-0"> <span className="ddDiscount"> &#x20b9; {el.price} </span> <span className="text-muted"> <del> &#x20b9; {el.actualAmt} </del> </span> </Card.Text>
                                            {/* <Card.Text className="m-0 p-0"> <span className="text-success"> {el.discount}  </span> </Card.Text> */}
                                            <Card.Text className="m-0 p-0"> <span className="text-muted"> {el.sub_category} </span> </Card.Text>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Link>
                        </div> 
                    ))}
                </Slider>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-2 pt-3">
                <div className="spcial-offer-label text-center"> <label className="m-0 pb-1"> Special Offer </label> </div>
                <div className="special-offer-colom grad1">
                    <div>
                        <img src={soImg} alt="123" className="img-fluid special-offer-img p-2"></img>
                    </div>
                </div>
            </div>
        </div>
      </div>

        
    );
  }
}

export default Productslider;
