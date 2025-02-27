import dynamic from "next/dynamic";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';


import { IoIosArrowDown } from "react-icons/io";

const OrderBtn = dynamic(() => import("../components/orderNow"), {
  loading: () => <p>loader</p>,
});
const Story = () => {




  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };







  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb slick-dots_custom h-[170px]",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  const carouselVideo = [

    "5x-NRBXypu0?si=aD0hC9Dq4PqVgMoR",
    "bPImwMmIkNs?si=z9j-AceNNQ8dXPyE",
    "dUvWX4anBK4?si=-da_oT3AZBuAkqkY"


  ]





  const all_benefits = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div className=" bg-[#fff9ef] rounded-xl py-3 mx-2 " key={key}>
          <img
            src={e.benefits_img}
            className="w-5/6 mx-auto p-2 rounded-xl"
            alt="benefits_imgs"
          />
          <div className="fontNoto text-center text-[1rem] md:text-[1.2vw] leading-tight font-semibold md:px-2 pt-2">
            {e.benefits_content}
          </div>
        </div>
      );
    });
  };

  const settings_key_benifits = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  };


  const Ingrediants_all = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div className=" bg-[#fff9ef] rounded-xl pt-8 pb-4 mx-1 my-2 " key={key}>
          <div className="text-[#a06103]  text-center text-[1.6rem] md:text-[1.4vw]  font-extrabold ">
            {e.Ingrediants_title}
          </div>
          <img
            src={e.Ingrediants_img}
            className="w-4/6 mx-auto p-2 rounded-xl"
            alt="benefits_imgs"
          />
          <div className=" text-center text-[1.1rem] md:text-xl leading-tight font-semibold md:px-6 pt-2  text-gray-700">
            {e.Ingrediants_content}
          </div>
        </div>
      );
    });
  };

  //---------------------------

  return (
    <div className="sm:pt-5">
      {/* //----  key benefits   - -- --- */}



    </div>
  );
};

export default Story;
