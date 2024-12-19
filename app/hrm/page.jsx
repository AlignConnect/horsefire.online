"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './old_backup_components/home.css'


const Header = dynamic(() => import('./new_components/Header'), {
    loading: () => <p>Header Loading</p>
});


const Story = dynamic(() => import('./new_components/Story'), {
    loading: () => <p>Loading</p>
});

const Last = dynamic(() => import('./new_components/Last'));
const Customer_satisfied = dynamic(() => import('./new_components/Customer_satisfied'))


const Form = dynamic(() => import('./old_backup_components/Formdata'), {
    loading: () => <p>Loading</p>
});


const CustomerReview = dynamic(() => import('./../hfu/components/CustomerReview'), {
    loading: () => <p>Loading</p>
});

const CustomFooterHTB = dynamic(() => import('./old_backup_components/customFooter'), {
    loading: () => <p>Loading</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});



const page = () => {



    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hrm")

    }, [])


    return (
        <div className=''>
            <Header />

            <Story />

            <Last />

            <Customer_satisfied />

            <Form />


            {<CustomerReview />}



            <CustomFooterHTB />

            <FooterP />
        </div>
    )
}

export default page