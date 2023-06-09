import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CopyRight = () => {
  return (
    <div className="bg_black d-flex justify-content-center align-items-center ">
      <Container>
        <Row className="max-width-custom mx-auto ">
          <Col className=" d-flex flex-md-row flex-column gap-4 align-items-center justify-content-center ">
            <span className="text-center p-2 copy_right_color letter-spacing-2">
              © 2022 ClearFit LLC
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CopyRight;
