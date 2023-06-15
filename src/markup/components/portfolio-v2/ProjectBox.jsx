import React from "react";

const ProjectBox = () => {
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
  return (
    <div className="side_bar_wrapper">
      <div className="sidebar_header fw-bold text-white fs-30 d-flex justify-content-center p-1">
        <span className=" fs-20 letter-spacing-2 fw-normal text-uppercase">
          PROJECT SCOPE
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-start p-4  ">
        <div className="d-flex gap-2 flex-column">
          {list.map((item) => {
            return (
              <div className="d-flex gap-2 align-items-center">
                <img
                  style={{
                    height: "20px",
                    width: "20px",
                    objectFit: "contain",
                  }}
                  src={require("../../../assets/images/portfoliov2/points.svg")}
                />
                <span className="letter-spacing-2 fw-normal">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
