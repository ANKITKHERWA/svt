'use client'
import Anew from '@/componets/pages/home/Anew'
import Hero from '@/componets/pages/home/Hero'
import Holdtrade from '@/componets/pages/home/Holdtrade'
import Svt from '@/componets/pages/home/Svt'
import Thereal from '@/componets/pages/home/Thereal'
import Aos from 'aos'

import React, { useEffect } from 'react'

function page() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000, easing: 'ease-in-out', offset: 50 })
  }, [])
  return (
    <>
      <Hero />
      <Anew />
      <Thereal />
      <Holdtrade />
      <Svt />
    </>
  )
}

export default page
