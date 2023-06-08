import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="bg_responsive">
      <div className="bg-left_to_right d-flex align-items-center">
        <Container>
          <Row className="custom_width p-4 ">
            <Col className="d-flex gap-4 flex-column">
              <div className="d-flex flex-column">
                <h2 className="fw-bold h1 text-uppercase">
                  So who is Jason C. Maynard?
                </h2>
                <p className="fw-normal h2">
                  And what makes his SkillPods so
                  <span className="text-uppercase text_gradient"> good</span>?
                </p>
              </div>
              <div className="d-flex flex-column gap-4">
                <p className="h6">
                  Jason C. Maynard is the founder of ClearFit, LLC, a company
                  that assembles elite software development teams for both
                  enterprise companies and aggressive smaller companies
                </p>
                <p className="h6">
                  His teams are consistently stacked with talent and discipline,
                  which allows them to operate faster and better than
                  traditional software development teams.
                </p>
                <p className="font-normal">
                  If you are looking for a team that can get your project done
                  quickly and efficiently, SkillPods may be the right choice for
                  you
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
                    contact jason
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

export default HeroSection;
