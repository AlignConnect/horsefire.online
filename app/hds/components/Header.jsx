import dynamic from "next/dynamic";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlCalender } from "react-icons/sl";
import dayjs from "dayjs";



const Sec1 = dynamic(() => import("./Sec1"), {
  loading: () => <p>loader</p>,
});

const Sec2 = dynamic(() => import("./Sec2"), {
  loading: () => <p>loader</p>,
});

const Header = () => {





  return (
    <section className="">

      <div className="bg-[#F1F6F9] fontNoto text-center font-semibold text-md md:text-sm pt-2 text-gray-500 mb-4">
        *विज्ञापन-संबंधी
      </div>



      <div className="fontNoto text-xl md:text-2xl font-extrabold text-center py-1 px-1">
        <span className="">&#x201C;</span>क्या आप भी एक ताकतवर मर्द की तरह अपना स्टैमिना और आंतरिक क्षमता बढ़ा कर दमदार प्रदर्शन करना चाहते है? अगर हाँ तोह आगे पढ़े।
      </div>

      <div className="py-4 px-2">
        <img src="/main/hk_images/c2.jpg" alt="" className='sm:w-full w-full mx-auto !rounded-md' />
      </div>


      <div className=" border border-black  rounded-lg py-2 my-3 mx-2">


        <div className="grid grid-cols-12 items-center justify-center gap-2">

          <div className=" col-span-8 flex items-center gap-2 ">
            <div className="pl-2">
              <img src="/main/ht_images/Vinod.png" alt="" className='sm:w-18 w-12' />

            </div>
            <div className="">
              <div className="font-semibold fontKalnia text-md md:text-lg">
                Hitesh Kumar
              </div>
              <div className="fontPoppins text-black text-sm">
                Age:- 29 Year
              </div>
            </div>
          </div>

          <div className="col-span-4 mx-auto">
            <div className='flex items-center gap-2 text-black'>
              <div className='fontPoppins md:text-sm text-md font-semibold '>
                Published on:
              </div>
            </div>
            <div className='text-sm  fontPoppins flex items-center gap-1 text-black '>
              <SlCalender className='' size={15} />&nbsp;
              {dayjs().subtract(2, 'day').format("DD MMM YYYY")}
            </div>
          </div>


        </div>

      </div>
      <Sec1 />
      {/*  <Sec2 /> */}
    </section>
  );
};

export default Header;
