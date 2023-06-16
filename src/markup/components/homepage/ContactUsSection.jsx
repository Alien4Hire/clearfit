import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhoneNumberBox from "../common/PhoneNumberBox";
import EmailBox from "../common/EmailBox";
import SocialMedia from "../common/SocialMedia";

const ContactUsSection = () => {
  return (
    <div className="bg_responsive" style={{ minHeight: "700px" }}>
      <div className="bg-left_to_right_home d-flex align-items-center">
        <Container>
          <Row className="p-5 ">
            <Col lg={7} col={12} md={12}>
              <div className="d-flex flex-column gap-4 mb-4">
                <p className="text-uppercase text-center-title fs-30 fw-nomal">
                  Drop us a line.
                </p>
                <p className="letter-spacing-2 fw-normal fs-20 max_Width_paragraph">
                  Staying ahead of your competition is hard. We know this
                  challenge very well. Let's work together to find the solution
                  that's right for you.
                </p>

                <PhoneNumberBox className="text-black d-block fs-14 fw-bolder " />
                <EmailBox className="text-black d-block fs-14 fw-bolder" />
                <div className="d-flex gap-4">
                  <SocialMedia className="text_gradient" />
                </div>
              </div>
            </Col>
            <Col lg={5} col={12} md={12}>
              <div className="d-flex flex-column gap-4 text-uppercase contact_us_form p-4  mb-4 mt-4">
                <div className="d-flex flex-column">
                  <label className="fw-bolder">Name</label>
                  <input
                    type="text"
                    className="contact_form_input"
                    placeholder="Enter Name..."
                  />
                </div>
                <div className="d-flex flex-column">
                  <label className="fw-bolder">Email</label>
                  <input
                    type="email"
                    className="contact_form_input"
                    placeholder="Enter Email..."
                  />
                </div>
                <div className="d-flex flex-column">
                  <label className="fw-bolder">Message</label>
                  <textarea
                    className="contact_form_input text_area"
                    placeholder="Enter Message"
                  ></textarea>
                </div>
                <div className="mx-auto">
                  <button
                    className="p-2 px-5 text-white fw-semibold text-uppercase letter-spacing"
                    style={{
                      background:
                        "linear-gradient(96.73deg, #C1292A 27.66%, #D0631A 85.99%)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.65)",
                      borderRadius: "10px",
                    }}
                  >
                    GET IN TOUCH
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactUsSection;
