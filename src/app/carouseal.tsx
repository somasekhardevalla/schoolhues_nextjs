"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import Image from 'next/image';
import "react-multi-carousel/lib/styles.css";

function Carouseal() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className='w-3/4 ml-60 mb-5 '>
      <Carousel responsive={responsive}>
  <div className='bg-gray-50 mr-5 h-auto rounded-2xl border-solid border border-gray-200'>
       <div className='w-full h-60'>
        <Image  height="250" width="400" alt="logo" src="/crousal.jpg" className="rounded-tl-2xl rounded-tr-2xl" ></Image>
       </div>
       <div className="h-36"></div>
  </div>

  <div className='bg-gray-50 mr-5 h-auto rounded-2xl border border-solid border-gray-200'>
       <div className='w-full h-60'>
        <Image  height="250" width="400" alt="logo" src="/crousal.jpg" className="rounded-tl-2xl rounded-tr-2xl" ></Image>
       </div>
       <div className="h-36"></div>
  </div>
  <div className='bg-gray-50 mr-5 h-auto rounded-2xl border border-solid border-gray-200'>
       <div className='w-full h-60'>
        <Image  height="250" width="400" alt="logo" src="/crousal.jpg" className="rounded-tl-2xl rounded-tr-2xl" ></Image>
       </div>
       <div className="h-36"></div>
       

  </div>
  <div className='bg-gray-50 mr-5 h-auto rounded-2xl border border-solid border-gray-200'>
       <div className='w-full h-60'>
        <Image  height="250" width="400" alt="logo" src="/crousal.jpg" className="rounded-tl-2xl rounded-tr-2xl2" ></Image>
       </div>
       <div className="h-36"></div>
       

  </div>
  
</Carousel>
    </div>
  )
}

export default Carouseal
