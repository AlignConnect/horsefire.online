"use client"
import dynamic from 'next/dynamic'
import React from 'react'
import { useEffect } from 'react';
import './components/home.css'



const Header = dynamic(() => import('./htb_compo/Header'));
const Story = dynamic(() => import('./htb_compo/Story'));
// const Last = dynamic(() => import('./new_components/Last'));

// const Hurbs = dynamic(() => import('./components/Hurbs'));


const Customer_satisfied = dynamic(() => import('./new_components/Customer_satisfied'))

const Formdata = dynamic(() => import('./components/Formdata'))

// const Footer = dynamic(() => import('@/app/commonUse/Footer'));
const CustomFooter = dynamic(() => import('@/app/htb/components/customFooter'));

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'))


const CustomerReview = dynamic(() => import('./components/CustomerReview'));



const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfu")

    }, [])



    return (
        <main className="w-full md:max-w-4xl mx-auto bg-white">

            <section className="">

                <Header />

                <Story />
                {/* 
                <Last />
                
                <Hurbs /> */}


                <Customer_satisfied />

                <Formdata />



                {<CustomerReview />}

                <div className="sm:max-w-3xl mx-auto">
                    <CustomFooter />
                </div>

                {<FooterP />}



            </section>
        </main>
    )
}

export default page