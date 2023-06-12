import React from "react";

const HexagonBox = ({ className = "", text = "text", source = "" }) => {
  return (
    <div className="position-relative" style={{ maxWidth: "218px" }}>
      <img
        src={require("../../../assets/images/homepage/polygon.png")}
        alt="Not found..."
        className="polygon_size"
      />
      <div className="position-absolute d-flex justify-content-center align-items-center flex-column div_center  gap-2 ">
        <img src={source} className={`${className}`} alt="Not found..." />
        <span className=" text-xs fw-normal fs-14 ">{text}</span>
      </div>
    </div>
  );
};

export default HexagonBox;
