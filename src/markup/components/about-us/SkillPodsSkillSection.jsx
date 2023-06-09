import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillPodsBox from "../common/SkillPodsBox";

const SkillPodsSkillSection = () => {
  return (
    <div className="black_dots_bg d-flex justify-content-center align-items-center padding_container">
      <Container>
        <Row className="max-width-custom mx-auto">
          <Col className="text-white text-center d-flex flex-column gap-4 ">
            <div className="h1 text-uppercase letter-spacing d-flex justify-content-center flex-column flex-sm-row align-items-center">
              &nbsp;<span>How Are &nbsp;</span>
              <SkillPodsBox /> &nbsp; Built?
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  font-normal  ">
                First I hired the best skill I could find.(I have a way to find
                the best.)
              </span>
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  font-normal">
                I especially look for the discontented who need freedom to
                innovate.
              </span>
            </div>

            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  font-normal">
                But more than that, I hired people who never wanted to be the
                weak link on the team…
              </span>
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  font-normal">
                … in skills, in communication, in situational awareness, in
                being willing to speak up when they see a problem—even at the
                risk of missing a deadline.
              </span>
            </div>
            <br></br>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2 font-normal font-size-24">
                My teams would be <span className="fw-bold">SKILLED.</span>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SkillPodsSkillSection;
