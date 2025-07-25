import React from 'react'
import { footerLink, socialData } from '../helper/Helper'
import Link from 'next/link'
import Para from './Para'

function Footer() {
  return (
    <>
      <div className="max-w-[1775px] mx-auto px-5 md:px-10 lg:px-15 xl:px-25 pb-14">
        <div className="w-full">
          <div className="flex gap-2 md:gap-[15px]">
            {socialData.map((item, index) => (
              <Link
                className="hover:scale-150 transition duration-400"
                href={item.path}
                key={index}
                target="block">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-between sm:gap-8 gap-4 items-center sm:pt-8 pt-4 flex-wrap">
          <Para
            className="text-[#FFF] inter text-[14px] "
            Para="Copyright © 2024 SVT. All rights reserved."
          />
          <div className="flex sm:gap-8 gap-2 justify-between items-center flex-wrap">
            {footerLink.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.path}
                  className="text-[#FFF] transition-all duration-700   lg:text-base text-sm  hover:text-[#41DF14]">
                  {item.pera}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
