import React from 'react'
import dayjs from "dayjs";
const Header = () => {
    return (
        <section className=''>




            <div className="bg-[#d11d27] py-3 flex justify-between items-center px-2">

                <div className="flex items-center justify-center  gap-1 py-2">
                    <div className="">
                        <img src="/main/htb_images/p6.webp" alt="" className='w-16 md:w-20 mx-auto' />
                    </div>
                    <div className="">
                        <div className="flex items-center gap-1">
                            <div className="fontPoppins uppercase text-yellow-500 md:text-xl text-md font-extrabold">
                                Horsefire Tablet
                            </div>
                            <img src="/main/home_images/verify.svg" alt="" className='w-4' />
                        </div>
                        <div className="fontPoppins text-white text-[0.7rem]">
                            THE GOOD MEN SECRET
                        </div>
                    </div>
                </div>
                <div className="fontNoto text-center font-semibold text-md md:text-md pt-2 text-white">
                    *विज्ञापन-संबंधी
                </div>
            </div>

            <div className="fontNoto text-center text-2xl sm:text-4xl pt-5 sm:pt-8 pb-2 font-extrabold px-2">
                पार्टनर के साथ लम्बी पारी खेलना चाहते है तो ये जान लें!
            </div>





            {/* <hr className='my-3' /> */}

        </section>
    )
}

export default Header