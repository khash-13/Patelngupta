"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselProps } from "@/lib/types";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";

const Carousel: React.FC<CarouselProps> = ({
  children,
  infinite = true,
  autoplay = false,
  autoplaySpeed = 2000,
  pauseOnHover = true,
  slidesToShow = 1,
  arrows = false,
  dots = false,
  className,
}) => {
  const settings = {
    dots: dots,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    adaptiveHeight: true,
    infinite: infinite,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: pauseOnHover,
    slidesToShow: slidesToShow,
    arrows: arrows,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: arrows,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 970,
        settings: {
          arrows: arrows,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          arrows: arrows || false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          arrows: arrows || false,
          slidesToShow: 1,
        },
      },
    ],
    // centerPadding: "60px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider
        {...settings}
        // cursor-grab active:cursor-grabbing
        className={`${className} ${arrows && "py-2"}`}
      >
        {children}
      </Slider>
    </>
  );
};

export default Carousel;

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="group absolute -bottom-10 left-0 z-50 p-2 rounded-full shadow-md backdrop-blur-md border cursor-pointer hover:shadow-lg ease-in-out duration-200"
    >
      <IoArrowBackSharp
        size={25}
        className="group-hover:scale-110 group-active:-translate-x-1 ease-in-out duration-200"
      />
    </div>
  );
};
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="group absolute -bottom-10 right-0 z-50 p-2 rounded-full shadow-md backdrop-blur-md border cursor-pointer hover:shadow-lg ease-in-out duration-200"
    >
      <IoArrowForwardSharp
        size={25}
        className="group-hover:scale-110 group-active:translate-x-1 ease-in-out duration-200"
      />
    </div>
  );
};
