import { changeSelectedProduct } from "@/redux/slices/ProductInfo";
import dynamic from "next/dynamic";
import React from "react";
const PopUp = dynamic(() => import("./FormPop"));
import { MdStarHalf, MdStarRate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ShiProcket from "../../commonUse/shiprocket";
const SelectProduct = dynamic(() => import("../../commonUse/SelectProduct"));
const OrderBtn = dynamic(() => import('../components/orderNow'));





const Sec1 = () => {





  const Benifits_brc = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div className="flex items-center gap-2" key={key}>
          <img
            src={e.img_benifits}
            className="md:w-10 w-8 py-1 "
            alt="benifits"
          />
          <div className="fontNoto md:text-[1.1vw] text-[1.2rem] font-semibold text-black mb-1 mt-3">
            {e.benifits_content}
          </div>
        </div>
      );
    });
  };



  const { allVariants, selectProducts } = useSelector(state => state.productInfo);


  const dispatch = useDispatch();

  return (
    <div className="pt-4 sm:pt-5">



      <div className=" px-3 sm:px-2">
        <p className='px-2 py-1 text-justify indent-10 md:indent-0'>
          मेरा नाम हितेश कुमार है, और मैं आपके सामने लाया हूँ अपने स्टेमिना और आतंरिक क्षमता बढ़ाने का आयुर्वेदिक तरीका।
        </p>



        <div className="pt-2 md:pt-4">
          <div className="fontNoto text-xl md:text-3xl font-extrabold">
            <span className="">&#x201C;</span>इस जड़ी-बूटियों से पाएं आयुर्वेदिक शक्ति:
          </div>

          <div className="bg-gray-200 rounded-md my-2" >
            <ul className='text-black text-justify fontNoto text-[1.1rem] md:text-xl py-3 px-2 ms-8 list-disc'>
              <li>
                आपका वैवाहिक जीवन सुखी हो जायेगा
              </li>
              <li>
                स्वपन दोष गायब हो जाएगा।
              </li>
              <li>
                आतंरिक क्षमता बढ़ जाएगी।
              </li>
              <li>
                आपका मानसिक जीवन बेहतर हो जाएगा।
              </li>
              <li>
                आपको कभी निराश नहीं होना पड़ेगा।
              </li>
            </ul>
          </div>

          <p className='py-2 font-semibold italic'>
            मैं इसका सिर्फ वादा नहीं कर रहा हूँ, पर दिखा सकता हूँ, वैज्ञानिक प्रयोगों के माध्यम से।
          </p>

          <p className='text-justify py-2'>
            आप पहली बार इस समस्या का सामना कर रहे हैं, या पहले इसे अन्य तरीकों से बेहतर करने की कई बार कोशिश कर चुके हैं - इससे कोई फर्क नहीं पड़ता। मेरे पास आपके लिए खुशखबरी है।
          </p>

          <div className=" py-2">
            <img src="/main/hfs_images/sd2.jpg" alt="" className='w-full rounded-md ' />
          </div>

          <p className='text-justify py-1'>
            यदि आपने पहले किन्हीं दवाओं के साथ इस समस्या को बेहतर करने की कोशिश की है, तो आप जानते हैं कि सभी प्रयास व्यर्थ रहे थे और यदि कोई प्रभाव हुआ भी, तो उससे केवल इरेक्शन में सुधार हुआ और वह भी बस अस्थायी तौर पर। अगर आप पहली बार इसका प्रयास कर रहे हैं तो आप भाग्यशाली हैं।
          </p>



          <OrderBtn />



          <p className='text-justify py-2'>
            अब आप सही तरीके के बारे में जान जाएँगे, और बहुत सारे पैसे बचा पाएंगे जो बेकार उत्पादों पर खर्च हो सकते थे। मैं आपको अपने सहायक राजेश की एक असली तस्वीर दिखाना चाहता हूँ। उसकी आतंरिक क्षमता बिल्कुल एक ताकतवर मर्द की तरह बढ़ गई, और वो अब अंदर से खुश भी रहने लगा है।
          </p>

          <div className=" py-2">
            <img src="/main/hfs_images/pro_cup.jpg" alt="" className='w-full rounded-md ' />
          </div>


          <div className='text-center text-gray-600 pb-2 pt-2 font-semibold fontNoto md:text-md text-sm'>
            <div>(इस का 2 हफ्तों तक प्रयोग करने के बाद यह प्रभाव सामने आया।)</div>
          </div>

          <div className="bg-gray-200 rounded-md my-2" >
            <ul className='text-black fontNoto text-[1.1rem] md:text-xl py-3 px-2 ms-8 list-disc'>
              <li>
                उसका वैवाहिक जीवन सुधर गया है।
              </li>
              <li>
                अब उसका स्टेमिना बढ़ गया है।
              </li>
              <li>
                उसकी मानसिक स्थिति बेहतर हो गई है।
              </li>
              <li>
                इरेक्शन लंबे समय तक बना रहता है, और पार्टनर के साथ रोमांस करने की उत्सुकता भी बनी रहती है।
              </li>
              <li>
                उसकी कामेच्छा और टेस्टोस्टेरोन का स्तर बढ़ गया, और बिस्तर में रोमांस करने की क्षमता में बहुत सुधार हुआ है।
              </li>
            </ul>
          </div>



          {/* <p className='font-semibold'>
                    राजेश पर हुए ये प्रभाव अचंभे की बात नहीं है।
                </p> */}

        </div>
        {/* 

        <div className=" text-black text-start px-2 py-2 sm:p-4 rounded-lg sm:mt-4 mt-2 -mx-1 border border-yellow-800 border-dashed">
          <h3 className="text-lg font-semibold">OFFER</h3>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li className="poppinsFont">Get {10}% instant discount on online payment</li>
            <li className="poppinsFont">COD available</li>
          </ul>
        </div> */}


        {/* 
        <div className="flex items-center py-2 space-x-2 mt-4 poppinsFont" id="buynow">
          <span className="text-gray-500 text-lg line-through">
            ₹{parseInt(selectProducts?.compare_at_price)}
          </span>
          <span className="text-4xl font-extrabold text-gray-900">
            <span>₹{parseInt(selectProducts?.price)}</span>
          </span>
          <span className="clip_off text-sm font-semibold bg-red-700 text-white px-4 py-0.5 ">
            {parseInt(
              ((selectProducts?.compare_at_price - selectProducts?.price) /
                selectProducts?.compare_at_price) *
              100
            )}
            % off
          </span>
        </div> */}

        {/* Size Info */}
        {/* <div className="flex items-center my-2 poppinsFont">
          <span className="text-lg font-semibold">Size:</span>
          <span className="bg-red-100 text-red-600 font-semibold py-1 px-5  rounded-full ml-2">
            {selectProducts?.title}
          </span>
        </div> */}



        {/* 
        <h1 className="text-center sm:text-start text-[28px] sm:text-4xl font-bold mt-8 poppinsFont">Buy more ,Save more !</h1>

        <h1 className="text-gray-600 poppinsFont text-[16px] sm:text-lg sm:mt-3 text-center sm:text-start">Don't Miss out on these amazing deals!</h1>
 */}



      </div>

      <SelectProduct />
      {/* <ShiProcket /> */}




      {/* <PopUp /> */}
    </div>
  );
};

export default Sec1;
