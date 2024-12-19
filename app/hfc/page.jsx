"use client"
import dynamic from "next/dynamic"
import './Home.css'
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";

const Header = dynamic(() => import('./components/Header'));
const Section1 = dynamic(() => import('./components/Section1'));
const Section2 = dynamic(() => import('./components/Section2'));
const Formdata = dynamic(() => import('./components/Formdata'));
const CustomerReview = dynamic(() => import('./components/CustomerReview'))
const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const Footerp = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'));


const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfc");

    }, [])


    return (
        <section>

            <Header />
            <Section1 />
            <Section2 />
            <Formdata />

            <div className="w-full md:w-[768px] mx-auto">
                <CustomerReview />
            </div>

            <Footer />
            <Footerp />




        </section>


    )
}

export default page