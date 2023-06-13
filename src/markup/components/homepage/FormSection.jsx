import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillPodsBox from "../common/SkillPodsBox";
const FormSection = () => {
  return (
    <div className="bg_primary_custom_color padding-5 ">
      <Container>
        <Row>
          <Col className="d-flex flex-column flex-md-row justify-content-center align-items-center ">
            <div className="text-center d-flex align-items-center flex-column flex-md-row text-white fs-30 letter-spacing-2 text-uppercase d-flex  ">
              Let’s chat & develop your &nbsp;
              <span className="fw-bolder">
                <SkillPodsBox />
              </span>
            </div>
          </Col>
        </Row>
        <Row className="d-flex">
          <Col lg={3} md={12} col={12} sm={12} xs={12}>
            <div className="d-flex flex-md-column flex-row text-white input_wrapper  margin_top">
              <label>Date:</label>
              <input type="text" className="input_text" />
            </div>
          </Col>
          <Col lg={6} md={12} col={12} sm={12} xs={12}>
            <Row className="d-flex">
              <Col lg={6} md={6} col={6} xs={6}>
                <div className="d-flex flex-md-column flex-row text-white input_wrapper  margin_top">
                  <label>From:</label>
                  <input type="time" className="input_text" />
                </div>
              </Col>
              <Col lg={6} md={6} col={6} xs={6}>
                <div className="d-flex flex-md-column flex-row text-white input_wrapper  margin_top">
                  <label>To:</label>
                  <input type="time" className="input_text" />
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={3} md={12} col={12} sm={12} xs={12}>
            <button
              className="p-3 px-5 input_text text-white fw-semibold  margin_top text-uppercase letter-spacing-2 fs-12"
              style={{
                background:
                  "linear-gradient(96.73deg, #C1292A 27.66%, #D0631A 85.99%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.65)",
                borderRadius: "10px",
              }}
            >
              SCHEDULE NOW
            </button>
          </Col>
        </Row>
      </Container>{" "}
    </div>
  );
};

export default FormSection;
