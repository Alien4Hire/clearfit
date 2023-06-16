import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const PortfolioBanner = () => {
  return (
    <div className="bg_primary_custom_color">
      <Container>
        <Row>
          <Col>
            <div className="portfolio_height display-6 text-white text-center letter-spacing-2">
              PORTFOLIO
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PortfolioBanner;
