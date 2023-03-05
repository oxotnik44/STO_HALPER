import React, { useState } from "react";
import { SliderBox } from "react-native-image-slider-box";
const Carousel: React.FC = () => {
  const imgCarousel = [
    require("./../../assets/imgCarousel.png"),
    require("./../../assets/imgCarousel.png"),
    require("./../../assets/imgCarousel.png"),
    require("./../../assets/imgCarousel.png"),
    require("./../../assets/imgCarousel.png"),
  ];
  return <SliderBox images = {imgCarousel}/>;
};
export default Carousel
