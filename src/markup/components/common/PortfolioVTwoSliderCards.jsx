import React from "react";

const PortfolioVTwoSliderCards = () => {
  return (
    <div className="text_cards_portfolio">
      <div className="image_wrapper">
        <img
          src={require("../../../assets/images/portfoliov2/cover_image.png")}
        />
      </div>
      <div className="d-flex flex-column gap-2 p-4">
        <b className="fs_size letter-spacing-2 text-uppercase  text-black">
          Angels Eyewear
        </b>
        <span className="fs_size_10 letter-spacing-2 text-uppercase text-black">
          Risus ultricies tristique nulla aliquet enim tortor. Pretium viverra
          suspendisse potenti nullam ac tortor vitae purus. In arcu cursus
          euismod quis viverra nibh cras. Enim nec dui nunc mattis. Volutpat
          commodo.
        </span>
        <span className="fs_size letter-spacing-2 fw-bolder text-black">
          read more {">>"}
        </span>
        <hr className="w-100"></hr>
        <div className="d-flex gap-2">
          <div className="fs_size_10 text_primary">JULY 17, 2021</div>
          <div className="fs_size_10 text_primary">12:08 PM</div>
          <div className="fs_size_10 text_primary">JMAYNARD</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioVTwoSliderCards;
