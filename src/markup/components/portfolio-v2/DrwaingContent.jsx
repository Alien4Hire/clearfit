import React from "react";
const DrawingContent = () => {
  return (
    <div className="d-none d-md-block">
      <div className="d-flex flex-row gap-4 align-items-center justify-content-between ">
        <div className="d-flex flex-column gap-4">
          <img
            className="drwaing_images"
            src={require("../../../assets/images/portfoliov2/first.png")}
          />
          <img
            className="drwaing_images"
            src={require("../../../assets/images/portfoliov2/first.png")}
          />
        </div>
        <div className="d-flex flex-column">
          <img
            className="drawing_center_image"
            src={require("../../../assets/images/portfoliov2/third.png")}
          />
        </div>
        <div className="d-flex flex-column gap-4">
          <img
            className="drwaing_images"
            src={require("../../../assets/images/portfoliov2/fourth.png")}
          />
          <img
            className="drwaing_images"
            src={require("../../../assets/images/portfoliov2/fifth.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default DrawingContent;
