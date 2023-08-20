import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext_cormorant">About Us</h1>
        <img src={images.spoon} alt="" className="spoon__img" />
        <p className="p__opensans">
          We take pride in sourcing the freshest ingredients to craft dishes
          that burst with natural flavors.{" "}
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="" />
      </div>

    
      <div className="app__aboutus-content_history">
        <h1 className="headtext_cormorant">Our History</h1>
        <img src={images.spoon} alt="" className="spoon__img" />
        <p className="p__opensans">
        The menu, a historical love letter, pays homage to ancient civilizations, medieval feasts, and Renaissance delicacies.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
