import dayjs from 'dayjs'
import React from 'react'
import { IoEyeSharp } from 'react-icons/io5'
import { SlCalender } from 'react-icons/sl'



const Header = () => {
    return (
        <section>


            <div className="">


                <div className="bg-[#F1F6F9] flex items-center justify-between px-3 py-4 my-2">

                    <div className="fontPoppins font-semibold text-[#ff0000] text-[1.1rem] sm:text-2xl bg-black px-4 md:pt-1 sm:pb-1 rounded-[3px]">
                        <span className='text-red-500'> HORSEFIRE</span> <span className='text-[#f8b548]'> TABLET</span>
                    </div>


                    <div className='fontNoto md:text-xl text-md font-semibold '>
                        *विज्ञापन-संबंधी
                    </div>
                </div>



                <hr className='my-3' />





                <div className="fontNoto text-xl md:text-3xl font-extrabold text-center py-1 px-1">
                    <span className="">&#x201C;</span>क्या आप भी एक ताकतवर मर्द की तरह अपना स्टैमिना और आंतरिक क्षमता बढ़ा कर दमदार प्रदर्शन करना चाहते है? अगर हाँ तोह आगे पढ़े।
                </div>


                <div className="px-2 py-2">
                    <img src="/main/hfs_images/sad_couple.jpg" alt="" className='w-full rounded-md ' />
                </div>


                <div className=" border border-black  rounded-lg py-2 my-3 mx-2">


                    <div className="grid grid-cols-12 items-center justify-center gap-2">

                        <div className=" col-span-8 flex items-center gap-2 ">
                            <div className="pl-2">
                                <img
                                    className='w-14 sm:w-20'
                                    src="/main/hfs_images/hitesh.png"
                                    alt='Hitesh'
                                />
                            </div>
                            <div className="">
                                <div className="font-semibold fontKalnia text-md md:text-xl">
                                    Hitesh Kumar
                                </div>
                                <div className="fontPoppins text-black text-sm">
                                    Age:- 29 Year
                                </div>
                            </div>
                        </div>

                        <div className="col-span-4 mx-auto">
                            <div className='flex items-center gap-2 text-black'>
                                <div className="fontArya text-black font-semibold px-3 md:text-xl text-sm  pt-1">
                                    <a href="#form">
                                        अभी ऑर्डर करे
                                    </a>
                                </div>
                            </div>
                            <div className='text-[0.7rem]  fontPoppins flex items-center gap-1 text-black '>
                                <SlCalender className='' size={15} />&nbsp;
                                {dayjs().subtract(1, 'day').format("DD MMM YYYY")}
                            </div>
                        </div>


                    </div>

                </div>

                <p className='px-2 py-1 text-justify indent-10 md:indent-0'>
                    मेरा नाम हितेश कुमार है, और मैं आपके सामने लाया हूँ अपने स्टेमिना और आतंरिक क्षमता बढ़ाने का आयुर्वेदिक तरीका।
                </p>


            </div>




        </section>
    )
}

export default Header