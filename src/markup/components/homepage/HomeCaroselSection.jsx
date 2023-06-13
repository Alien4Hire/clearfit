import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
const HomeCaroselSection = () => {
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
    <div className="bg_black_container text-white slider_padding">
      <div className="bg_black_shadow_cover">
        <div className="container-lg container-fluid">
          <div className="d-flex flex-column gap-5">
            <h2 className="fw-normal mb-4 text-center text-white text-uppercase letter-spacing-2">
              But don’t just take our word for it...
            </h2>
            <div className="w-100 ">
              <Slider {...settings}>
                <SliderCard
                  title=" Design Quality"
                  description=" Excellent software development partner. Our final mobile app
                  functionality performs very well. Their work methodology is
                  top-notch"
                  author="Scott McDonald"
                  designation="Project Manager, Fluttr"
                  picture={require("../../../assets/images/homepage/profilepic.png")}
                />

                <SliderCard
                  title="Amazing Team"
                  description="Thank you clear fit tech for this amazing experience. I made a mobile app for my small business employees… 
              so flexible to work with."
                  author="Adam Rosen"
                  designation="Founder, RosenUS"
                  picture={require("../../../assets/images/homepage/profilepic.png")}
                />
                <SliderCard
                  title="Motivated"
                  description="The ClearFit consultants we worked with to implement salesforce as our CRM tool were excellent.
              … professional, knowledgeable and provided excellent guidance.  "
                  author="Michael Wander"
                  designation="Hiring Manager, Clear Digital Media"
                  picture={require("../../../assets/images/homepage/profilepic.png")}
                />
              </Slider>
            </div>{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default HomeCaroselSection;

const SliderCard = ({ title, description, author, designation, picture }) => {
  return (
    <div className="card_wrapper d-flex flex-column gap-4 ">
      <div className="inner_wrapper bg_primary_custom_color d-flex flex-column gap-3">
        <h6 className="text-left text-white fw-normal  fs-20 letter-spacing">
          {title}
        </h6>
        <p className=" text-white text-left letter-spacing-2">{description}</p>
      </div>
      <div className="card_pic_wrapper d-flex flex-row gap-3 bg_black">
        <img src={picture} alt="Not found" className="profile_pic" />
        <div className="d-flex flex-column">
          <b className="letter-spacing-2">{author}</b>
          <span className="letter-spacing text_gradient fs-10">
            {designation}
          </span>
        </div>
      </div>
    </div>
  );
};
