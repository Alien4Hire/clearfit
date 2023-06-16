import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillPodsBox from "../common/SkillPodsBox";
import HexagonBox from "../common/HexagonBox";
import BlackPolyGon from "../common/BlackPolyGon";
import ProjectBox from "./ProjectBox";
import ToolkitPolyGon from "../common/ToolKitPolyGon";

import DrawingSlider from "./DrwaingSlider";
import DrawingContent from "./DrwaingContent";
import ProjectGalleryContent from "./ProjectGalleryContent";
import ProjectGallerySlider from "./ProjectGallerySlider";

const CompanyOverViewSection = () => {
  const list = [
    "e-Commerce",
    "Custom HTML",
    "UX/UI",
    "Project Management",
    "User",
    "Interface",
    "Lorem",
    "Ipsum",
  ];
  const images = [
    'require("../../../assets/images/portfoliov2/first.png")',
    'require("../../../assets/images/portfoliov2/second.png")',
    'require("../../../assets/images/portfoliov2/third.png")',
    'require("../../../assets/images/portfoliov2/fourth.png")',
    'require("../../../assets/images/portfoliov2/fifth.png")',
  ];
  return (
    <div className="silver_grey_background">
      <Container className="p-4">
        <Row className=" gx-5">
          <Col lg={8} className="column_padding">
            <div className="d-flex flex-column gap-4">
              <h3 className="letter-spacing-2 h2 display-6 text-uppercase fw-normal">
                Company Overview
              </h3>
              <span className="letter-spacing-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <DrawingSlider />
              <DrawingContent />
              <h3 className="letter-spacing-2 h2 display-6 text-uppercase fw-normal">
                project overview
              </h3>
              <span className="letter-spacing-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
                pretium lectus quam id leo in. Lobortis elementum nibh tellus
                molestie nunc non blandit massa enim. Vestibulum lectus mauris
                ultrices eros in cursus turpis massa. Gravida in fermentum et
                sollicitudin ac orci. Risus quis varius quam quisque. Dui nunc
                mattis enim ut tellus elementum sagittis vitae. Donec pretium
                vulputate sapien nec sagittis aliquam malesuada. Leo vel orci
              </span>
              <span className="letter-spacing-2 text-justify">
                porta non pulvinar neque laoreet suspendisse. Tortor dignissim
                convallis aenean et. Sit amet mauris commodo quis imperdiet
                massa tincidunt nunc. Volutpat diam ut venenatis tellus in.
                Risus ultricies tristique nulla aliquet enim tortor. Pretium
                viverra suspendisse potenti nullam ac tortor vitae purus. In
                arcu cursus euismod quis viverra nibh cras. Enim nec dui nunc
                mattis. Volutpat commodo sed egestas egestas fringilla phasellus
                faucibus. Velit ut tortor pretium viverra. Aliquam purus sit
                amet luctus venenatis.
              </span>
            </div>
          </Col>
          <Col lg={4}>
            <div className="side_bar_wrapper white_background">
              <div className="sidebar_header fw-bold text-white fs-30 d-flex justify-content-center p-1">
                <SkillPodsBox />
              </div>
              <div className="d-flex align-items-center justify-content-center  ">
                <div className="d-flex gap-4 flex-column flex-wrap ">
                  <BlackPolyGon
                    source={require("../../../assets/images/portfoliov2/html_eng.svg")}
                    text="HTML ENGINEERS"
                    className="side_bar_hexgon"
                    textClass="text-white letter-spacing-2 fs-8px span_width"
                  />
                  <BlackPolyGon
                    source={require("../../../assets/images/portfoliov2/ux_design_white.svg")}
                    text="UX DESIGNERS"
                    className="side_bar_hexgon"
                    textClass="text-white letter-spacing-2 fs-8px span_width"
                  />
                </div>
                <BlackPolyGon
                  source={require("../../../assets/images/portfoliov2/wordpress.svg")}
                  text="WORDPRESS DEVELOPERS"
                  className="side_bar_hexgon"
                  textClass="text-white letter-spacing-2 fs-8px span_width"
                />
              </div>
            </div>

            {/* Project box */}
            <ProjectBox />

            <div className="side_bar_wrapper white_background">
              <div className="sidebar_header fw-bold text-white fs-30 d-flex justify-content-center p-1">
                <span className=" fs-20 letter-spacing-2 fw-normal text-uppercase">
                  pROJECT tOOLKIT
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-start p-4  ">
                <div className="d-flex flex-wrap justify-content-center">
                  <div className="d-flex flex-row ">
                    <ToolkitPolyGon
                      polygonClass="polygon_box_toolkit"
                      className="toolkit_icon"
                      source={require("../../../assets/images/portfoliov2/UX-Vs-UI.svg")}
                    />
                    <ToolkitPolyGon
                      polygonClass="polygon_box_toolkit"
                      className="toolkit_icon"
                      source={require("../../../assets/images/portfoliov2/aws_logo_smile.svg")}
                    />
                    <ToolkitPolyGon
                      polygonClass="polygon_box_toolkit"
                      className="toolkit_icon"
                      source={require("../../../assets/images/portfoliov2/xd.svg")}
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <ToolkitPolyGon
                      polygonClass="polygon_box_toolkit"
                      className="toolkit_icon"
                      source={require("../../../assets/images/portfoliov2/woocommerce-logo.svg")}
                    />
                    <ToolkitPolyGon
                      polygonClass="polygon_box_toolkit"
                      className="toolkit_icon"
                      source={require("../../../assets/images/portfoliov2/WordPress_blue_logo.svg")}
                    />
                    <ToolkitPolyGon
                      polygonClass="polygon_box_toolkit"
                      className="toolkit_icon"
                      source={require("../../../assets/images/portfoliov2/web-development.svg")}
                    />
                    <ToolkitPolyGon
                      className="toolkit_icon"
                      polygonClass="polygon_box_toolkit"
                      source={require("../../../assets/images/portfoliov2/reaxtoraneg.svg")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className="side_bar_wrapper white_background ">
              <div className="sidebar_header fw-bold text-white fs-30 d-flex justify-content-center p-1">
                <span className=" fs-20 letter-spacing-2 fw-normal text-uppercase">
                  pROJECT Gallery
                </span>
              </div>
              {/* <ProjectGallerySlider /> */}
              <ProjectGalleryContent />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CompanyOverViewSection;
