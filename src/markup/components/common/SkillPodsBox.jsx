import React from "react";

const SkillPodsBox = ({ h = "auto" }) => {
  return (
    <div className="d-flex gap-1 ">
      <img
        src={require("../../../assets/images/about-us/skills.svg")}
        alt="Not found"
        width={"auto"}
        className="object-contain"
        style={{ height: h }}
      />
      <span className="text-uppercase">skillpods</span>
    </div>
  );
};

export default SkillPodsBox;
