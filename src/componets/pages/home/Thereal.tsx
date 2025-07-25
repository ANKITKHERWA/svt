import Heading from '@/componets/common/Heading'
import Para from '@/componets/common/Para'
import Image from 'next/image'
import React from 'react'

function Thereal() {
  return (
    <div className="bg-[#00251A] relative z-[50] overflow-hidden" id="Thereal">
      <div className="max-w-[1344px] mx-auto  min-[1500px]:px-[50px] xl:px-30 lg:px-8 md:px-6 sm:px-5 px-4 lg:pb-25 sm:pb-10 pb-0">
        <div className="relative z-30 flex lg:flex-row flex-col lg:gap-0 sm:gap-5 gap-4 md:gap-6 justify-center items-center ">
          <div
            className="flex flex-col sm:gap-5 gap-4 md:gap-6 lg:gap-8 xl:gap-10 lg:max-w-[604px]"
            data-aos="zoom-out-up"
            data-aos-duration="2000">
            <Heading
              title="A real alternative to sports betting"
              className="max-w-[462px] xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-[#fff] ff-black "
            />
            <Para
              title="SVT can be traded any time on our exchange or on any other exchange. Players are scored when the play matches. The score is then converted to payouts to token holders. You earn when players perform relative to other players. You can earn by buying and holding quality players, or you can decide to trade and profit from price appreciation of the tokens.
"
              className="text-[#B5BDC1] lg:text-xl text-base ff-inter max-w-[604px]"
            />
          </div>
          <div
            className="min-[1650px]:-mr-[160px] min-[1480px]:-mr-[80px]"
            data-aos="zoom-out-down"
            data-aos-duration="2000">
            <Image
              src={'/assest/png/vs.png'}
              width={656}
              height={540}
              alt="img"
              className="lg:mx-0 mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="absolute  bottom-0 right-0">
        <Image
          src={'/assest/png/tokens.png'}
          width={1920}
          height={463}
          alt="img"
          className="w-screen"
        />
      </div>
    </div>
  )
}

export default Thereal
