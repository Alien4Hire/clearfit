import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../common/Cards";

const CardsSection = () => {
  return (
    <div
      className=" bg-white d-flex justify-content-center align-items-center padding_container"
      style={{ minHeight: "500px" }}
    >
      <Container>
        <Row className="max-width-custom mx-auto">
          <Col className="text-black text-center d-flex flex-column gap-4 ">
            <h3 className="h1 text-uppercase letter-spacing">
              I wanted My Teams to Be
              <span className="text-uppercase text_gradient"> GOOD.</span>
            </h3>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  fw-normal  font-size-14 ">
                As a former college wrestler, I thought about how sports coaches
                build legendary teams
              </span>
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  fw-normal  font-size-14">
                But it wasn’t till I started looking at combat teams like Army
                Special Forces and Navy SEALs that everything came together for
                me. I saw the missing elements that Agile couldn’t provide.
              </span>
            </div>

            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2 fw-normal  font-size-14">
                In combat, their very lives depended on getting teamwork right.
              </span>
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2 fw-normal  font-size-18">
                I dug in to see, specifically, what made them so good at what
                they did. And what it came down to was two things:
              </span>
            </div>

            <Row className="d-flex flex-row gap-5">
              <Col className="w-100 d-flex gap-4 justify-content-sm-center justify-content-between flex-nowrap ">
                <Cards
                  source={require("../../../assets/images/about-us/thinking_man.png")}
                  text={"A belief in their mission."}
                />

                <Cards
                  source={require("../../../assets/images/about-us/power.png")}
                  text={"A belief that, as a team they were invincible."}
                />
              </Col>
            </Row>

            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2 fw-normal  font-size-18">
                And because doctrine isn’t just theory, they practiced down to
                the minute detail.
              </span>
            </div>

            <Row className="d-flex flex-row gap-5">
              <Col className="w-100 d-flex gap-4 justify-content-sm-center justify-content-between flex-nowrap ">
                <Cards
                  source={require("../../../assets/images/about-us/hand.png")}
                  text={"Other features: Strong leadership plus autonomy."}
                />

                <Cards
                  source={require("../../../assets/images/about-us/upgrade.png")}
                  text={
                    "Every individual is granted the power to move the mission forward"
                  }
                />
              </Col>
            </Row>

            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  fw-normal  font-size-18 ">
                Too many software development companies are A.I.N.O. (Agile In
                Name Only)
              </span>
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  fw-normal  font-size-18 ">
                They’re the dark side of Agile
              </span>
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  fw-normal  font-size-18 ">
                I’m just being real with you.
              </span>
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  fw-normal  font-size-18 ">
                I set about to build my teams differently.
              </span>
            </div>

            <Row className="d-flex flex-row gap-5">
              <Col className="w-100 d-flex gap-4 justify-content-sm-center justify-content-between flex-nowrap ">
                <Cards
                  source={require("../../../assets/images/about-us/settings.png")}
                  text={"Agile theory."}
                />

                <Cards
                  source={require("../../../assets/images/about-us/social.png")}
                  text={"Special forces mindset. "}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardsSection;
