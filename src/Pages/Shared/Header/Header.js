import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import coffeehouse from "../../../images/coffeehouse.jpg";
import coffeehouse1 from "../../../images/coffeehouse1.jpg";
import "./Header.css";


const Header = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="slider">
       

      {/* Carousel */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={coffeehouse} alt="First slide" />
          <Carousel.Caption>
            <h1 className="card-title">"Coffee House"</h1>
            <h4 className="card-subtitle">"where memory made of"</h4>
            <p className="card-text">We Laugh || We Love || We Live</p>
            <p className="card-subtext">
              contact @0162222222 | Loation @Banani
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={coffeehouse1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="slidertext2">Home delivery available !!!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={coffeehouse1} alt="Third slide" />

          <Carousel.Caption>
            <p className="slidertext3">
              "you can find us on google map too.we hope you will love our
              place, will find peace and will not upset with our hospitality.if you want to order contact our shop number.enjoy life !!"
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
