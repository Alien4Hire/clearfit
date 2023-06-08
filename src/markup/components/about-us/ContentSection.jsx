import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContentSection = () => {
  return (
    <div className="black_dots_bg d-flex justify-content-center align-items-center padding_container">
      <Container>
        <Row className="max-width-custom mx-auto">
          <Col className="text-white text-center d-flex flex-column gap-4 ">
            <h3 className="h1 text-uppercase letter-spacing">
              EVERYONE wANTED TO fIX THE pROBLEM.
            </h3>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  font-normal  ">
                Waterfall management gave way to Agile and Scrum.
              </span>
              <span className="letter-spacing-2  font-normal">
                Productivity improved...But Quality often suffered
              </span>
              <span className="letter-spacing-2  font-normal">
                So managers, engineers—and clients too—gave a nod to the
                philosophy, but then went on with business as usual, usually at
                great cost.
              </span>
            </div>
            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  font-normal">
                Teams were as non-functioning as the software they produced.
              </span>
              <span className="letter-spacing-2  font-normal">
                Project estimates were a black box. No transparency.
              </span>
              <span className="letter-spacing-2  font-normal">
                Clients were in the dark about what to tell stakeholders
              </span>
              <span className=" letter-spacing-2  font-normal">
                Hard feelings. Defensive posturing. Finger-pointing
              </span>
            </div>

            <div className="d-flex flex-column gap-1">
              <span className="letter-spacing-2  font-normal">
                I started ClearFit after a lot of my colleague developers kept
                coming to me for help
              </span>
              <span className="letter-spacing-2  font-normal">
                And I got overwhelmed with the amount of work.
              </span>
              <span className="letter-spacing-2  font-normal">
                But I didn’t want to simply duplicate the problems I was seeing.
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentSection;
