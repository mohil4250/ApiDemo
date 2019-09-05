import React from 'react';
import { Card } from 'react-bootstrap';
import Slider from 'react-slick';
import './Test.css';
import axios from 'axios';

class Itemslider extends React.Component {
   
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
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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

      <div className="container" style={{ maxWidth: '1680px' }}>
        <Slider {...settings}>
            {this.state.product.map(el => (                  
                <div className="border border-top-0 border-left-0 border-bottom-0 p-0">
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
                </div> 
            ))}
        </Slider>
      </div>

        
    );
  }
}

export default Itemslider;
