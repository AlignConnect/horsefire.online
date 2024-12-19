import { Poppins } from 'next/font/google';
import React from 'react'


const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Header = () => {











    return (
        <section className={poppin.className}>

            <div className='flex justify-between items-center p-3 shadow-md  w-full md:w-[768px] mx-auto'>

                <div className='flex items-center'>
                    <img src="/main/og_images/lo.png" alt="adsasd" loading='lazy' className='w-[3.4rem]' />
                    {/* <div className='font-bold text-lg leading-[1px] relative -left-[16px]'>
                        <p className='text-2xl'>Horse</p>
                        <p className='tracking-[3px] text-[#43b1c5]'>Fire</p>
                    </div> */}

                    <div>

                        <p className='font-bold text-xl relative -left-[11px]'><span className='text-[#43b1c5]'>Horse</span> <span >Fire</span> </p>

                    </div>

                </div>

                <div className='flex justify-center items-center text-[#0467a8] gap-5 text-[14px] '>
                    <p className='cursor-pointer' onClick={() => window.location.href = "#form"}>FITNESS</p>
                    <p className='cursor-pointer' onClick={() => window.location.href = "#form"}>MALE VITALITY</p>
                    <p className='cursor-pointer hidden sm:block' onClick={() => window.location.href = "#form"}>ERECTILE DYFUNCTION</p>
                    <p className='cursor-pointer hidden sm:block' onClick={() => window.location.href = "#form"}>SEX PROBLUMS</p>
                </div>

            </div >




        </section >)
}

export default Header