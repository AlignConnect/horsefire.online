import React from "react";

const FormPop = () => {
  return (
    <div className="sm:flex items-center px-3 justify-center my-5 text-center   gap-3  py-2">
      <div className="fontPoppins">Save 10% Extra on Prepaid Order</div>
      <div className=" bg-inherit ">
        <a
          href="#buynow"
          className="pop_imagehfv inline-block bg-red-700 text-white py-2 rounded-full text-xl px-10 font-bold"
        >
          ORDER NOW
        </a>
      </div>
    </div>
  );
};

export default FormPop;
