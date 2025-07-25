'use client'
import Heading from '@/componets/common/Heading'
import Navbar from '@/componets/common/Navbar'
import SubHeading from '@/componets/common/SubHeading'
import Aos from 'aos'
import Image from 'next/image'
import React, { useEffect } from 'react'

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <>
      <div className="bg-[url(/assest/png/1st.png)] bg-no-repeat bg-[length:100%_100%] z-10">
        <Navbar />
        <div className="max-w-[1775px] mx-auto px-4 md:px-6 lg:px-7 xl:px-25 lg:pt-15 pt-6 bg-green-gradient bg-[length:100%_100%]">
          <div className="flex lg:flex-row flex-col-reverse justify-center items-center  lg:gap-4 gap-2 relative ">
            <div
              className="flex flex-col lg:gap-10 gap-4 z-10 lg:max-w-[649px] w-full"
              data-aos="fade-right">
              <Heading
                heading="Turn sports knowledge into profit"
                className="text-[#fff] lg:text-5xl md:text-4xl sm:text-3xl text-[25px] ff-black  opacity-[0.8] leading-[120%]"
              />
              <SubHeading
                subheading="Trade crypto tokens representing professional athletes. Profit when the athletes perform in real life. Join the community now to participate in free token airdrops."
                className="text-[#B5BDC1] lg:text-xl text-base  ff-inter leading-[160%] max-w-[505px]"
              />
              <div className="pb-5 lg:pb-0.5">
                <button className="lg:px-6 px-3 py-2 lg:py-3 bg-[#41DF14] rounded-[6px] ff-k2d lg:text-base sm:text-sm text-xs font-semibold hover:text-[#fff] cursor-pointer  hover:drop-shadow-xl hover:drop-shadow-[#41DF14] duration-100">
                  JOIN THE COMMUNITY
                </button>
              </div>
            </div>
            <div className="z-10" data-aos="fade-left">
              <Image
                className="w-[300px] h-[300px] sm:w-[400px] sm:h-[500px] md:w-[470px] md:h-[600px] lg:w-[578px] lg:h-[826px]"
                src={'/assest/png/mobile.png'}
                alt="img mobile"
                width={'578'}
                height={'826'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
