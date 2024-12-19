import dayjs from 'dayjs'
import React from 'react'
import { IoEyeSharp } from 'react-icons/io5'
import { SlCalender } from 'react-icons/sl'

const Header = () => {
    return (
        <section className="bg-[url('/main/hk_images/bg1.jpg')] bg-contain">


            <div className="fontNoto text-xl sm:text-[2.4rem]  text-center pt-7 pb-6 font-semibold px-2 text-yellow-300">
                सख्त औजार और <span className='text-red-500'>दमदार स्टैमिना</span> के साथ अब मेरे पति हर रात बनाते है <span className='text-red-500'>रोमांचक</span> माहौल!
            </div>


            <div className="flex sm:justify-around justify-between sm:ju  px-2 items-center pb-1">

                <div className="flex items-center gap-2 ">
                    <img src="/main/hk_images/trisha.jpg" alt="" className='w-12 sm:w-20 bg-cover rounded-full' />
                    <div>
                        <div className="text-sm sm:text-xl fontKalnia font-extrabold text-white">
                            TRUSHA MEHTA
                        </div>
                        <div className=" text-white text-sm">
                            Age:- 29 Year
                        </div>
                    </div>
                </div>

                <div className="text-sm ">
                    <div className='text-sm  fontPoppins flex items-center gap-2 text-white'>
                        <IoEyeSharp className='' size={15} />
                        17,213 Views
                    </div>
                    <div className='text-sm  fontPoppins flex items-center gap-1 text-white '>
                        <SlCalender className='' size={15} />&nbsp;
                        {dayjs().subtract(1, 'day').format("DD MMM YYYY")}
                    </div>
                </div>

            </div>

            <div className="py-4 px-2">
                <img src="/main/hk_images/c1.webp" alt="" className='sm:w-3/4 w-full mx-auto  !rounded-md ' />
            </div>
        </section>
    )
}

export default Header