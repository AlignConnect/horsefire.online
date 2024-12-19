"use client"
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import { TbMoneybag } from 'react-icons/tb'
import { CiDeliveryTruck, CiDiscount1 } from 'react-icons/ci'
import { GiTakeMyMoney } from 'react-icons/gi'

const Fliplink = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn1'))

const Sec1 = () => {


    const [WindowWidth, setWindowWidth] = useState();

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        // Cleanup function to remove the event listener when component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);




    return (
        <section className='text-center bg-black'>

            <div className=''>
                <div className='pb-3 mb-md-3 text-center'>
                    <img src="/images/shurya1.jpg" alt="dsf" loading='lazy' className='w-full md:w-[40%] mx-auto' />
                </div>
            </div>


            <section className='text-white m-3 text-start'>

                <div className='mx-auto md:w-[60%] w-full'>
                    <h1 className='text-3xl md:text-4xl font-semibold my-3'> Horse Fire Tablet क्यों?</h1>

                    <p className='devb text-xl my-2'>
                        Horse Fire एक श्रेष्ठ पुरुष-शक्ति वर्धक उत्पाद है जिसे आयुर्वेद की प्रीमियम क्वालिटी और शक्तिशाली जड़ीबूटियों के अनोखे मिश्रण से बनाया गया है। इसमें शिलाजीत, अश्वगंधा और गोक्षुरा जैसे श्रेष्ठ टेस्टोस्टेरोन बूस्टर हर्ब्स समाहित है।
                    </p>

                    <p className='devb text-xl my-2'>
                        13 बेशकीमती जड़ीबूटियों से बना Horse Fire Tablet पुरुष कमजोरी मिटाकर, स्टैमिना, जोश और उत्तेजना बढ़ाने में मदद करता है। पुरुष क्षमता बढाकर महिला पार्टनर को संतुष्टि देने एवं कपल के बीच प्यार बढाकर वैवाहिक जीवन को खुशहाल बनाने में मदद करता है।</p>
                </div>

            </section>


            <div className='mx-auto py-3 md:w-[60%]  w-full flex justify-center'>
                <Fliplink />
            </div>



            <section className='px-3 py-2 container grid grid-cols-12 mx-auto bg-white rounded-xl items-center md:w-[900px] w-full' >



                <div className='col-span-12 md:col-span-6 block sm:hidden'>
                    <img src='/images/stars.webp' className='w-full' />
                </div>

                <div className='col-span-12 md:col-span-6 hidden sm:block'>
                    <img src='/images/str.webp' className='w-full' />
                </div>



                <div className='col-span-12 md:col-span-6 '>

                    <h3 className='text-4xl devb font-bold text-start py-2'> <span className='text-[#c56f00]'>Horse Fire</span> के फायदे</h3>

                    <ul className='list-disc text-start mx-auto'>
                        <li className='devb text-2xl ms-10'>टेस्टोस्टेरोन हॉर्मोन बढाए</li>
                        <li className='devb text-2xl ms-10'>अंग-अंग में रक्त संचार बेहतर करे</li>
                        <li className='devb text-2xl ms-10'>एनर्जी, स्टैमिना और जोश में बृद्धि करे</li>
                        <li className='devb text-2xl ms-10'>अवधि और कड़कपन में बृद्धि करे</li>
                        <li className='devb text-2xl ms-10'>जोरदार प्रदर्शन से, पार्टनर को संतुष्ट करें</li>
                    </ul>


                </div>




            </section>


            <div className="help_full mt-md-4 mb-md-5">
                <div className="help_full_container" style={{ color: "white" }}>

                    {WindowWidth > 768 ?
                        <div className="help_full_th" >
                            <div className="help_full_content">
                                <CiDeliveryTruck className='help_full_icon' />
                                <div className="">
                                    <h6 className="">FREE SHIPPING</h6>
                                    <p className="">Shipping on all prepaid orders</p>
                                </div>
                            </div>

                            <div className="help_full_content">
                                <GiTakeMyMoney className='help_full_icon' />
                                <div className="">
                                    <h6 className="">COD Available</h6>
                                    <p className="">Pay after recieving your pack</p>
                                </div>
                            </div>
                            <div className="help_full_content">
                                <TbMoneybag className='help_full_icon' />
                                <div className="">
                                    <h6 className="">Money Back Guarantee</h6>
                                    <p className="">10 days money back guarantee</p>
                                </div>
                            </div>
                            <div className="help_full_content">
                                <CiDiscount1 className='help_full_icon' />
                                <div className="">
                                    <h6 className="">Prepaid Offer</h6>
                                    <p className="">Save extra 10% on prepaid orders</p>
                                </div>
                            </div>
                        </div> :
                        <table className='help_full_table'>
                            <tr>
                                <th>
                                    <div className="help_full_content" >
                                        <CiDeliveryTruck className='help_full_icon' />
                                        <div className="help_full_content_1">
                                            <h6 className="" style={{ fontSize: WindowWidth > 768 ? '2rem' : '1.5rem' }}>FREE SHIPPING</h6>
                                            <p className="" style={{ width: '' }}>Shipping on all prepaid orders</p>
                                        </div>
                                    </div>
                                </th>
                                <th style={{ border: 'none', }}>
                                    <div className="help_full_content">
                                        <GiTakeMyMoney className='help_full_icon' />
                                        <div className="">
                                            <h6 className="">COD Available</h6>
                                            <p className="">Pay after recieving your pack</p>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                            <tr style={{ border: 'none' }}>
                                <th>
                                    <div className="help_full_content">
                                        <TbMoneybag className='help_full_icon' />
                                        <div className="">
                                            <h6 className="">Money Back Guarantee</h6>
                                            <p className="">10 days money back guarantee</p>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="help_full_content">
                                        <CiDiscount1 className='help_full_icon' />
                                        <div className="">
                                            <h6 className="">Prepaid Offer</h6>
                                            <p className="">Save extra 10% on prepaid orders</p>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </table>}
                </div>
            </div>

            <div className='mx-auto py-3 md:w-[60%]  w-full flex justify-center'>
                <Fliplink />
            </div>

        </section>
    )
}

export default Sec1