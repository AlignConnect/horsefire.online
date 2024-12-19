"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/Home.css'


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});


const Story = dynamic(() => import('./components/Story'), {
    loading: () => <p> Loading</p>
});

const Formdata = dynamic(() => import('./components/Formdata'), {
    loading: () => <p> Loading</p>
});

const CustomerReviewData = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p> Loading</p>
});


const CustomFooter_HT = dynamic(() => import('./components/customFooter'), {
    loading: () => <p>Loading</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});

const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hk")

    }, [])


    return (
        <section className=" w-full max-w-7xl mx-auto">

            <Header />

            <Story />

            <Formdata />

            <CustomerReviewData />

            <CustomFooter_HT />

            <FooterP />

        </section>
    )
}

export default page