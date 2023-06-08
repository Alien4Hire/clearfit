import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const ProfileScetion = () => {
  return (
    <Container fluid className=" half_cut">
      <Container>
        <Row className="padding_container half_cut mx-auto">
          <Col className="d-flex gap-5 align-items-center flex-md-row  flex-column-reverse  ">
            {/* left side  */}
            <div className="d-flex gap-2 flex-column text-white justify-content-center align-items-center">
              <img
                className="profile_height_width"
                alt="No Found..."
                src={require("../../../assets/images/about-us/profile.png")}
              />
              <span className="fw-normal d-none d-md-block">
                Jason C. Maynard{" "}
              </span>
              <span className="d-none d-md-block">Founder</span>
            </div>
            {/* Right side  */}
            <div className="d-flex flex-column gap-4 text-white ">
              <div>
                <p className="text-uppercase h1 letter_spacing text-left-custom">
                  wHY jASON’S cOMPANY dID It.
                </p>
                <p className="letter_spacing">Hi. I’m Jason.</p>
              </div>
              <div>
                <p className="font-normal letter_spacing">
                  freelanced as a software developer for years. I saw how
                  software was built at dozens of different companies
                </p>
                <p className="font-normal letter_spacing">
                  Quite honestly, those early days were often a hot mess. And it
                  wasn’t just one thing...
                </p>
                <p className="font-normal letter_spacing">
                  Five or six things every team needs to get right. Perform
                  without fail. Or projects flounder.
                </p>
                <img
                  className="signature_padding"
                  alt="No Found..."
                  src={require("../../../assets/images/about-us/signature.png")}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProfileScetion;
