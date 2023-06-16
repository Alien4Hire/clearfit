import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const CaseStudy = () => {
  return (
    <div className="bg_black_container">
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center flex-column mx-auto align-items-center p-5">
              <h2 className="text-white letter-spacing-2">
                CASE STUDY CONCLUSION
              </h2>
              <p className="text-white letter-spacing-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CaseStudy;
