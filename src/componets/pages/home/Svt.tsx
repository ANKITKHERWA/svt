import Footer from '@/componets/common/Footer'
import Para from '@/componets/common/Para'
import Para2 from '@/componets/common/Para2'
import SubHeading from '@/componets/common/SubHeading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Svt() {
  return (
    <>
      <div className="bg-[url(/assest/png/f2.png)] bg-no-repeat bg-[length:100%_100%] ">
        <div className="bg-[url(/assest/png/ff.png)] bg-no-repeat bg-[length:100%_100%]  lg:pt-20  sm:pt-15 pt-0">
          <div className="max-w-[1775px] mx-auto px-4 md:px-6 lg:px-7 xl:px-25  flex flex-col justify-center items-center sm:gap-8  gap-4">
            <div data-aos="zoom-in-up" data-aos-duration="1500">
              <Link href={'Home'}>
                <Image
                  className="xl:max-w-[160px] md:max-w-[130px] sm:max-w-[100px] max-w-[70px]"
                  src={'/assest/png/union.png'}
                  width={192}
                  height={69}
                  alt="logo"
                />
              </Link>
            </div>
            <div
              className="text-center flex flex-col xl:gap-10 md:gap-5 gap-2 xl:pb-57.5 lg:pb-35 md:pb-25 sm:pb-20 pb-10"
              data-aos="zoom-in-down"
              data-aos-duration="2000">
              <SubHeading
                subheading="Be the first to play!"
                className="text-[#fff]  ff-black lg:text-5xl md:text-4xl sm:text-3xl text-2xl"
              />
              <Para
                className=" text-[#B5BDC1] ff-inter sm:text-xl text-base  lg:max-w-[636px] w-full"
                Para="We are in a pre-launch phase. Tokens are not deployed for trading. The only way to get player tokens before they are launched is to earn them by joining the community and finishing some quests."
              />
              <Para2
                classSpan=" text-[#B5BDC1] ff-inter sm:text-xl text-base"
                span="Complete quests on"
                linkClass="text-[#41DF14] underline"
                linkHref="/"
                linkText="Gal.xe"
                span2="to earn tokens."
              />

              <div>
                <button className="lg:px-6 px-3 py-2 lg:py-3 lg:text-base sm:text-sm text-xs bg-[#41DF14] rounded-[6px] ff-k2d hover:text-[#fff]">
                  JOIN OUR DISCORD CHANNEL
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Svt
