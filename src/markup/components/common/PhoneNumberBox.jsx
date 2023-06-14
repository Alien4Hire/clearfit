import React from "react";
import { Link } from "react-router-dom";

const PhoneNumberBox = ({ className = "text-white" }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <i className="far fa-phone orange_color"></i>
      <Link
        to={"tel:8333664285"}
        className={` text-decoration-none  fw-normal  text-uppercase ${className}`}
      >
        (833) 366-4285
      </Link>
    </div>
  );
};

export default PhoneNumberBox;
