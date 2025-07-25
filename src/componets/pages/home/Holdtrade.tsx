import Para from '@/componets/common/Para'
import SubHeading from '@/componets/common/SubHeading'
import Image from 'next/image'
import React from 'react'

function Holdtrade() {
  return (
    <>
      <div className="bg-[#00130D] pb-7.5 relative z-0">
        <div className="flex lg:flex-row flex-col justify-center items-center  max-w-[1344px] mx-auto  min-[1500px]:px-[50px] xl:px-10 lg:px-8 md:px-6 sm:px-5 px-4">
          <div data-aos="zoom-out-left" data-aos-duration="3000">
            <Image
              className="
 lg:-ml-25 ml-0"
              src={'/assest/png/3img.png'}
              alt="img"
              width={'964'}
              height={'1053'}
            />
          </div>
          <div
            className="flex flex-col sm:gap-10 gap-4"
            data-aos="zoom-out-right"
            data-aos-duration="2000">
            <SubHeading
              subheading="Hold or Trade"
              className="text-[#fff] lg:text-5xl  sm:text-4xl text-2xl ff-black"
            />
            <Para
              Para="You earn when players in your portfolio perform well. You can earn by buying and holding tokens of athletes that perform. Or you can decide to trade and profit from the price appreciation of the tokens.
"
              className="max-w-[526px] text-[#B5BDC1] lg:text-xl text-base ff-inter leading-[160%]"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Holdtrade
