import React from "react";
import "./Testimonials.css";
import back_icon from "../../assets/back-icon.png";
import next_icon from "../../assets/next-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <img src={back_icon} alt="back button" className="back-btn" />
        <img src={next_icon} alt="next button" className="next-btn" />
        <div className="slider"></div>
      </div>
    </>
  );
};

export default Testimonials;
