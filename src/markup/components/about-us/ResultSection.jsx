import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillPodsBox from "../common/SkillPodsBox";
const ResultSection = () => {
  return (
    <div className="bg_primary_custom_color d-flex justify-content-center align-items-center padding_container">
      <Container>
        <Row className="max-width-custom mx-auto">
          <Col className="text-white text-center d-flex flex-column gap-4 ">
            <div className="h1 text-uppercase letter-spacing d-flex justify-content-center flex-column flex-sm-row align-items-center">
              &nbsp;<span>The Result is &nbsp;</span>
              <SkillPodsBox />
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  font-normal text-uppercase  ">
                the most advanced software development teams on the planet.
              </span>
            </div>
            <div className="d-flex flex-md-row flex-column gap-4 justify-content-between align-items-end ">
              <span className="letter-spacing-2  font-normal text-justify paragraph_width">
                If you think I’m stretching the truth, call me. In a few short
                minutes, you’ll know the truth.
              </span>
              <button
                className="px-5 text-white fw-semibold text-uppercase letter-spacing button_w "
                style={{
                  background:
                    "linear-gradient(96.73deg, #C1292A 27.66%, #D0631A 85.99%)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.65)",
                  borderRadius: "10px",
                }}
              >
                SCHEDULE A CALL
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResultSection;
