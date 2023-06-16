import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar
      className="header_navbar_scroll"
      expand="lg"
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Container fluid className="px-sm-5 px-2">
        <Navbar.Brand href="#">
          <h2 className="font_Size_36 fw-bolde letter-spacing-2">ClearFit.</h2>
        </Navbar.Brand>

        <div className="d-flex flex-row gap-1">
          <div className="d-block d-lg-none">
            <ButtonSchedulCall />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <div className="d-flex gap-3 gap-lg-5 flex-column flex-lg-row p-2 align-items-center">
              <Nav.Link
                href="#action1"
                className="fw-normal letter-spacing-2 font-size-14"
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="fw-normal letter-spacing-2 font-size-14"
              >
                SERVICES
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="fw-normal letter-spacing-2 font-size-14"
              >
                PORTFOLIO
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="fw-normal letter-spacing-2 font-size-14"
              >
                BLOG
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="fw-normal letter-spacing-2 font-size-14"
              >
                CONTACT
              </Nav.Link>
              <div className="d-none d-lg-block">
                <ButtonSchedulCall />
              </div>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

const ButtonSchedulCall = () => {
  return (
    <button
      className="p-2 px-2 text-white fs-16px fw-semibold text-uppercase letter-spacing btn_schedule_call"
      onClick={() =>
        (window.location = "https://calendly.com/jaymaynard84/30-minute-live")
      }
      style={{
        background: "linear-gradient(96.73deg, #C1292A 27.66%, #D0631A 85.99%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.65)",
        borderRadius: "10px",
      }}
    >
      SCHEDULE A CALL
    </button>
  );
};
