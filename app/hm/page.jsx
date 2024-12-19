"use client"
import dynamic from "next/dynamic"
import './components/hm.css'
import { useEffect } from "react";

const Header = dynamic(() => import('./components/Header'));
const Section1 = dynamic(() => import('./components/Section1'));
const Section2 = dynamic(() => import('./components/Section2'));
const Formfile = dynamic(() => import('./components/Form'));
const CustomerReview = dynamic(() => import('./components/CustomerReview'));
const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));
const page = () => {

    useEffect(() => {


        localStorage.setItem("PATH_KEY", "/hm")

    }, [])


    return (
        <section className="w-full md:w-[768px] mx-auto">

            <Header />
            <Section1 />
            <Section2 />
            <Formfile />
            <CustomerReview />
            <Footer />
            <FooterP />

        </section>
    )
}

export default page;
