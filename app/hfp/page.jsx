'use client'
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/home.css'

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});

const Content = dynamic(() => import('./components/Content'), {
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
    
            localStorage.setItem("PATH_KEY", "/hfp")
    
        }, [])
    

    return (
        <section className=''>

            <Header />

            <Content />

            <Form />

            <CustomerReview />


            <Footer />

            <Footerp />

        </section>
    )
}

export default page