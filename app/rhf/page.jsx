"use client"
import React, { useEffect } from 'react'
import Header from './components/Header'
import './page.css'
import Sec1 from './components/Sec1'
import Form from './components/Formdata'
import CustomerReview from './components/CustomerReview'
import Footer from '../ck/components/customFooter'
import FooterPopup from '@/app/commonUse/bottompopup/BottomHandler'
import YoutubeFrame from '../commonUse/Youtubefile/YoutubeFrame'
const page = () => {


    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/rhf")
    }, [])

    return (
        <section className='w-full md:max-w-2xl mx-auto bg-white overflow-hidden'>
            <Header />
            <Sec1 />
            <Form />
            <div>

                <div className='text-3xl font-black text-center py-5  uppercase flex justify-center gap-2 text-[red]'><div className='text-black'>Customer</div> Speaks</div>

                <YoutubeFrame vid={"vTgbUS5qagY?si=fOZ3UK7_e8RlXfPz"} />
            </div>
            <CustomerReview />
            <Footer />
            <FooterPopup />
        </section>
    )
}

export default page
