import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa6'
import { GiHamburgerMenu, GiNotebook } from 'react-icons/gi'
import { IoEyeSharp } from 'react-icons/io5'
import { BsFillHeartFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import dayjs from 'dayjs';
import { Poppins } from 'next/font/google';

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Header = () => {

    const [hexxx, sethexxx] = useState(326961);
    let [happy, sethappy] = useState(0);



    useEffect(() => {

        setTimeout(() => {

            sethappy(happy + 3)

        }, 5000);

    }, [])



    return (
        <section className={poppin.className}>

            <div className={`text-center w-full flex items-center justify-around py-3 bg-[#986120]`} style={{ boxShadow: 'rgb(0 0 0 / 13%) 0px 5px 10px -5px' }}>
                <a href="#form" className=""><FaUser className='head_icon_img11' /></a>
                <img src={"/images/logo.png"} alt="pic" className='w-[60%] md:w-[35%]' loading='lazy' />
                <a href="#form" className=""><GiHamburgerMenu className='head_icon_img11 ' /></a>
            </div>

            <div className='flex items-center justify-around bg-white py-3 font-semibold text-[0.8rem] md:text-lg'>

                <div className='flex items-center gap-2'>
                    <BsFillHeartFill className='text-red-600' />
                    1678 LIKES
                </div>


                <div className='flex items-center gap-2'>
                    <SlCalender className='text-xl' />
                    {dayjs().subtract(1, 'day').format("DD MMM YYYY")}
                </div>


                <div className='flex items-center gap-2'>
                    <IoEyeSharp className='text-xl' />
                    878778
                </div>

            </div>


            <div className='flex justify-around items-center bg-white px-2 md:px-5'>

                <div className='bg-[#ff5400] px-5 flex-grow rounded-lg'>
                    <div className='text-white text-center font-bold py-1 text-lg md:text-2xl'>HEALTH TIPS</div>
                </div>

                <div className='font-semibold flex-grow text-center flex items-center justify-center'>
                    <div>
                        <GiNotebook className='text-red-700 text-3xl' />
                    </div>

                    <div className='text-[0.8rem] md:text-base'>
                        <div className=''>WRITTEN BY&nbsp;</div>
                        <div className=''>Dr. ARJUN BATRA</div>
                    </div>

                </div>

            </div>



        </section>)
}

export default Header