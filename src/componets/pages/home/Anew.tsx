import Heading from '@/componets/common/Heading'
import Para from '@/componets/common/Para'
import Image from 'next/image'
import React from 'react'

function Anew() {
  return (
    <div className="bg-[url('/assest/png/chartbg.png')] bg-no-repeat bg-[length:100%_100%]">
      <div className="relative pb-12 lg:pb-[60px] xl:pb-[130px] bg-green-gradient3">
        <div>
          <Image
            className="absolute z-50 bottom-0"
            src={'/assest/png/ract.png'}
            width={'1930'}
            height={'878'}
            alt="img"
          />
        </div>
        <div className="max-w-[1344px] mx-auto  min-[1500px]:px-[50px] xl:px-30 lg:px-8 md:px-6 sm:px-5 px-4 ]">
          <div className="flex lg:flex-row flex-col justify-center">
            <div
              className="lg:-ml-30 ml-0 relative z-0"
              data-aos="zoom-out-right"
              data-aos-duration="3000">
              <Image
                src={'/assest/png/laptop.png'}
                width={1231}
                height={928}
                alt="img"
                className="lg:mx-0 mx-auto"
              />
            </div>
            <div
              className="flex flex-col sm:gap-5 gap-4 md:gap-6 lg:gap-8 xl:gap-10 z-50"
              data-aos="zoom-out-left"
              data-aos-duration="3000">
              <Heading
                heading="A new digital asset class"
                className="max-w-[348px]  text-[#fff] lg:text-5xl md:text-4xl sm:text-3xl text-2xl ff-black"
              />
              <Para
                Para="Sport Value Tokens (SVT) are crypto tokens representing athletes in different sports (Football, Basketball, Cricket) offering performance based rewards to their holders. SVT is a Web 3.0 protocol regulated by a DAO."
                className="text-[#E6E6E6] max-w-[739px] w-full lg:text-xl text-base ff-inter leading-[160%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Anew
