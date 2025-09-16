import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/galley-1.png";
import gallery_2 from "../../assets/galley-2.png";
import gallery_3 from "../../assets/galley-3.png";
import gallery_4 from "../../assets/galley-4.png";

const Campus = () => {
  return (
    <div>
      <div className="campus">
        <div className="gallery">
          <img src={gallery_1} alt="Campus Gallery 1" />
          <img src={gallery_2} alt="Campus Gallery 2" />
          <img src={gallery_3} alt="Campus Gallery 3" />
          <img src={gallery_4} alt="Campus Gallery 4" />
        </div>
      </div>
    </div>
  );
};
export default Campus;