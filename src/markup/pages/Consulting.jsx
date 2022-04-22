import React, { Component } from "react";
import './../../assets/css/consulting.css'
export default class Consulting extends Component {
    //    ./../../assets/images/background/consultingbg.png
  render() {
      
    return (
      <>
        <section class="hero-section">
          <div class="opacity-container">
              <p>Build Your Business Better</p>
            <h1>BIG. HEADING. HERE</h1>
            <p>ClearFit Technologies was an excellent software development partner.  The final mobile app was tested <br/> and all its functionalities performed very well.  Their work methodology was top-notch and...</p>
            <button type="button" class="call-to-action-btn">CALL TO ACTION</button>
          </div>
        </section>
        <section class="clients  d-flex">
            <div className="clients-text col-2">
               Our <br /> Awesome <br /> Clients
            </div>
            <div className="company-logos ">
                <img src={require("./../../assets/images/background/companylogos.png")} alt="company logos" />
            </div>
        </section>
        <section className="life-headline">
            <h1>Life Changing Headline</h1>
            <p>ClearFit Technologies was an excellent software development partner.  The final mobile app <br /> was tested and all its functionalities performed very well.  Their work methodology was top- <br/>notch and...</p>
            <h6>H4 Headline Here</h6>
        </section>
        <section className="who-we-are ">
           <div className="hr-div d-flex">
                <hr /> Who We Are
               </div> 
            <h1>Clear Fit software <br /> consulting can help <br /> your business over the <br /> finish line. Any software <br /> project or cloud <br /> architecture we can <br/>
             handle it with ease.</h1>
             <div className="btn-center d-flex">
             <button type="button" className="call-to-action-btn">CALL TO ACTION</button>
             </div>
        </section>
        <section class="work-hero-section d-flex">
        <div className="hr-div d-flex">
                <hr /> Who We Are
        </div> 
            <div className="col-5 content">
              <h1>how to <br /> work with us</h1>
              <p >There are two ways in which you can work with us - virtually or in-person. <br /><br />
              Learn more about each and choose the option that suits your needs best.  If you want a customized option, you can reach out directly and things will be assessed on a case-by-case basis. <br /><br />
              You can also apply for a complimentary Marketing Strategy Call if you’re unsure which option works best.  By the way, a 100% money-back guarantee backs every single consultation.</p>
              <div className="work-hero-section-btns">
              <button type="button" class="call-to-action-btn">VIRTUAL</button>
              <button type="button" class="call-to-action-btn">IN-PERSON</button>
              </div>
            </div>
        </section>
        <section class="customers-hero-section">
            <div className="hr-div d-flex">
                <hr /> Testimonials
            </div> 
            <h1>what they’re saying</h1>
            <div className="customers-cards  d-flex">
                <div className="card col-2">
                    <h1>Design Quality</h1>
                    <p>ClearFit Technologies was an excellent software development partner.  The final mobile app was tested and all its functionalities performed very well.  Their work methodology was top-notch and...</p>
                </div>
                <div className="card col-2 d-flex">
                    <h1>Design Quality</h1>
                    <p>ClearFit Technologies was an excellent software development partner.  The final mobile app was tested and all its functionalities performed very well.  Their work methodology was top-notch and...</p>
                </div>
                <div className="card col-2 d-flex">
                    <h1>Design Quality</h1>
                    <p>ClearFit Technologies was an excellent software development partner.  The final mobile app was tested and all its functionalities performed very well.  Their work methodology was top-notch and...</p>
                </div>
            </div>
        </section>
      </>
    );
  }
}
