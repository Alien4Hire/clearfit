import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const HomeCardsSection = () => {
  return (
    <div>
      <Container className="d-flex justify-content-center flex-column padding_container_cards gap-5 ">
        <Row className=" text-white d-flex gap-4 flex-row justify-content-center">
          <Col lg={5} col={12}>
            <div className="d-flex flex-column p-5 justify-content-center align-items-center gap-4 card_width bg_primary_custom_color cards_border ">
              <span className="font-sz-32 text-uppercase text-center">
                i’M mAXED oUT
              </span>
              <div className="h5 text-center">
                I need someone&nbsp;
                <span className="fw-bold text_gradient fw-normal text-uppercase">
                  good.
                </span>
                &nbsp; to do our heavy lifting.
              </div>
              <span className="text-center fw-light fs-20 ">
                (And I Don’t Have Time to Find Them)
              </span>
            </div>
          </Col>
          <Col lg={5} col={12}>
            <div className="d-flex flex-column p-5 card_width justify-content-center align-items-center gap-4 bg_primary_custom_color cards_border ">
              <span className="font-sz-32 text-uppercase text-center">
                I Don’t Know What I Need.
              </span>
              <div className="h5 text-center">
                I need &nbsp;
                <span className="fw-bold text_gradient fw-normal text-uppercase">
                  good.
                </span>
                &nbsp; advice.
              </div>
              <span className="text-center fw-light  fs-20 ">
                (And I Don’t Know Who to Trust)
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <span className="text-uppercase fw-normal display-6 text-center text-black">
              good code{" "}
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeCardsSection;
