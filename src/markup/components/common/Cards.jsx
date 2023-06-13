import React from "react";

const Cards = ({ source, text }) => {
  return (
    <div className="card-group d-flex align-items-center">
      <img
        className="object-fit-contain d-none d-md-block"
        src={source}
        alt="Not Found..."
      />
      <span className="fw-bold text-white letter-spacing-2">{text}</span>
    </div>
  );
};
export default Cards;
