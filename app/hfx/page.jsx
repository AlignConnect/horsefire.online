"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/Home.css'



const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});


const Contant = dynamic(() => import('./components/contant'), {
    loading: () => <p>Header Loading</p>
});

const Form = dynamic(() => import('./components/Formdata'), {
    loading: () => <p>Header Loading</p>
});

const Customer = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>Header Loading</p>
});

const CustomFooterHTB = dynamic(() => import('./components/customFooter'), {
    loading: () => <p>Loading</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});



const page = () => {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfx")

    }, [])

    return (
        <section>

            <div className="max-w-2xl mx-auto bg-black">

                <Header />

                <Contant />

                <Form />

                <Customer />

                <CustomFooterHTB />

                <FooterP />

            </div>

        </section>
    )
}

export default page