'use client'
import Link from 'next/link'
import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navber } from '../helper/Helper'
import Image from 'next/image'
import { IconMenu } from '../helper/Icon'

function Navbar() {
  return (
    <div className="max-w-[1775px] mx-auto px-4 md:px-6 lg:px-7 xl:px-25 pt-13 flex justify-between items-center gap-4">
      <div>
        <Link href={'Home'}>
          <Image
            className="xl:max-w-[160px] md:max-w-[130px] sm:max-w-[100px] max-w-[70px]"
            src={'/assest/svg/logo1.svg'}
            width={98}
            height={35}
            alt="logo"
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
                  className="text-[#FFF] transition-all duration-700  under offset-4  text-base  k2d hover:text-[#41DF14] opacity-50">
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

      <Sheet>
        <SheetTrigger className="lg:hidden">
          <IconMenu />
        </SheetTrigger>
        <SheetContent className="bg-[#003423]">
          <SheetHeader>
            <SheetDescription>
              <div className="flex flex-col justify-center items-center overflow-y-auto max-h-[80vh] py-50 px-4 scrollbar-hide">
                <ul className="flex flex-col gap-2 items-center">
                  <li className="flex flex-col gap-2 items-center">
                    {navber.map((item, index) => (
                      <div key={index}>
                        <Link
                          href={item.path}
                          className="text-[#FFF] transition-all duration-700 text-base K2D hover:text-[#41DF14]">
                          {item.pera}
                        </Link>
                      </div>
                    ))}
                  </li>

                  <li className="mt-3">
                    <button className="lg:py-3 py-2 lg:px-6 px-3 rounded-[6px] border-1 border-[#fff] bg-[rgba(0,51,30,0.50)] hover:text-[#41DF14] lg:text-base sm:text-sm text-xs font-medium duration-700 text-[#fff] cursor-pointer K2D">
                      JOIN NOW
                    </button>
                  </li>
                </ul>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Navbar
