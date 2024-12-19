"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/Home.css'

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});

const Sexissue = dynamic(() => import('./components/Sexissue'), {
    loading: () => <p>Loading</p>
});

const Herbs = dynamic(() => import('./components/Herbs'), {
    loading: () => <p>Loading</p>
});


const Benifits = dynamic(() => import('./components/Benifits'), {
    loading: () => <p>Loading</p>
});


const FormData = dynamic(() => import('./components/FormData'), {
    loading: () => <p>Loading</p>
});


const Order_now = dynamic(() => import('./components/Order_now'), {
    loading: () => <p>Loading</p>
});

const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>Loading</p>
});

const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});



const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/ak")

    }, [])
    return (
        <div>
            <section className="w-full md:max-w-2xl mx-auto bg-[#f0feff]">
                <Header />
                <div className="px-3">
                    <Sexissue />

                    <Herbs />

                    <Benifits />


                    <FormData />

                    <CustomerReview />
                    <Footer />

                </div>
            </section>
            <FooterP />
        </div>
    )
}

export default page