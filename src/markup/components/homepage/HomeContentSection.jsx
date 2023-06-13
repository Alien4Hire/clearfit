import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillPodsBox from "../common/SkillPodsBox";
import HexagonBox from "../common/HexagonBox";
const HomeContentSection = () => {
  return (
    <div className="bg_primary_custom_color">
      <Container>
        <Row>
          <Col>
            <div className="margin_top_hero_section d-flex flex-wrap flex-lg-nowrap justify-content-between justify-content-sm-center justify-content-lg-between gap-1">
              <HexagonBox
                source={require("../../../assets/images/homepage/react.svg")}
                text="React"
              />
              <HexagonBox
                source={require("../../../assets/images/homepage/node.svg")}
                text="Node"
              />
              <HexagonBox
                source={require("../../../assets/images/homepage/net.svg")}
                text=".Net"
              />
              <HexagonBox
                source={require("../../../assets/images/homepage/uxui.svg")}
                text="UX/UI"
              />
              <HexagonBox
                source={require("../../../assets/images/homepage/aws.svg")}
                text="AWS"
              />
              <HexagonBox
                source={require("../../../assets/images/homepage/native.svg")}
                text="React Native"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className=" text-white text-uppercase d-flex fs-24 text-left text-lg-center d-flex flex-column  flex-lg-row justify-content-center p-4 ">
              Get the DEV team you deserve with ClearFit &nbsp; <SkillPodsBox />
              . We're GOOD.
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeContentSection;
