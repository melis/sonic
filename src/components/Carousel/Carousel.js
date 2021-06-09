import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ imgs }) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {imgs.map((el) => (
        <img
          alt=""
          key={el.id}
          src={"https://test2.sionic.ru/" + el.image_url}
        />
      ))}
    </Slider>
  );
}
