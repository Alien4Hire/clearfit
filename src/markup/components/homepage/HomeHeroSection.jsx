import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const HomeHeroSection = () => {
  return (
    <div className="bg_responsive" style={{ minHeight: "700px" }}>
      <div className="bg-left_to_right_home d-flex align-items-center">
        <Container>
          <Row className="p-4 ">
            <Col className="d-flex gap-4 flex-column col-lg-8 col-sm-12 col-12">
              <div className="d-flex flex-column gap-4 text-uppercase ">
                <p className="display-6 letter-spacing-2 fw-normal">
                  When you’re building software,
                </p>
                <p className="display-6 letter-spacing-2 fw-normal">
                  it needs to be{" "}
                  <span className="fw-bold text_gradient fw-normal">good.</span>
                </p>
                <p className="display-6 letter-spacing-2 fw-normal">
                  Stop settling for less.
                </p>
                <p className="fw-bolder letter-spacing-2">
                  Schedule a call. It’s that simple.
                </p>
                <div>
                  <button
                    className="p-2 px-5 text-white fw-semibold text-uppercase letter-spacing"
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default HomeHeroSection;
