import React, { useRef } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";


const YoutubeFrame = dynamic(() => import('./YoutubeFrame'), {
    loading: () => <p>load</p>
});


const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});

const Customer_satisfied = () => {


    const reasons = (arr) => {
        return arr?.map((e, key) => {
            return <div key={key} className='sm:py-5 py-2 px-1 mx-2 '>
                <img src={e.reason_img} className='mx-auto md:w-16 w-12 pt-2' alt='reason_img' loading="lazy" />
                <div className='md:text-xl text-sm font-extrabold text-center text-black pt-3'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.reason_title }}
                    />
                </div>
            </div >
        })
    }

    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickNext();
    };

    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section>

            <div className="bg_review">

                {/* <div className="w-full sm:max-w-[70%] mx-auto">


                    <div className="fontBebas uppercase sm:text-[4vw] text-[3rem] font-extrabold  text-center pt-5 text-white">
                        satisfied  <span className='text-red-500'>customer's</span>
                    </div>


                    <p className='sm:text-[1.6vw] text-[1.2rem] text-center fontNoto font-semibold text-white sm:py-6 py-4 leading-tight px-2'>
                        हॉर्सफायर टेबलेट के प्रभाव को ग्राहकों द्वारा सराहा जाता है, निचे वीडियो देखें
                    </p>


                    <div className="max-w-4xl mx-auto py-2">


                        <div className="mx-1 pb-4 sm:pb-7 slider-container">

                            <Slider ref={slider => {
                                sliderRef = slider;
                            }}
                                {...settings}
                            >
                                <div key={1}>
                                    <YoutubeFrame vid='-DQ86uxfm_w?si=RDMbEDDmt6FmQBr9' />
                                </div>
                                <div key={2}>
                                    <YoutubeFrame vid='TmeMJWlz0BI?si=dxDDiOWM_eKLWwkQ' />
                                </div>
                                <div key={3}>
                                    <YoutubeFrame vid='_C8qq16Hl7U?si=EmhN_GRrbC7pPJof' />
                                </div>

                            </Slider>

                            <div className='flex justify-between items-center gap-1 text-sm text-white'>
                                <button className="button cursor-pointer flex items-center" onClick={previous}>
                                    <BiSkipPrevious size={20} />Previous
                                </button>
                                <button className="button cursor-pointer flex items-center" onClick={next}>
                                    Next<BiSkipNext size={20} />
                                </button>
                            </div>
                        </div>
                    </div>





                </div> */}
            </div>

            <div className="bg-[#fbebd8]">
                <div className="sm:max-w-3xl mx-auto pt-5 sm:py-7">

                    <div className="grid sm:grid-cols-2 items-center ">

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2282bf7f-001b-4a17-0c68-c1714dc16900/public" alt="" className='sm:w-4/6 w-5/6 mx-auto ' />


                        <div className="">

                            <div className="fontBebas uppercase sm:text-[3vw] text-[2rem] font-extrabold  sm:text-left text-center pt-5 text-black">
                                Also <span className='text-red-500'>Available On...</span>
                            </div>

                            <div className="grid sm:grid-cols-3 grid-cols-2 items-center sm:justify-normal justify-center py-2 sm:border-none border border-solid border-gray-400 rounded-lg mx-3">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1369a0a5-d191-4392-bf47-5c170ecb8600/public" alt="" className="w-5/6 sm:w-4/5     mx-auto" />
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public" alt="" className="w-5/6 sm:w-4/5 mx-auto" />

                            </div>

                            <p className="fontPoppins text-lg py-3">
                                Horsefire Tablet is also available on trusted platforms like Flipkart and Amazon. You can also place your order over there.
                            </p>



                        </div>

                    </div>

                </div>

                <div className="sm:max-w-3xl mx-auto">


                    <div className="bg-white rounded-md mx-3 sm:my-5 mb-8 rsn" >

                        <div className='fontNoto grid md:grid-cols-4 grid-cols-2 md:gap-2  mx-1'>
                            {
                                reasons([
                                    {
                                        reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1091ddec-5aac-4edc-9cf7-748af296a400/public",
                                        reason_title: "100% मनी<br/> बैक गारंटी "
                                    },
                                    {
                                        reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b2e4e47e-6d1f-4c84-c85b-3f2a3512f600/public",
                                        reason_title: "10 लाख+<br/> संतुष्ट ग्राहक "
                                    },
                                    {
                                        reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/77613456-74cc-497e-c30f-fdc2667ca900/public",
                                        reason_title: "COD पेमेंट<br/> उपलब्ध "
                                    },
                                    {
                                        reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3f2dca83-5221-43cc-8919-28b35c924300/public",
                                        reason_title: "Flipkart, Amazon<br/> पर लिस्टेड"
                                    }
                                ])
                            }
                        </div>
                    </div>

                    <div className="pb-5">
                        <OrderBtn />
                    </div>


                    <div className="fontNoto text-center sm:text-2xl text-2xl font-extrabold py-4  px-3">
                        ज्यादा न सोचे आज अपनाये और अपने रोमांस को उच्च सिखर पर ले जाये!
                    </div>

                </div>
            </div>

        </section>

    )
}

export default Customer_satisfied