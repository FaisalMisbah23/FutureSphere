import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './styles.css';

// import required modules

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 3,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 13,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className="mySwiper items-center"
      >
        <SwiperSlide>
        <div className="relative ">
        <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:rounded-[90%]  bg-opacity-90 duration-300">
          <h1 className="tracking-wider text-indigo-300 text-semibold">John Wick</h1>
          <p className="mx-auto text-gray-500">CEO FutureSphere</p>
          <span className='flex items-center gap-2 mt-2'>
            <a href=""><img src="/about/Facebook.png" alt="" /></a>
            <a href=""><img src="/about/Linkedin.png" alt="" /></a>
            <a href=""><img src="/about/Twitter.png" alt="" /></a>
        </span>
        </a>
        <a href="#" className="relative">
          <div className="flex flex-wrap content-center">
          <img src="/about/Member Image.png" alt="" />{" "}
          </div>
        </a>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative ">
        <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:rounded-[90%] bg-opacity-90 duration-300">
          <h1 className="tracking-wider text-indigo-300 text-semibold">John Wick</h1>
          <p className="mx-auto text-gray-500">CEO FutureSphere</p>
          <span className='flex items-center gap-2 mt-2'>
            <a href=""><img src="/about/Facebook.png" alt="" /></a>
            <a href=""><img src="/about/Linkedin.png" alt="" /></a>
            <a href=""><img src="/about/Twitter.png" alt="" /></a>
        </span>
        </a>
        <a href="#" className="relative">
          <div className="flex flex-wrap content-center">
          <img src="/about/Member Image-1.png" alt="" />{" "}
          </div>
        </a>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative ">
        <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:rounded-[90%] bg-opacity-90 duration-300">
          <h1 className="tracking-wider text-indigo-300 text-semibold">John Wick</h1>
          <p className="mx-auto text-gray-500">CEO FutureSphere</p>
          <span className='flex items-center gap-2 mt-2'>
            <a href=""><img src="/about/Facebook.png" alt="" /></a>
            <a href=""><img src="/about/Linkedin.png" alt="" /></a>
            <a href=""><img src="/about/Twitter.png" alt="" /></a>
        </span>
        </a>
        <a href="#" className="relative">
          <div className="flex flex-wrap content-center">
          <img src="/about/Member Image-2.png" alt="" />{" "}
          </div>
        </a>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative ">
        <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:rounded-[90%] bg-opacity-90 duration-300">
          <h1 className="tracking-wider text-indigo-300 text-semibold">John Wick</h1>
          <p className="mx-auto text-gray-500">CEO FutureSphere</p>
          <span className='flex items-center gap-2 mt-2'>
            <a href=""><img src="/about/Facebook.png" alt="" /></a>
            <a href=""><img src="/about/Linkedin.png" alt="" /></a>
            <a href=""><img src="/about/Twitter.png" alt="" /></a>
        </span>
        </a>
        <a href="#" className="relative">
          <div className="flex flex-wrap content-center">
          <img src="/about/Member Image-3.png" alt="" />{" "}
          </div>
        </a>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative ">
        <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:rounded-[90%] bg-opacity-90 duration-300">
          <h1 className="tracking-wider text-indigo-300 text-semibold">John Wick</h1>
          <p className="mx-auto text-gray-500">CEO FutureSphere</p>
          <span className='flex items-center gap-2 mt-2'>
            <a href=""><img src="/about/Facebook.png" alt="" /></a>
            <a href=""><img src="/about/Linkedin.png" alt="" /></a>
            <a href=""><img src="/about/Twitter.png" alt="" /></a>
        </span>
        </a>
        <a href="#" className="relative">
          <div className="flex flex-wrap content-center">
          <img src="/about/Member Image-4.png" alt="" />{" "}
          </div>
        </a>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative ">
        <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:rounded-[90%] bg-opacity-90 duration-300">
          <h1 className="tracking-wider text-indigo-300 text-semibold">John Wick</h1>
          <p className="mx-auto text-gray-500">CEO FutureSphere</p>
          <span className='flex items-center gap-2 mt-2'>
            <a href=""><img src="/about/Facebook.png" alt="" /></a>
            <a href=""><img src="/about/Linkedin.png" alt="" /></a>
            <a href=""><img src="/about/Twitter.png" alt="" /></a>
        </span>
        </a>
        <a href="#" className="relative">
          <div className="flex flex-wrap content-center">
          <img src="/about/Member Image-5.png" alt="" />{" "}
          </div>
        </a>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative ">
        <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:rounded-[90%] bg-opacity-90 duration-300">
          <h1 className="tracking-wider text-indigo-300 text-semibold">John Wick</h1>
          <p className="mx-auto text-gray-500">CEO FutureSphere</p>
          <span className='flex items-center gap-2 mt-2'>
            <a href=""><img src="/about/Facebook.png" alt="" /></a>
            <a href=""><img src="/about/Linkedin.png" alt="" /></a>
            <a href=""><img src="/about/Twitter.png" alt="" /></a>
        </span>
        </a>
        <a href="#" className="relative">
          <div className="flex flex-wrap content-center">
          <img src="/about/Member Image-6.png" alt="" />{" "}
          </div>
        </a>
      </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
