import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillPodsBox from "../common/SkillPodsBox";

const UpperBanner = () => {
  return (
    <div className="bg_primary_custom_color p-3 ">
      <Container>
        <Row>
          <Col className="d-flex flex-column flex-md-row justify-content-center align-items-center ">
            <span className="text-center text-white display-6 letter-spacing-2 text-uppercase d-flex fs-24 text-left text-lg-center d-flex flex-column  flex-lg-row justify-content-center p-4 ">
              It’s Time to Get &nbsp;<span className="fw-bold">GOOD</span>
            </span>
            <div>
              <button
                className="p-2 px-5 text-white fw-semibold text-uppercase letter-spacing-2"
                onClick={() => window.location = "https://calendly.com/jaymaynard84/30-minute-live"}
                style={{
                  background:
                    "linear-gradient(96.73deg, #C1292A 27.66%, #D0631A 85.99%)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.65)",
                  borderRadius: "10px",
                }}
              >
                GET IN TOUCH
              </button>
            </div>
          </Col>
        </Row>
      </Container>{" "}
    </div>
  );
};

export default UpperBanner;
