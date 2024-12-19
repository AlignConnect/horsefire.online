"use client"
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import './component/ob.css'
import Head from 'next/head'

const Header = dynamic(() => import('./component/Header'))
const Sec1 = dynamic(() => import('./component/Sec1'))
const Sec2 = dynamic(() => import('./component/Sec2'))
const Form = dynamic(() => import('./component/Form'))
const Sec3 = dynamic(() => import('./component/Sec3'))

const Rev = dynamic(() => import('./component/CustomerReview'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const FooterPop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));

const page = () => {

  useEffect(() => {

    localStorage.setItem("PATH_KEY", "/ob")

  }, [])



  return (

    <section className='bg-black'>



      <Header />
      <Sec1 />
      <Form />
      <Sec2 />
      <Sec3 />

      <div className='bg-white'>
        <div className='w-full md:w-[60%] mx-auto'>
          <Rev />
        </div>
      </div>

      <div className='bg-white'>
        <Footer />
      </div>

      <FooterPop />


    </section>


  )
}

export default page