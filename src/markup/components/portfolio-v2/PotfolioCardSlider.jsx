import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioVTwoSliderCards from "../common/PortfolioVTwoSliderCards";
import Slider from "react-slick";

const PortfolioCardSlider = () => {
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
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 960,
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
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="silver_grey_background">
      <div className="portfolio_v_bg home_overdue_padding ">
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-center flex-column  align-items-center ">
                <h1 className="text-uppercase letter-spacing-2 py-2">
                  RELATED PROJECTS
                </h1>
                <div className="w-100 portfolio_version_two_slider p-3">
                  <Slider {...settings}>
                    <PortfolioVTwoSliderCards />
                    <PortfolioVTwoSliderCards />
                    <PortfolioVTwoSliderCards />
                  </Slider>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioCardSlider;
