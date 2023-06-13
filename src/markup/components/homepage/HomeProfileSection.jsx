import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomeProfileSection = () => {
  return (
    <Container fluid className="bg_white">
      <Container>
        <Row className="mx-auto padding_profile  ">
          <Col className="d-flex gap-0 gap-lg-5 flex-lg-row  flex-column-reverse align-items-lg-center align-items-start">
            {/* left side  */}
            <div className="d-flex gap-2 flex-column text-white justify-content-center align-items-center">
              <img
                className="profile_image"
                alt="No Found..."
                src={require("../../../assets/images/about-us/profile.png")}
              />
            </div>
            {/* Right side  */}
            <div className="d-flex flex-column gap-4 text-black max_width_custom align-items-center">
              <div className="d-flex flex-column gap-4">
                <div className="max_Width_ux_designers">
                  <p className="fw-normal letter-spacing-2 fs-30 ">
                    The most important aspect of software development isn’t
                    programming.
                  </p>
                  <p className="fw-normal letter-spacing-2 fs-30">
                    It’s communication. Let’s talk.
                  </p>
                </div>

                <div className="d-flex height_founder justify-content-between align-items-lg-center align-items-start flex-column flex-lg-row gap-4">
                  <div className="d-flex  gap-4">
                    <span className="fw-bolder ">Jason C. Maynard </span>
                    <span>Founder</span>
                  </div>
                  <img
                    className="signature_profile"
                    alt="No Found..."
                    src={require("../../../assets/images/about-us/signature.png")}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomeProfileSection;
