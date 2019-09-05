import React, { Component } from "react";
import Slider from "react-slick";
import ReactImageZoom from "react-image-zoom";
import one from '../../../assets/images/color/black.jpg';
import two from '../../../assets/images/color/blue.jpg';
import three from '../../../assets/images/color/red.png';
import four from '../../../assets/images/color/white.jpg';

const props = {width: 300, height: 350, zoomWidth: 500};

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

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
    this.state = { slideimg: slideimg };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
      
    return (
      <div>
        <div className="row">
            <div className="col-lg-2 p-0">
                <Slider asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} slidesToShow={5} swipeToSlide={true} focusOnSelect={true} vertical={true} >
                        {this.state.slideimg.map(el => (
                            <div id="img-container">
                                <img src={el.url} alt="one" style={{ maxWidth:'50px', maxHeight:'50px', margin: '0 auto' }} /> 
                            </div>
                        ))}
                </Slider>
            </div>

            <div className="col-lg-10">
                <Slider arrows={false} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} >
                    {this.state.slideimg.map(el=>(
                <ReactImageZoom {...props} img={el.url} /> 
            ))}
                </Slider>
            </div>
        </div>

      </div>
    );
  }
}