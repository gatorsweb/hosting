import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Banner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='container'>
        <Slider {...settings}>
      <div className='carousel-Item bg-yellow p-10'>
        <div className='grid grid-cols-2 md:grid-flow-row'>
            <div className='flex flex-col justify-center col-span-2 md:col-span-1'>
                <h1 className='text-[35px] font-[800]'>Create your Website</h1>
                <p className='text-[28px]'>Choose a Website Builder plan and claim your FREE domain!</p>
                <button className='bg-brown px-6 py-3 text-[20px] text-[white] rounded-md mt-4 w-fit'>Browse Products</button>
            </div>

            <div className='flex justify-center col-span-2 md:col-span-1'>
                <img src="images/websitebanner.svg" alt="website banner" className='max-w-[80%]' />
            </div>

        </div>
      </div>
      <div className='carousel-Item bg-yellow p-10'>
        <div className='grid grid-cols-2 md:grid-flow-row'>
            <div className='flex flex-col justify-center col-span-2 md:col-span-1'>
                <h1 className='text-[35px] font-[800]'>Create your Website</h1>
                <p className='text-[28px]'>Choose a Website Builder plan and claim your FREE domain!</p>
                <button className='bg-brown px-6 py-3 text-[20px] text-[white] rounded-md mt-4 w-fit'>Browse Products</button>
            </div>

            <div className='flex justify-center col-span-2 md:col-span-1'>
                <img src="images/websitebanner.svg" alt="website banner" className='max-w-[80%]' />
            </div>

        </div>
      </div>
      <div className='carousel-Item bg-cream p-10'>
        <div className='grid grid-cols-2 md:grid-flow-row'>
            <div className='flex flex-col justify-center col-span-2 md:col-span-1'>
                <h1 className='text-[35px] font-[800]'>Create your Website</h1>
                <p className='text-[28px]'>Choose a Website Builder plan and claim your FREE domain!</p>
                <button className='bg-brown px-6 py-3 text-[20px] text-[white] rounded-md mt-4 w-fit'>Browse Products</button>
            </div>

            <div className='flex justify-center col-span-2 md:col-span-1'>
                <img src="images/websitebanner.svg" alt="website banner" className='max-w-[80%]' />
            </div>

        </div>
      </div>
      <div className='carousel-Item bg-brown p-10'>
        <div className='grid grid-cols-2 md:grid-flow-row'>
            <div className='flex flex-col justify-center col-span-2 md:col-span-1'>
                <h1 className='text-[35px] font-[800] text-[white]'>Create your Website</h1>
                <p className='text-[28px] text-[white]'>Choose a Website Builder plan and claim your FREE domain!</p>
                <button className='bg-yellow px-6 py-3 text-[20px] text-[black] rounded-md mt-4 w-fit'>Browse Products</button>
            </div>

            <div className='flex justify-center col-span-2 md:col-span-1'>
                <img src="images/websitebanner.svg" alt="website banner" className='max-w-[80%]' />
            </div>

        </div>
      </div>
      
    </Slider>
    </div>
  )
}
