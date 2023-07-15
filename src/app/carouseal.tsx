"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import Image from 'next/image';
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faFolder} from'@fortawesome/free-regular-svg-icons'

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
       <div className='w-full h-52'>
        <Image  height="300" width="500" alt="logo" src="/crousal.jpg" className=" h-52 rounded-tl-2xl rounded-tr-2xl" ></Image>
       </div>
       <div className="h-40 flex">
        <Image src="/dps-logo.png" width="80" height="90" alt="logo" className=' w-16 h-16 rounded-full mt-3 ml-5'/>
        <h2 className='ml-10 mt-5 font-{Inter} font-medium '>DELHI PUBLIC SCHOOL - AMALAPURAM <br /><FontAwesomeIcon icon={faStar} className='text-cyan-600 text-xl mt-3'></FontAwesomeIcon> 0</h2>
       </div>
       <p className='bg-gray-200 w-32 h-6 ml-5  pl-2 mb-4 text-cyan-600 rounded-full font-{Inter} font-medium'> <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon> CBSE Board</p>
  </div>

  <div className='bg-gray-50 mr-5 h-auto rounded-2xl border border-solid border-gray-200'>
       <div className='w-full h-52'>
        <Image  height="250" width="400" alt="logo" src="/crousal.jpg" className="rounded-tl-2xl rounded-tr-2xl" ></Image>
       </div>
       <div className="h-40 flex">
       <Image src="/dps-logo.png" width="80" height="90" alt="logo" className=' w-16 h-16 rounded-full mt-3 ml-5'/>
        <h2 className='ml-10 mt-5 font-{Inter} font-medium '>DELHI PUBLIC SCHOOL - AMALAPURAM <br /><FontAwesomeIcon icon={faStar} className='text-cyan-600 text-xl mt-3'></FontAwesomeIcon> 0</h2>
       </div>
       <p className='bg-gray-200 w-32 h-6 ml-5  pl-2 mb-4 text-cyan-600 rounded-full font-{Inter} font-medium'> <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon> CBSE Board</p>
  </div>
  <div className='bg-gray-50 mr-5 h-auto rounded-2xl border border-solid border-gray-200'>
       <div className='w-full h-52'>
        <Image  height="250" width="400" alt="logo" src="/crousal.jpg" className="rounded-tl-2xl rounded-tr-2xl" ></Image>
       </div>
       <div className="h-40 flex">
       <Image src="/dps-logo.png" width="80" height="90" alt="logo" className=' w-16 h-16 rounded-full mt-3 ml-5'/>
        <h2 className='ml-10 mt-5 font-{Inter} font-medium '>DELHI PUBLIC SCHOOL - AMALAPURAM <br /><FontAwesomeIcon icon={faStar} className='text-cyan-600 text-xl mt-3'></FontAwesomeIcon> 0</h2>
       </div>
       <p className='bg-gray-200 w-32 h-6 ml-5  pl-2 mb-4 text-cyan-600 rounded-full font-{Inter} font-medium'> <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon> CBSE Board</p>

  </div>
  <div className='bg-gray-50 mr-5 h-auto rounded-2xl border border-solid border-gray-200'>
       <div className='w-full h-52'>
        <Image  height="250" width="400" alt="logo" src="/crousal.jpg" className="rounded-tl-2xl rounded-tr-2xl2" ></Image>
       </div>
       <div className="h-40 flex">
       <Image src="/dps-logo.png" width="80" height="90" alt="logo" className=' w-16 h-16 rounded-full mt-3 ml-5'/>
        <h2 className='ml-10 mt-5 font-{Inter} font-medium '>DELHI PUBLIC SCHOOL - AMALAPURAM <br /><FontAwesomeIcon icon={faStar} className='text-cyan-600 text-xl mt-3'></FontAwesomeIcon> 0</h2>
       </div>
       <p className='bg-gray-200 w-32 h-6 ml-5  pl-2 mb-4 text-cyan-600 rounded-full font-{Inter} font-medium'> <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon> CBSE Board</p>

  </div>
  
</Carousel>
    </div>
  )
}

export default Carouseal
