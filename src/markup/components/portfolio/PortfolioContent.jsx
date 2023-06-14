import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Paginator } from "../../../utils/Paginator";
import PrevArrow from "../common/PrevArrow";
import NextArrow from "../common/NextArrow";

const PortfolioContent = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [content, setContent] = useState([]);
  const [prevPage, setPrevPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);
  const [pageSize, setPageSize] = useState(4);

  const data = [
    {
      title: "DiversiTea",
      image: require("../../../assets/images/portfolios/diversitea.png"),
      links: ["ecommerce", "lifestyle", "business", "web"],
    },
    {
      title: "Angels Eyewear",
      image: require("../../../assets/images/portfolios/angelseyewear.png"),
      links: ["ecommerce", "lifestyle", "business", "web"],
    },

    {
      title: "CBus",
      image: require("../../../assets/images/portfolios/cbus.png"),
      links: ["ecommerce", " lifestyle", "business", "web"],
    },
    {
      title: "Pierre John-Louis",
      image: require("../../../assets/images/portfolios/furniture.png"),
      links: ["ecommerce", " lifestyle", "business", "web"],
    },
    {
      title: "Vohnt",
      image: require("../../../assets/images/portfolios/vohut.png"),
      links: ["ecommerce", " lifestyle", "business", "web"],
    },
    {
      title: "The Furniture Store",
      image: require("../../../assets/images/portfolios/john.png"),
      links: ["ecommerce", " lifestyle", "business", "web"],
    },
    {
      title: "Cooley",
      image: require("../../../assets/images/portfolios/thomas.png"),
      links: ["ecommerce", " lifestyle", "business", "web"],
    },
    {
      title: "Simplelearn",
      image: require("../../../assets/images/portfolios/simplelearn.png"),
      links: ["ecommerce", " lifestyle", "business", "web"],
    },
    {
      title: "Thomas George",
      image: require("../../../assets/images/portfolios/cooley.png"),
      links: ["ecommerce", " lifestyle", "business", "web"],
    },
    {
      title: "Virtual Employee",
      image: require("../../../assets/images/portfolios/virtualemployee.png"),
      links: ["ecommerce", " lifestyle", "business", "web"],
    },
    {
      title: "Jess Garage",
      image: require("../../../assets/images/portfolios/jessgeorge.png"),
      links: ["ecommerce", " lifestyle", "business", "web"],
    },
    {
      title: "One Of",
      image: require("../../../assets/images/portfolios/oneof.png"),
      links: ["ecommerce", " lifestyle", "business", "web"],
    },
  ];

  const handleResize = () => {
    if (window.innerWidth < 768) {
      let res = Paginator(data, 1, pageSize);
      setNextPage(res?.next_page);
      setPrevPage(res?.pre_page);
      setContent(res);
    } else {
      let resposne = Paginator(data, 1, data?.length);
      setContent(resposne);
    }
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    return () => window.removeEventListener("resize", handleResize);
  }, [window]);

  const handlePaginator = (pageNumber) => {
    let res = Paginator(data, pageNumber, pageSize);
    setNextPage(res?.next_page);
    setPrevPage(res?.pre_page);
    setContent(res);
  };

  return (
    <div>
      <div className=" portfolio_border bg_primary_custom_color ">
        <Container>
          <Row>
            <Col>
              <div className="portfolio_content_height text-white text-center letter-spacing d-flex gap-4 mx-auto justify-content-center ">
                <a
                  href="#"
                  className="text-decoration-none text-white font-size-16"
                >
                  WEB DEVELOPMENT
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-white font-size-16"
                >
                  ECOMMERCE
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-white font-size-16"
                >
                  RESPONSIVE
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-white font-size-16"
                >
                  SEO
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg_white_grey">
        <Container className="p-4">
          <Row>
            {content?.data?.map((item) => {
              return (
                <Col col={12} lg={4} sm={12} md={6} xs={12}>
                  <div className="d-flex justify-content-center gap-4">
                    <div className="portfolio_cards">
                      <div class="image-container">
                        <img src={item.image} alt="Not found..." />
                        <div class="text-overlay">
                          <h2>{item?.title}</h2>
                        </div>
                      </div>
                      <div className="below_cards_portfolio d-flex justify-content-between">
                        {item?.links?.map((v, index) => {
                          let appendClass = "";
                          if (index + 1 != 1) {
                            appendClass = "after_content";
                          }
                          return (
                            <a
                              href="#"
                              className={`text-decoration-none color_primary font-size-12 letter-spacing ${appendClass}`}
                            >
                              {v}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <div className="d-flex justify-content-between  d-block d-md-none">
            <div
              className="d-flex align-items-center gap-2"
              onClick={() => handlePaginator(prevPage)}
            >
              <PrevArrow />
              <span className="letter-spacing-2">last page</span>
            </div>
            <div
              className="d-flex align-items-center gap-2"
              onClick={() => handlePaginator(nextPage)}
            >
              <span className="letter-spacing-2">next page</span>
              <NextArrow />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioContent;
