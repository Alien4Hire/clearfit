import React from "react";
const BlackPolyGon = ({
  className = "",
  text = "",
  source = "",
  textClass = "",
  polygonClass = "",
}) => {
  return (
    <div className="position-relative" style={{ maxWidth: "218px" }}>
      <img
        src={require("../../../assets/images/portfoliov2/blackPolygon.png")}
        alt="Not found..."
        className={`${polygonClass}`}
      />
      <div className="position-absolute d-flex justify-content-center align-items-center flex-column div_center  gap-2 ">
        <img src={source} className={`${className}`} alt="Not found..." />
        <span className={`  ${textClass}`}>{text}</span>
      </div>
    </div>
  );
};

export default BlackPolyGon;
