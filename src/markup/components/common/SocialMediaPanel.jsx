import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "./SocialMedia";

const SocialMedeaPanel = () => {
  return (
    <div className="bg_black d-flex justify-content-center align-items-center padding-36">
      <Container>
        <Row className="max-width-custom mx-auto ">
          <Col className=" d-flex flex-md-row flex-column gap-4 align-items-center justify-content-center ">
            <h4 className="text-uppercase text-white text-center">
              Follow us on social
            </h4>
            <div className="d-flex gap-3">
              <SocialMedia className="text-white font-size-20" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SocialMedeaPanel;
