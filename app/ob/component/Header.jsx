import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { IoMdMenu } from "react-icons/io";


const Header = () => {
    return (
        <section className='w-full md:w-[60%] mx-auto px-3'>

            <div className='flex justify-between items-center my-5'>
                <div className='flex gap-2 justify-between items-center'>
                    <img src="/images/logo1.png" alt="dsf" className='w-[77px] h-[77px] rounded-[50%]' loading='lazy' />
                    <div>
                        <p className='mb-0 text-center items-center font-bold pop_fonts' style={{ color: "rgb(255,177,0)" }}>Horse Fire Tablet&nbsp;<img src="/images/verify.svg" alt="dfg" style={{ width: '23px', height: '22px' }} className='inline' loading='lazy' /></p>
                        <small className='text-white w-full'> <div className='flex'> <div className='text-white' style={{ fontFamily: "sans-serif", fontSize: "0.6rem" }}>THE GOOD MEN SECRET</div></div>
                        </small>

                    </div>
                </div>


                <div className='text-white md:flex gap-3 hidden'>
                    <a href='#form'>Why Horse Fire Tablet</a>
                    <a href='#form'>Customer Support</a>
                </div>

                <div className='block md:hidden text-white'>
               <a href="#form">
               <IoMdMenu className='text-4xl'/>
               </a>
                </div>

            </div>




        </section>
    )
}

export default Header