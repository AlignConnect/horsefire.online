'use client';
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6'


const Header = () => {

    const [views, setViews] = useState(2367);
    useEffect(() => {
        const interval = setInterval(() => {
            const randomIncrement = Math.random() < 0.5 ? 1 : 2;
            setViews((prev) => prev + randomIncrement);
        }, 7000 + Math.floor(Math.random() * 2000));
        return () => clearInterval(interval);
    }, [views]);


    return (
        <section className=''>

            <div className='sm:text-lg text-md bg-yellow-500 fontPoppins font-semibold sm:text-center'>

                <div className="flex items-center justify-center">
                    

                    <div className="fontNoto pt-2">
                        *विज्ञापन-संबंधी
                    </div>
                </div>


            </div>



            <div className="">

                <div className="w-full sm:max-w-7xl mx-auto py-7 sm:py-10">

                    <div className="grid sm:grid-cols-2 items-center justify-center bg-[#fbf7f4] mx-2 py-3 rounded-xl box_shaddow">

                        <div className="">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3647ef1e-6101-431e-ec1a-85b6253bfb00/public" alt="Couple" className=" sm:w-2/3 w-[90%] mx-auto py-3" />
                        </div>


                        <div className="">
                            <div className=" sm:py-3 py-3 px-2">

                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7fbe888a-3a70-4d34-995f-70cc440a8800/public" alt="" className='sm:w-24 w-10 px-1' />

                                <div className='text-[1.4rem] md:text-3xl fontNoto sm:py-10 py-3 font-extrabold text-center sm:text-justify sm:pr-7'>
                                    45  साल के बाद  बढ़ती उम्र के साथ, कई लोगों को यौन जीवन में कमी का सामना करना पड़ता है। लेकिन अब बढ़ती उम्र के साथ भी पुरूष लगातार पांच बार यौन संबंध बना सकते हैं। बिना थके वो भी अपनी महिला साथी को संतुस्ट कर सकते।
                                </div>

                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7fbe888a-3a70-4d34-995f-70cc440a8800/public" alt="" className='sm:w-24 px-1 w-10 scale-x-[-1] scale-y-[-1] ms-auto mr-2' />

                            </div>

                            <div className="flex items-center justify-between sm:pr-7 px-2">
                                <div className="flex gap-2 items-center px-2">
                                    <FaEye /> <strong>{views}</strong>
                                </div>
                                <div className="flex gap-2 items-center px-2">
                                    <FaRegCalendarAlt />
                                    <div className="fontPoppins font-semibold">{dayjs().subtract(2, 'days').format("DD MMM YYYY")}</div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Header