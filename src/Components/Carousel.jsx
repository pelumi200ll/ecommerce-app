
import React from 'react'

function Carousel({ className, flex="",new_style="", banner="Unveil Your Signature Look", img="/img/c4.jpg" }) {
  return (
    <div className={`carousel h-[50vh] md:h-[90vh] relative ${className}`}>
        <img src={img} className='w-full relative h-full object-cover' alt="" />
        <div className={`carousel-items absolute top-[20%] lg:top-[20%] lg:left-[50%] w-full lg:w-[35%] ${new_style}`}>
            <h5 className='text-4xl lg:text-6xl text-white'>{banner}</h5>
            <div className={`flex flex-wrap items-center justify-start gap-5 ${flex}`}>
                <button type="button" className='bg-[#0B4F6C] capitalize font-semibold hover:bg-white duration-500 transition-all hover:text-[#0B4F6C] text-white p-3 w-[40%] md:w-[30%]'>shop now</button>
                <button type="button" className='border-white border font-semibold capitalize hover:bg-white duration-500 transition-all hover:text-[#0B4F6C] text-white p-3 w-[40%] md:w-[30%]'>explore more</button>
            </div>
        </div>
    </div>
  )
}

export default Carousel
