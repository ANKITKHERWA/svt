'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetDescription,
} from '@/components/ui/sheet'
import { IconMenu } from '../helper/Icon'

export default function Sidebar({ navber }: { navber: any[] }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="lg:hidden" onClick={() => setOpen(true)}>
        <IconMenu />
      </SheetTrigger>

      <SheetContent className="bg-[#003423]">
        <SheetHeader>
          <SheetDescription>
            <div className="flex flex-col justify-center items-center overflow-y-auto max-h-[80vh] py-40 px-4 scrollbar-hide">
              <ul className="flex flex-col gap-2 items-center">
                <li className="flex flex-col gap-2 items-center">
                  {navber.map((item, index) => (
                    <div key={index}>
                      <Link
                        href={item.path}
                        scroll={true}
                        onClick={() => setOpen(false)} // ✅ Close sheet on click
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
  )
}
