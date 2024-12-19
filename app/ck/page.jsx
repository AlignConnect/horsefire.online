"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/Home.css'


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});


const Story = dynamic(() => import('./components/Story_ck'), {
    loading: () => <p> Loading</p>
});

const Percentage = dynamic(() => import('./components/Percentage'), {
    loading: () => <p> Loading</p>
});

const People = dynamic(() => import('./components/People'), {
    loading: () => <p> Loading</p>
});

const Customer_exp = dynamic(() => import('./components/Customer_exp'), {
    loading: () => <p> Loading</p>
});

const FormData = dynamic(() => import('./components/FormData'), {
    loading: () => <p> Loading</p>
});

const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p> Loading</p>
});


const Footer = dynamic(() => import('./components/customFooter'), {
    loading: () => <p>loader</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});


const page = () => {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/ck")

    }, [])

    return (
        <section className='bg-[#f3f3f3]'>

            <div className="">

                <Header />

                <Story />

                <Percentage />


                <People />


                <Customer_exp />

                <FormData />

                <CustomerReview />

                <Footer />

                <FooterP />
            </div>

        </section>
    )
}

export default page