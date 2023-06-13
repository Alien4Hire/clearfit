import React from "react";
import { Row, Col } from "react-bootstrap";
import HexagonBox from "../common/HexagonBox";

const CrossFitContent = () => {
  return (
    <div className="bg_responsive_crossfit ">
      <div className="cross_fit_image">
        <div className="container-sm container-fluid padding_container_crossfit  ">
          <Row className="d-flex justify-content-between flex-lg-row flex-column-reverse">
            <Col lg={5} col={12} className="margin_bottom">
              <div className="d-flex align-items-center ">
                <div className="d-flex gap-4 flex-column flex-wrap ">
                  <HexagonBox
                    source={require("../../../assets/images/homepage/engineers.svg")}
                    text="ENGINEERS"
                    className="crossfit_images"
                  />
                  <HexagonBox
                    source={require("../../../assets/images/homepage/ui.svg")}
                    text="UX DESIGNERS"
                    className="crossfit_images"
                  />
                </div>
                <HexagonBox
                  source={require("../../../assets/images/homepage/developers.svg")}
                  text="DEVELOPERS"
                  className="crossfit_images"
                />
              </div>
            </Col>
            <Col lg={5} col={12} className="d-flex flex-column flex-col gap-4">
              <div>
                <p
                  className="display-6 text-uppercase letter-spacing-2 fw-light "
                  dir="rtl"
                >
                  I need my project done fast. and{" "}
                  <span className="fw-bold text_gradient fw-normal text-uppercase">
                    good
                  </span>
                </p>
              </div>
              <div className="d-flex flex-column  gap-2" dir="rtl">
                <span>Slow is smooth. Smooth is fast</span>
                <span>Say goodbye to miscommunication and false starts</span>
                <span>Say goodbye to churning your budget</span>
                <span>ClearFit keep you ahead of the curve</span>
                <span>Be fast. Be first</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CrossFitContent;
