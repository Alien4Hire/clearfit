import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Star from "../common/Star";

const HeroBanner = () => {
  const rating = ["Very bad", "Poor", "Ok", "Good", "Excellent"];

  return (
    <div className="bg_primary_custom_color main_wrapper portfolio_border">
      <Container>
        <Row className="gy-5 d-flex gap-4 justify-content-between">
          <Col lg={5} md={12}>
            <div className="bg_white left_card mx-auto">
              <div className="mx-auto d-flex justify-content-between flex-column text-black inside_container_width gap-2">
                <div className="d-flex gap-4 justify-content-between align-items-center">
                  <span className="fw-bolder letter-spacing-2 fs-16px">
                    Project Name:
                  </span>
                  <div className="small_wrapper">
                    <span className="text-uppercase letter-spacing-2 fs-14px">
                      Pierre Jean-Louis
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-4 justify-content-between  align-items-center">
                  <span className="fw-bolder letter-spacing-2 fs-16px">
                    Date:
                  </span>
                  <div className="small_wrapper">
                    <span className="text-uppercase letter-spacing-2 fs-14px">
                      July 17, 2021
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-4 justify-content-between  align-items-center">
                  <span className="fw-bolder letter-spacing-2 fs-14px">
                    Author:
                  </span>
                  <div className="small_wrapper">
                    <span className="text-uppercase letter-spacing-2 fs-14px">
                      Jason Maynard
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-4 justify-content-between x  align-items-center">
                  <span className="fw-bolder letter-spacing-2 fs-16px">
                    Keyword:
                  </span>
                  <div className="small_wrapper">
                    <span className="text-uppercase letter-spacing-2 fs-14px">
                      eCommerce, Lifestyle
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-4 justify-content-between   align-items-center">
                  <span className="fw-bolder letter-spacing-2 fs-16px">
                    CATEGORIES:
                  </span>
                  <div className="small_wrapper">
                    <span className="text-uppercase letter-spacing-2 fs-14px">
                      wEB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5} md={12} className="d-flex align-items-center text-white ">
            <div className=" d-flex flex-column gap-2 right_card">
              <div className="d-flex">
                {rating.map(() => {
                  return <Star />;
                })}
              </div>
              <span className="letter-spacing-2 h4 text-uppercase">
                Amazing Team
              </span>
              <span className="letter-spacing-2 fs-12">
                Thank you clear fit tech for this amazing experience. I made a
                mobile app for my small business employees… so flexible to work
                with.
              </span>
              <div className="d-flex gap-2 align-items-center">
                <b className="letter-spacing-2">Adam Rosen</b>
                <span className="fs-12 text_gradient letter-spacing-2">
                  Founder, RosenUS
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;
