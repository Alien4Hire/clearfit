import React from "react";
import Slider from "react-slick";
const DrawingSlider = () => {
  var settings = {
    speed: 1000,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
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
    <div className="d-block d-md-none w-100 ">
      <Slider {...settings}>
        <img
          src={require("../../../assets/images/portfoliov2/first.png")}
          alt="Not found"
        />
        <img
          className="drwaing_images"
          src={require("../../../assets/images/portfoliov2/first.png")}
        />
        <img
          className="drwaing_images"
          src={require("../../../assets/images/portfoliov2/fourth.png")}
        />{" "}
        <img
          className="drwaing_images"
          src={require("../../../assets/images/portfoliov2/fifth.png")}
        />
      </Slider>
    </div>
  );
};

export default DrawingSlider;
