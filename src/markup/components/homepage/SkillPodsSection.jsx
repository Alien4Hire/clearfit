import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillPodsBox from "../common/SkillPodsBox";

const SkillPodsSection = () => {
  return (
    <div className="black_dots_bg d-flex justify-content-center align-items-center padding_container">
      <Container>
        <Row className="max-width-custom mx-auto">
          <Col className="text-white text-center d-flex flex-column gap-4  align-items-center ">
            <div className="h1 text-uppercase letter-spacing d-flex justify-content-center flex-column flex-sm-row align-items-center">
              &nbsp;<span>What are &nbsp;</span>
              <SkillPodsBox /> ?
            </div>

            <div className="d-flex flex-column gap-1 max_Width_seasoned"></div>
            <div className="d-flex flex-column gap-1 max_Width_seasoned">
              <div className="letter-spacing-2 font-normal ">
                <div className="d-flex flex-column flex-sm-row">
                  <SkillPodsBox h="24px" />
                  <span>
                    &nbsp; are diverse, agile, skilled “Dev Units” or “IT teams”
                    tailored to
                  </span>
                </div>
              </div>
              <span className="letter-spacing-2  font-normal  ">
                deliver the value and features you want. They’re robust, smart
                teams that can thrive in any environment and handle any job or
                problem thrown at them.
              </span>
            </div>
            <div className="d-flex flex-column gap-1 max_Width_seasoned">
              <span className="letter-spacing-2  font-normal  ">
                <span className="fw-bolder">Seasoned software engineers </span>
                that can take a straight line to the solution you need aren’t
                easy to find. But we found them.
              </span>
            </div>
            <div className="d-flex flex-column gap-1 max_Width_ux_designers">
              <span className="letter-spacing-2  fw-normal">
                <span className="fw-bolder">The best UX designers </span>
                that will design your website to look amazing. Moreover, your
                site will be user-friendly, intuitive, and lightning-fast
              </span>
            </div>

            <div className="d-flex flex-column gap-1 max_width_top_tier">
              <span className="letter-spacing-2  fw-normal">
                <span className="fw-bolder">Top-tier project managers </span>
                that drive your project from conception to completion, with any
                necessary hand-holding along the way.
              </span>
            </div>

            <br></br>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2 font-normal font-size-24">
                Bottom line, we hire SKILL.
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SkillPodsSection;
