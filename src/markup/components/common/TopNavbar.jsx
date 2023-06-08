import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
const TopNavBar = () => {
  return (
    <Container fluid className="bg_primary_custom_color">
      <Container className="">
        <Row className="d-flex align-items-center  height_top_navbar text-white">
          <Col>
            <div className="d-flex flex-row gap-4">
              <div className="d-flex align-items-center gap-2">
                <i className="far fa-envelope orange_color"></i>
                <Link
                  to={"mailto:info@webmail.com"}
                  className="text-white text-decoration-none d-none d-lg-block fw-normal text-uppercase"
                >
                  info@clearfitllc.com
                </Link>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="far fa-phone orange_color"></i>
                <Link
                  to={"tel:614-470-4134"}
                  className="text-white text-decoration-none d-none d-lg-block fw-normal  text-uppercase"
                >
                  614-470-4134
                </Link>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-row gap-4 justify-content-end ">
              <SocialMedia />
            </div>
          </Col>
        </Row>
        <div className="Main-Wrapper"></div>
      </Container>
    </Container>
  );
};

export default TopNavBar;
