"use client"
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";
import { useEffect, useState } from "react";
import './components/Home.css'


const Header = dynamic(() => import("./components/Header"), {
    loading: () => <p>Header Loading</p>,
});

const Sec2 = dynamic(() => import('./components/Sec2'))


const CustomFooterHTB = dynamic(() => import('./components/customFooter'), {
    loading: () => <p>Loading</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});


const noto = Noto_Serif_Devanagari({
    subsets: ["devanagari"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const page = () => {

    useEffect(() => {
        localStorage.setItem("PATH", "horsefire.online/hds");
    }, []);


    return (
        <main className="fontPoppins bg-black">
            <title>Horse Fire Tablet</title>
            <section className="max-w-2xl mx-auto  text-black text-[1.1rem] sm:text-xl bg-white">
                <Header />

                <Sec2 />


                <CustomFooterHTB />

                <FooterP />
            </section>
        </main>
    )
}

export default page