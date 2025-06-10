"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/home.css'


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});

const Contant = dynamic(() => import('./components/Contant'), {
    loading: () => <p>Header Loading</p>
});

const SecondContant = dynamic(() => import('./components/secondContant'), {
    loading: () => <p>Header Loading</p>
});


const Form = dynamic(() => import('./components/Formdata'), {
    loading: () => <p>Header Loading</p>
});

const CustomerReview = dynamic(() => import('./components/CustomerReview'))


const Footer = dynamic(() => import('./components/customFooter'));


const Footerp = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));


const page = () => {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/phf");

    }, [])


    return (
        <section className='w-full md:max-w-2xl mx-auto bg-white'>

            <Header />

            <Contant />

            <SecondContant />

            <Form />

            <CustomerReview />

            <Footer />

            <Footerp />

        </section>
    )
}

export default page