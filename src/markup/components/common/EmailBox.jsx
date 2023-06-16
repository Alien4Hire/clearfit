import React from "react";
import { Link } from "react-router-dom";

const EmailBox = ({ className = "text-white" }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <i className="far fa-envelope orange_color"></i>
      <Link
        to={"mailto:info@webmail.com"}
        className={`${className}  text-decoration-none  fw-normal text-uppercase`}
      >
        info@clearfitllc.com
      </Link>
    </div>
  );
};

export default EmailBox;
