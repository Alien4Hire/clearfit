import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HexagonBox from "../common/HexagonBox";
const HomeOverdueSection = () => {
  return (
    <div className="rounded_bars home_overdue_padding">
      <Container>
        <Row className="d-flex justify-content-end flex-row ">
          <Col lg={4} col={12} className="margin_bottom"></Col>
          <Col
            lg={8}
            col={12}
            md={10}
            className="d-flex flex-column flex-col gap-4 "
            dir="rtl"
          >
            <div>
              <p className="fs-30 text-uppercase letter-spacing-2 fw-normal ">
                You’ve tried the rest. Now try the best
              </p>
              <p className="fs-30 text-uppercase letter-spacing-2 fw-light fw-normal ">
                It’s time we talk about your software project
              </p>
            </div>
            <div>
              <span className="fs-30 text-uppercase letter-spacing-2 fw-light fw-normal ">
                It’s overdue
              </span>
            </div>
            <div className="fs-14 text-uppercase letter-spacing-2 fw-normal ">
              (Finally, get a good night’s sleep.)
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeOverdueSection;
