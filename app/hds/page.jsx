"use client"
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";
import { useEffect, useState } from "react";
import './components/Home.css'


const FormPop = dynamic(() => import("./components/FormPop"), {
    loading: () => <p>df</p>,
});

const AmaFlip = dynamic(() => import("./components/AmaFlip"), {
    loading: () => <p>df</p>,
});
const Header = dynamic(() => import("./components/Header"), {
    loading: () => <p>Header Loading</p>,
});

const Story = dynamic(() => import("./components/Story"), {
    loading: () => <p>Header Loading</p>,
});

const Last = dynamic(() => import("./components/Last"));
const Component = dynamic(() => import("./components/Component"));
const SelectProduct = dynamic(() => import("../commonUse/SelectProduct"));

const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>Loading</p>
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
            <section className="max-w-xl mx-auto  text-black text-[1.1rem] sm:text-xl bg-white">
                <Header />

                <Story />

                <Sec2 />

                {/* <SelectProduct />
                <Last />
                <FormPop />


                <Component />

                <CustomerReview /> */}

                <CustomFooterHTB />

                <FooterP />
            </section>
        </main>
    )
}

export default page