"use client"
import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import dynamic from 'next/dynamic';

const YoutubeFrame = dynamic(() => import('./YoutubeFrame'), {
    loading: () => <p>load</p>
});


const OrderNow = dynamic(() => import('./Ordernow'), {
    loading: () => <p>Header Loading</p>
});

const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_2'), {
    loading: () => <p>loader</p>
});

const SecondContant = () => {
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current?.slickNext();
    };

    const previous = () => {
        sliderRef.current?.slickPrev();
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
        <section className='fontNoto'>
            <div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0c0e26f0-9439-44e2-1be9-a4925ce83f00/public" alt="" className='sm:w-1/3 w-1/2 mx-auto py-3' />
            </div>


            <p className='font-semibold leading-loose'>
                आज हजारों लोग <strong className="text-red-700">HORSE FIRE TABLET</strong> से लाभान्वित हो रहे हैं और अपने दांपत्य जीवन को फिर से जीवंत बना चुके हैं...
            </p>

            <div className="bg-green-700 text-white font-semibold text-center text-2xl px-2 pt-3 rounded sm:my-1 my-3">
                🔥 <span className="font-bold">Horse Fire Tablet</span> – अब देर नहीं, प्रदर्शन में बेमिसाल फर्क लाएं!
            </div>



            <section>
                <div className="w-full sm:max-w-4xl mx-auto sm:py-7 pt-6">
                    <div className="fontPoppins font-semibold text-center py-4 text-3xl sm:text-4xl">
                        Customer's Opinion
                    </div>

                    <div className="fontPoppins mx-1 pb-4 sm:pb-7 slider-container">
                        <Slider ref={sliderRef} {...settings}>
                            <div key={1}><YoutubeFrame vid='BnoIvnZh4eY?' /></div>
                            <div key={2}><YoutubeFrame vid='6ZHfxP7C-ek' /></div>
                            <div key={3}><YoutubeFrame vid='yFVH97V3J2c' /></div>
                        </Slider>

                        <div className='flex justify-between items-center gap-1 text-sm'>
                            <button className="button cursor-pointer flex items-center" onClick={previous}>
                                <BiSkipPrevious size={20} />Previous
                            </button>
                            <button className="button cursor-pointer flex items-center" onClick={next}>
                                Next<BiSkipNext size={20} />
                            </button>
                        </div>
                    </div>
                    <OrderNow />

                    <MostSelling />


                </div>
            </section>
        </section>
    );
};

export default SecondContant;
