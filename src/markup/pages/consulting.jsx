import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./../../assets/css/consulting.css";
import "./../../assets/css/color.css";

// Date Picker
import DatePicker from 'sassy-datepicker';

//  Slider
import Slider from "react-slick";
import Footerreused from "../layout/reusedFooter";

export default class Consulting extends Component {
  onChange = (date) => {
    console.log(date.toString());
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
 
    return (
      <>
      {/* Hero Section */}
        <section className="hero-section">
          <div className="opacity-container">
            <p>Build Your Business Better</p>
            <h1>BIG. HEADING. HERE</h1>
            <p className="paragraph">
              ClearFit Technologies was an excellent software development
              partner. The final mobile app was tested and all its
              functionalities performed very well. Their work methodology was
              top-notch and...
            </p>
            <button type="button" className="call-to-action-btn">
              CALL TO ACTION
            </button>
          </div>
        </section>

        {/*  Clients Section  */}
        <section className="clients  d-flex">
          <div className="clients-text ">
            Our Awesome Clients
          </div>
          <div className="company-logos ">
            <img
              src={require("./../../assets/images/background/companylogos.png")}
              alt="company logos"
            />
          </div>
        </section>

        {/* Life Headline section */}
        <section className="life-headline">
          <h1>Life Changing Headline</h1>
          <p>
            ClearFit Technologies was an excellent software development partner.
            The final mobile app was tested and all its functionalities
            performed very well. Their work methodology was top-
            notch and...
          </p>
          <h4>H4 Headline Here</h4>
        </section>

        {/* Who we are section */}
        <section className="who-we-are ">
          <div className="hr-div d-flex">
            <hr />
            <p> Who We Are</p>
          </div>
          <h1>
            Clear Fit software  consulting can help your business
            over the  finish line. Any software project or cloud
            architecture we can
            handle it with ease.
          </h1>
          <div className="btn-center d-flex">
            <button type="button" className="call-to-action-btn">
              CALL TO ACTION
            </button>
          </div>
        </section>

        {/* Work-Hero-Section */}
        <section className="work-hero-section ">
          <div className="hr-div d-flex">
            <hr /> <p> How We Help</p>
          </div>
          <div className="col-lg-5 col-9 work-content">
            <h1>
              how to <br /> work with us
            </h1>
            <p>
              There are two ways in which you can work with us - virtually or
              in-person. <br />
              <br />
              Learn more about each and choose the option that suits your needs
              best. If you want a customized option, you can reach out directly
              and things will be assessed on a case-by-case basis. <br />
              <br />
              You can also apply for a complimentary Marketing Strategy Call if
              you’re unsure which option works best. By the way, a 100%
              money-back guarantee backs every single consultation.
            </p>
          </div>
          <div className="work-hero-section-btns col-lg-4 col-md-6 col-sm-9 col-9 col-xs-12 ml-auto ">
              <button type="button" className="call-to-action-btn">
                VIRTUAL
              </button>
              <button type="button" className="call-to-action-btn">
                IN-PERSON
              </button>
            </div>
        </section>

        {/* Customers Section */}
        <section className="customers-hero-section web-card-view">
          <div className="hr-div d-flex">
            <hr /> <p> Testimonials</p>
          </div>
          <h1>what they’re saying</h1>
          <div className="customers-cards col-10  d-flex">
            <div className="card-main">
              <div className="card">
                <h1>Design Quality</h1>
                <p>
                  ClearFit Technologies was an excellent software development
                  partner. The final mobile app was tested and all its
                  functionalities performed very well. Their work methodology
                  was top-notch and...
                </p>
              </div>
              <div className="profile d-flex">
                <img
                  src={require("./../../assets/images/background/profile-pic.png")}
                  className="rounded-circle"
                  alt="Profile Pic"
                />
                <div className="profile-content">
                  <h6>Scott McDonald</h6>
                  <small>Project Manager, Fluttr</small>
                </div>
              </div>
            </div>
            <div className="card-main">
              <div className="card">
                <h1>Design Quality</h1>
                <p>
                  ClearFit Technologies was an excellent software development
                  partner. The final mobile app was tested and all its
                  functionalities performed very well. Their work methodology
                  was top-notch and...
                </p>
              </div>
              <div className="profile d-flex">
                <img
                  src={require("./../../assets/images/background/profile-pic.png")}
                  className="rounded-circle"
                  alt="Profile Pic"
                />
                <div className="profile-content">
                  <h6>Scott McDonald</h6>
                  <small>Project Manager, Fluttr</small>
                </div>
              </div>
            </div>
            <div className="card-main">
              <div className="card">
                <h1>Design Quality</h1>
                <p>
                  ClearFit Technologies was an excellent software development
                  partner. The final mobile app was tested and all its
                  functionalities performed very well. Their work methodology
                  was top-notch and...
                </p>
              </div>
              <div className="profile d-flex">
                <img
                  src={require("./../../assets/images/background/profile-pic.png")}
                  className="rounded-circle"
                  alt="Profile Pic"
                />
                <div className="profile-content">
                  <h6>Scott McDonald</h6>
                  <small>Project Manager, Fluttr</small>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Mobile view Slider */}
        <section className="customers-hero-section mob-slider">
          <div className="hr-div d-flex">
            <hr /> <p> Testimonials</p>
          </div>
          <h1>what they’re saying</h1>
          <div className="customers-cards col-10  d-flex">
          <Slider {...settings}> 
            <div className="slider-card-main">
              <div className="card">
                <h1>Design Quality</h1>
                <p>
                  ClearFit Technologies was an excellent software development
                  partner. The final mobile app was tested and all its
                  functionalities performed very well. Their work methodology
                  was top-notch and...
                </p>
              </div>
              <div className="profile d-flex">
                <img
                  src={require("./../../assets/images/background/profile-pic.png")}
                  className="rounded-circle"
                  alt="Profile Pic"
                />
                <div className="profile-content">
                  <h6>Scott McDonald</h6>
                  <small>Project Manager, Fluttr</small>
                </div>
              </div>
            </div>
            <div className="card-main">
              <div className="card">
                <h1>Design Quality</h1>
                <p>
                  ClearFit Technologies was an excellent software development
                  partner. The final mobile app was tested and all its
                  functionalities performed very well. Their work methodology
                  was top-notch and...
                </p>
              </div>
              <div className="profile d-flex">
                <img
                  src={require("./../../assets/images/background/profile-pic.png")}
                  className="rounded-circle"
                  alt="Profile Pic"
                />
                <div className="profile-content">
                  <h6>Scott McDonald</h6>
                  <small>Project Manager, Fluttr</small>
                </div>
              </div>
            </div>
            <div className="card-main">
              <div className="card">
                <h1>Design Quality</h1>
                <p>
                  ClearFit Technologies was an excellent software development
                  partner. The final mobile app was tested and all its
                  functionalities performed very well. Their work methodology
                  was top-notch and...
                </p>
              </div>
              <div className="profile d-flex">
                <img
                  src={require("./../../assets/images/background/profile-pic.png")}
                  className="rounded-circle"
                  alt="Profile Pic"
                />
                <div className="profile-content">
                  <h6>Scott McDonald</h6>
                  <small>Project Manager, Fluttr</small>
                </div>
              </div>
            </div>
            </Slider>
          </div>          
        </section>

        {/* FAQ Section */}
        <section className="FAQ">
          <div className="hr-div d-flex ">
            <hr /> <p> Frequently Asked Questions</p>
          </div>
          <div className="faq-content col-lg-7 col-11">
            <details >
              <summary >
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas?
              </summary>
            </details>
            <details>
              <summary>
                Cras sed malesuada mauris. Duis facilisis auctor mi, vehicula
                commodo?
              </summary>
              <p>
                Proin eleifend eleifend velit, vel porttitor nibh volutpat a.
                Phasellus commodo neque ac felis accumsan, sit amet auctor
                sapien porttitor. Ut tristique ligula sem, eget pellentesque mi
                tempus ut. Nulla volutpat viverra mi, in placerat urna auctor
                finibus. Integer tincidunt diam quis nunc blandit maximus.
                Integer arcu sapien, tempor quis massa quis, bibendum
                ullamcorper leo. Morbi vehicula faucibus est, placerat bibendum
                orci tristique rutrum. Ut suscipit velit libero, vel tempus
                velit venenatis a.
              </p>
            </details>
            <details>
              <summary>
                Donec sit amet lacus at purus auctor cursus. Quisque luctus
                magna in velit cursus?
              </summary>
            </details>
            <details>
              <summary>
                Etiam suscipit velit lorem, non vulputate odio mollis?
              </summary>
            </details>
            <details>
              <summary>
                Proin feugiat orci quis elit ornare volutpat?
              </summary>
            </details>
            <details>
              <summary>
                Aenean pharetra lectus nec posuere bibendum. Praesent eget
                mauris volutpat sodales quis et erat?
              </summary>
            </details>
            <details>
              <summary>
                Mauris dui velit, maximus eu nisl sed, rutrum volutpat tellus?
              </summary>
            </details>
          </div>
        </section>

        {/* Schedule section */}
        <section className="schedule">
          <div className="schedule-main col-lg-10 col-sm-12 d-flex">
            <div className="schedule-left col-3">
              {/* DatePicker */}
              <DatePicker onChange={this.onChange} />
            </div>
            <div className="schedule-right col-lg-7 col-sm-12">
              <h1>Schedule a Free Consultation</h1>
              <h5>H4 Headline Here Lorem Ipsum Quo Verdat</h5>
              <p>
                Proin eleifend eleifend velit, vel porttitor nibh volutpat a.
                Phasellus commodo neque ac felis accumsan, sit amet auctor
                sapien porttitor. Ut tristique ligula sem, eget pellentesque mi
                tempus ut. Nulla volutpat viverra mi, in placerat urna auctor
                finibus. Integer tincidunt diam quis nunc blandit maximus.
              </p>
              <div className="select-time-main text-center">
                <div className="select-heading">
                <h5>SELECT A DATE</h5>
                <h5>SELECT A TIME</h5>
                </div>
                <div className="from-to d-flex">
                
                <input type="date" />
                  <div className="from col-lg-4 col-6">
                    <p>From</p>
                    <h6>07:00 AM</h6>
                  </div>
                  <div className="to from col-lg-4 col-6">
                    <p>To</p>
                    <h6>12:00 AM</h6>
                  </div>
                </div>
                <button type="button">CONFIRM SCHEDULE</button>
              </div>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="final-call">
          <div className="hr-div d-flex">
            <hr /> <p> What Are You Waiting For?</p>
          </div>
          <div className="final-call-content">
            <h1>FINAL CALL TO ACTION</h1>
            <div className="final-call-submit d-flex">
              <h5>
                Don’t miss out and click the button and respond to our <br />{" "}
                compelling call to action now.
              </h5>
              <button type="button" className="final-call-action--btn">
                CALL TO ACTION
              </button>
            </div>
          </div>
        </section>

        {/* Social Section */}
        <section className="social d-flex">
          <h5>Follow us on social</h5>
          <div className="social-icons">
            <ul className="consulting-social-links d-flex">
              <li>
                <Link to={"/#"}>
                  <img
                    src={require("./../../assets/images/background/fb.png")}
                    alt="FB"
                  ></img>
                </Link>
              </li>
              <li>
                <Link to={"/#"}>
                  <img
                    src={require("./../../assets/images/background/twitter.png")}
                    alt="twitter"
                  ></img>
                </Link>
              </li>
              <li>
                <Link to={"/#"}>
                  <img
                    src={require("./../../assets/images/background/linkedin.png")}
                    alt="linkedin"
                  ></img>
                </Link>
              </li>
              <li>
                <Link to={"/#"}>
                  <img
                    src={require("./../../assets/images/background/insta.png")}
                    alt="instagram"
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="hr-div d-flex">
            <hr /> <p> Drop Us A Line</p>
          </div>

          <div className="footer-content-main main-footer col-lg-10 my-5 mx-auto col-sm-12  p-lg-0 ">
            {/* left-content */}
            <div className="left-content mr-lg-5 ml-sm-3 ml-3 col-lg-3 col-sm-7 col-10">
              <h4>ClearFit.</h4>
              <p>
                Clear Fit software consulting can help your business over the
                finish line. Any software project or cloud architecture we can
                handle it with ease.
              </p>
              <div className="contact">
                <img
                  src={require("./../../assets/images/background/phone.png")}
                  alt="contact"
                ></img>
                614. 470. 4134
              </div>
              <div className="email">
                <img
                  src={require("./../../assets/images/background/email.png")}
                  alt="email"
                ></img>
                info@clearfitllc.com
              </div>
            </div>
            {/* Reused Footer */}
            <div className="reusedFootre col-lg-9 d-flex col-sm-12 flex-column-reverse flex-md-column-reverse flex-sm-column-reverse flex-lg-row justify-content-around">
            <Footerreused></Footerreused>
            </div>
          </div>

          <section className="copyright text-center">
            &copy; 2022 ClearFit LLC
          </section>
        </footer>        
      </>
    );
  }
}
