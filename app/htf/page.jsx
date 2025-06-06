"use client"
import React, { useEffect } from 'react'
import './components/home.css'
import dynamic from 'next/dynamic';



const Header = dynamic(() => import('./components/Header'));
const Content = dynamic(() => import('./components/Content'));
const FormData = dynamic(() => import('./components/FormData'));
// const Sec_content = dynamic(() => import('./components/Sec_content'));
// const Customer_exp_hfs = dynamic(() => import('./components/Customer_exp'));
// const Percentage = dynamic(() => import('./components/Percentage'));
// const Third_content = dynamic(() => import('./components/third_content'));

const CustomerReview = dynamic(() => import('./components/CustomerReview'));

const CustomFooterHTB = dynamic(() => import('./components/customFooter'));

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));





const page = () => {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/htf")

    }, [])


    return (
        <div className='w-full mx-auto bg-white '>

            <Header />

            <Content />


            {/* <Sec_content /> */}

            {/* <Customer_exp_hfs /> */}

            {/* <Percentage /> */}

            {/* <Third_content /> */}

            <FormData />

            <CustomerReview />

            <CustomFooterHTB />

            <FooterP />

        </div>
    )
}

export default page