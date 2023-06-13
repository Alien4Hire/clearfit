import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const links = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Pricing",
    "Contact",
    "News",
    "Technologies",
    "Case Study",
    "Terms",
  ];
  return (
    <div className="bg_primary_custom_color">
      <div className="mx-auto padding_container bg_primary_custom_color text-white container ">
        <div class="row d-flex gap-5 flex-column flex-lg-row flex-nowrap padding-10">
          <div class="col-12 col-lg-4">
            <div
              className="d-flex flex-column gap-4 max_width_col 
"
            >
              <h2 className="text-white letter-spacing-2">ClearFit</h2>
              <span className="letter-spacing-2">
                Clear Fit software consulting can help your business over the
                finish line.Any software project or cloud architecture we can
                handle it with ease.
              </span>
              <div className="d-flex align-items-center gap-2">
                <i className="far fa-envelope orange_color"></i>
                <Link
                  to={"mailto:info@webmail.com"}
                  className="text-white text-decoration-none fw-normal text-uppercase"
                >
                  info@clearfitllc.com
                </Link>
              </div>

              <div className="d-flex align-items-center gap-2">
                <i className="far fa-phone orange_color"></i>
                <Link
                  to={"tel:8333664285"}
                  className="text-white text-decoration-none fw-normal  text-uppercase"
                >
                  (833) 366-4285
                </Link>
              </div>
            </div>
          </div>
          <div class="col-12  col-lg-4 ">
            <div className="d-flex flex-column gap-4 max_width_col">
              <div>
                <h5 className="letter-spacing-2">SUBSCRIBE TO OUR BLOG</h5>
                <hr className="hr_line"></hr>
              </div>
              <input
                type="email"
                placeholder="Enter Email..."
                className="email"
              />
              <div>
                <h4 className="letter-spacing-2">GETTING HERE</h4>
                <hr className="hr_line"></hr>
                <span>+ VIEW MAP</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div className="d-flex flex-column gap-3 links_width_col">
              <div>
                <h5 className="letter-spacing-2">Links</h5>
                <hr className="hr_line"></hr>
              </div>
              <div className="d-flex flex-wrap justify-content-start gap-2">
                {links.map((item, index) => {
                  return (
                    <a
                      className="links_width mb-3 text-white letter-spacing-1 text-uppercase"
                      href="#"
                      key={index}
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
