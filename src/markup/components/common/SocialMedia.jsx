import React from "react";
const SocialMedia = ({ className = "light_grey_color" }) => {
  return (
    <>
      <i class={`fab fa-twitter ${className}`}></i>
      <i class={`fab fa-facebook-square ${className} `}></i>
      <i class={`fab fa-linkedin ${className}`}></i>
      <i class={`fab fa-instagram ${className}`}></i>
    </>
  );
};
export default SocialMedia;
