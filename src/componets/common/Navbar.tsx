'use client'
import Link from 'next/link'
import React from 'react'

import { navber } from '../helper/Helper'
import Image from 'next/image'
import Sidebar from './Sidebar'

function Navbar() {
  return (
    <div className="max-w-[1775px] mx-auto px-4 md:px-6 lg:px-7 xl:px-25 pt-13 flex justify-between items-center gap-4">
      <div>
        <Link href={'/'}>
          <Image
            className="xl:max-w-[160px] md:max-w-[130px] sm:max-w-[100px] max-w-[70px]"
            src={'/assest/svg/logo1.svg'}
            width={98}
            height={35}
            alt="svt-logo"
          />
        </Link>
      </div>
      <div>
        <ul className="lg:flex  items-center hidden justify-between  gap-70">
          <li className="flex gap-8 xl:gap-15 items-center">
            {navber.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.path}
                  className="text-[#FFF] transition-all duration-700  relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[linear-gradient(90deg,#009694_0%,#65f53d_97.01%)] after:transition-all after:duration-500 hover:after:w-full offset-4  text-base  k2d hover:text-[#41DF14] opacity-50">
                  {item.pera}
                </Link>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <div className="lg:flex  items-center hidden">
        <button className="py-3 px-6 rounded-[6px] border-1 border-[#fff] bg-[rgba(0,51,30,0.50)] hover:text-[#41DF14]  text-base font-medium duration-700  text-[#fff] cursor-pointer ff-K2D">
          JOIN NOW
        </button>
      </div>
      <Sidebar navber={navber} />
    </div>
  )
}

export default Navbar
