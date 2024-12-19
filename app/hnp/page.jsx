"use client"
import dynamic from "next/dynamic"
import './hnpcomponent/Home.css'
import { useEffect } from "react";
import Head from "next/head";

const Header = dynamic(() => import('./hnpcomponent/Header'));
const Section1 = dynamic(() => import('./hnpcomponent/Section1'));
const Section2 = dynamic(() => import('./hnpcomponent/Section2'));
const Section3 = dynamic(() => import('./hnpcomponent/Section3'));
const Formdata = dynamic(() => import('./hnpcomponent/Formdata'));
const CusRev = dynamic(() => import('./hnpcomponent/CusRev'));
const Cuseview = dynamic(() => import('./hnpcomponent/CustomerReview'));
const Footer = dynamic(() => import('../commonUse/Footer'));
const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'))
const page = () => {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hnp")
    }, [])


    return (

        <section className="w-full md:w-[52rem] mx-auto">

            <Head>
                <script src="https://my.rtmark.net/p.js?f=sync&lr=1&partner=31b8919a3a3b9744f205bbda54536ae351847833e0c4bb1d8a5dfd377f2333f2" defer></script>
            </Head>
            <noscript>
                <img src="https://my.rtmark.net/img.gif?f=sync&lr=1&partner=31b8919a3a3b9744f205bbda54536ae351847833e0c4bb1d8a5dfd377f2333f2" width="1" height="1" />
            </noscript>


            <Header />
            <div className="px-3 md:px-5  bg-white">
                <Section1 />
                <Section2 />
                <Section3 />
                <Formdata />
                <CusRev />
                <Cuseview />

                <div className="bg-white">
                    <Footer />
                </div>

            </div>

            <FooterP />
        </section>
    )
}

export default page