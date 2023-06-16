import React from "react";
import Slider from "react-slick";

const ProjectGalleryContent = () => {
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
          dots: true,
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
    <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center p-5 ">
      <div className="d-flex flex-column gap-4 align-items-center mb-4">
        <img
          src={require("../../../assets/images/portfoliov2/gallery_image.png")}
        />
        <button
          className="p-2 px-5 text-white fw-semibold text-uppercase letter-spacing"
          onClick={() =>
            (window.location =
              "https://calendly.com/jaymaynard84/30-minute-live")
          }
          style={{
            background:
              "linear-gradient(96.73deg, #C1292A 27.66%, #D0631A 85.99%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.65)",
            borderRadius: "10px",
            width: "200px",
          }}
        >
          VISIT SITE
        </button>
      </div>

      <div className="d-none d-lg-block ml-2">
        <div className="d-flex flex-column gap-5">
          <img
            className="drwaing_images_w_h_gallery"
            src={require("../../../assets/images/portfoliov2/first.png")}
          />
          <img
            className="drwaing_images_w_h_gallery"
            src={require("../../../assets/images/portfoliov2/second.png")}
          />
        </div>
      </div>
      <div className="d-block d-lg-none w-100 project_gallery">
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
    </div>
  );
};

export default ProjectGalleryContent;
