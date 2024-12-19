"use client"
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'

const Header = dynamic(() => import('./component/Header'));
const Section1 = dynamic(() => import('./component/Section1'));
const Section2 = dynamic(() => import('./component/Section2'));
const Section3 = dynamic(() => import('./component/Section3'));
const Formdata = dynamic(() => import('./component/Form'));
const CustomerReview = dynamic(() => import('./component/CustomerReview'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const FooterPop = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));


const page = () => {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/og")

    }, [])

    return (


        <section>
            <Header />
            <section className='border w-full md:w-[768px] mx-auto px-2'>

                <Section1 />
                <Section2 />
                <Section3 />
                <Formdata />
                <CustomerReview />
                <Footer />
                <FooterPop />

            </section>
        </section>

    )
}

export default page