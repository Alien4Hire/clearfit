import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CalenderIcon from "../common/CalenderIcon";
import ClockIcon from "../common/ClockIcon";
import UserIcon from "../common/UserIcon";

const HeroSection = () => {
  return (
    <div className="bg_primary_custom_color">
      <Container>
        <Row>
          <Col>
            <div className="portfolio_height display-6 text-white text-center letter-spacing-2 text-uppercase">
              Pierre Jean-Louis
            </div>
          </Col>
        </Row>
      </Container>
      <div className=" portfolio_border bg_primary_custom_color ">
        <Container>
          <Row>
            <Col>
              <div className="portfolio_content_height text-white text-center letter-spacing d-flex gap-4 mx-auto justify-content-center ">
                <div className="d-flex gap-1 align-items-center">
                  <CalenderIcon />
                  <span className="fs-12 letter-spacing-2 ">JULY 17, 2021</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <ClockIcon />
                  <span className="fs-12 letter-spacing-2">12:08 PM</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <UserIcon />
                  <span className="fs-12 letter-spacing-2 ">
                    AUTHOR: JMAYNARD
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
