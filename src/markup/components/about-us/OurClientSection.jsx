import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const OurClientSection = () => {
  var settings = {
    speed: 1000,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="bg_white  d-flex justify-content-center align-items-center padding_container">
      <Container>
        <Row className=" mx-auto">
          <Col className="text-black d-flex justify-content-between flex-lg-row flex-column ">
            <h1 className="text-center letter-spacing-3">Our Clients</h1>
            <div className="slider_aboust_us about_us_slider_width px-2">
              <Slider {...settings}>
                <div>
                  <img
                    src={require("../../../assets/images/about-us/bloomberg.png")}
                    alt="Not found"
                  />
                </div>
                <div>
                  <img
                    src={require("../../../assets/images/about-us/businessweb.png")}
                    alt="Not found"
                  />
                </div>
                <div>
                  <img
                    src={require("../../../assets/images/about-us/tlexpreso.png")}
                    alt="Not found"
                  />
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurClientSection;
