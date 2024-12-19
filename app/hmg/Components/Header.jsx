import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaChevronRight, FaEye, FaUser } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import dayjs from 'dayjs';

function Header() {




    return (
        <div>
            <div className="bg-[#050f10] flex justify-between items-center text-white py-4 px-3">
                <FaUser size={20} />
                <img src="/main//hmg_images/logo.png" alt="" className='w-52 sm:w-64' />
                <GiHamburgerMenu size={20} />
            </div>
            <div className='fontPoppins bg-[#567379] flex items-center justify-center gap-1 text-[0.8rem] sm:text-sm py-1 text-white'>
                Home<FaChevronRight size={10} /> Blog <FaChevronRight size={10} /> Health
            </div>

            <div className="fontNoto text-black text-xl sm:text-3xl md:pt-3 pt-2 bg-[#d6eaeb] w-80 md:w-3/4 mx-auto text-center font-extrabold rounded-md my-4 ">
                देर तक सेक्स करना चाहते है तो ये जान लें-
            </div>

            <div className="mx-2 my-2 rounded-lg border border-solid border-black">
                <img src="/main/hmg_images/headImage.jpg" alt="" className='!rounded-2xl w-full px-2 py-2 ' />

                <div className="flex justify-between items-center px-2 md:px-3 pb-2">
                    <div className="flex items-center gap-1">
                        <FaEye size={15} />
                        <div className="text-[0.7rem]">
                            3215
                        </div>
                    </div>
                    <div className="flex items-center gap-1 ">
                        <FaCalendarAlt size={15} />
                        <div className="text-[0.7rem]">
                            <span className="" > {dayjs().format("DD MMM YYYY")}</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Header