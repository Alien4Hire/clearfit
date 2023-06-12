import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillPodsBox from "../common/SkillPodsBox";
const LowerBanner = () => {
  return (
    <div className="bg_primary_custom_color ">
      <Container className="p-4">
        <Row>
          <Col className="d-flex justify-content-lg-center justify-content-end align-items-center ">
            <div className=" letter-spacing-3 align-items-end text-white font-sz-32 fw-normal letter-spacing-2 text-uppercase d-flex fs-24 text-left text-lg-center d-flex flex-column  flex-lg-row justify-content-center p-4 ">
              with our&nbsp;
              <SkillPodsBox />, we’re reDefining
              <span className="text_gradient">&nbsp; good.</span>
            </div>
          </Col>
        </Row>
      </Container>{" "}
    </div>
  );
};

export default LowerBanner;
