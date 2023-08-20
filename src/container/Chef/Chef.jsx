import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <div className="heading">
        <SubHeading title="Chef's Word" />
      </div>
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
          Step into a world where flavors harmonize in a symphony of culinary delights.
          </p>
        </div>
        <p className="p__opensans fix">With every dish, our  artistry comes to life, weaving together tastes, textures, and aromas that resonate with the senses.</p>
      </div>

<div className="app__chef-sign">
<p>Kevin Luo</p>
<p className="p__opensans">Chef & Founder</p>
<img src={images.sign}  alt='sign'/>
</div>

    </div>
  </div>
);

export default Chef;
