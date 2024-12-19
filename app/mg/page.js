"use client";
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});

const SexProblemHeader = dynamic(() => import('./components/SexProblemHeader'), {
    loading: () => <p>loader</p>
});

const Section1 = dynamic(() => import('./components/Section1'), {
    loading: () => <p>loader</p>
});

const Hearbs = dynamic(() => import('./components/Hearbs'), {
    loading: () => <p>loader</p>
});

const Tab_Exp = dynamic(() => import('./components/Tab_Exp'), {
    loading: () => <p>loader</p>
});

const Review = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loader</p>
});

const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});


function page() {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/mg")

    }, [])

    return (

        <div className='bg-[#0e0e0e]'>

            <div className='max-w-xl mx-auto bg-white fontNoto'>

                <Header />

                <SexProblemHeader />

                <Section1 />

                <Hearbs />



                <Tab_Exp />

                <div className='w-full  mx-auto'>
                    <Review />
                </div>


                    <Footer />



                <FooterP />


            </div>

        </div >
    )
}

export default page