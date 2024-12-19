"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/home.css'


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});


const Story = dynamic(() => import('./components/Story'), {
    loading: () => <p>Loading</p>
});

const Form = dynamic(() => import('./components/Formdata'), {
    loading: () => <p>Loading</p>
});



const CustomFooterHTB = dynamic(() => import('./components/customFooter'), {
    loading: () => <p>Loading</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});



const page = () => {



    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hrf")

    }, [])


    return (
        <div className=''>
            <Header />

            <Story />

            <Form />


            <CustomFooterHTB />

            <FooterP />
        </div>
    )
}

export default page