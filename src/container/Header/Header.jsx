import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";
const Header = () => (
  <div className="app__header app__wrapper seection__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title=" " />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Embark on a journey of taste as you delve into our diverse and carefully
        curated menu, designed to tantalize your palate and satisfy your
        cravings.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
