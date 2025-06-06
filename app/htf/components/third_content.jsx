"use client"
import dynamic from 'next/dynamic';
import React from 'react'


const Order_Now = dynamic(() => import('../components/orderNow'));
const third_content = () => {
    return (
        <div className='px-2'>

            <div className="fontNoto text-xl md:text-3xl font-extrabold py-2 px-1">
                <span className="text-red-600">&#x201C;HORSEFIRE TABLET </span>का ऑर्डर अभी देना क्यों ज़रूरी हैं।
            </div>



            <p className='text-justify py-2'>
                जब आपका शरीर का हिस्सा और स्टैमिना कम होता है, तो आप हमेशा शर्मिंदगी और आत्मविश्वास की कमी महसूस करते हैं। पर अब आप जान लीजिए कि आपने आयुर्वेदिक दवा ढूंढ ली है। कुछ साल पहले तक मुझे भी ऐसा ही लगता था। आपको बस अन्तिम कदम उठाना बाकी रह गया है।
            </p>


            <p className='text-justify py-2 font-semibold'>
                मेरा आपसे अनुरोध है क्योंकि मैं सच में चाहता हूँ कि आप अफ्रीकी मुलोंडो और आयुर्वेदिक जड़ी बूटियों के मिश्रण के शक्तिशाली प्रभाव को अनुभव करें।
            </p>

            <p className='text-justify py-2'>
                प्रयोगों से पता चला है कि उत्पाद का फार्मूला शुद्ध और प्राकृतिक है, और इसका कोई दुष्प्रभाव नहीं है। इसमें मुख्य रूप से दुर्लभ जड़ी बूटियों के प्राकृतिक अर्क शामिल हैं, और उनके प्रभावों की पुष्टि कई राष्ट्रीय प्रयोगशालाओं द्वारा की गई है। इसके फार्मूला का पेटेंट हो चुका है और वह गुप्त है और अभी हमें इसके अवयवों के बारे में जानकारी को किसी के साथ साझा करने का अधिकार नहीं है।
            </p>

            <div className=" py-2">
                <img src="/main/hfs_images/p5.webp" alt="" className='md:w-1/2 w-full mx-auto' />
                <Order_Now />
            </div>


            <p className='text-justify py-2 font-semibold'>
                आप चाहते हैं कि आप भी उन हज़ारों लोगों से जुड़ें, जिन्हें अपने स्वस्थ शरीर के कुछ हिस्से पर गर्व है?
            </p>

            <p className='text-justify py-2'>
                मैंने आपको बिना किसी परेशानी के इस के बारे में सारी जानकारी दी। अब आप जानते हैं कि यह कैसे काम करता है और यह आपकी मदद कैसे कर सकता है, साथ ही असली उपयोगकर्ताओं पर इसका क्या प्रभाव होता है इसके बारे में भी आप जान गए हैं। और मुझे पता है कि अपने स्वस्थ शरीर की राह में पहला कदम उठाना बहुत मुश्किल है। इसलिए, मैं वास्तव में आपकी मदद करना चाहता हूँ। लेकिन मैं आपको केवल एक विकल्प ही नहीं दे रहा हूँ, बल्कि सुझाव भी दे रहा हूँ
            </p>


            <div className="fontNoto text-xl md:text-3xl font-extrabold py-2 px-1">
                <span className="">&#x201C;</span>जानना ज़रूरी है:
            </div>

            <p className='text-justify py-2'>
                यह बहुत सरल है। आप केवल वास्तविक परिणामों के लिए भुगतान करेंगे, न कि वादों के लिए। इस सेवा को पाने के लिए, कृपया नीचे दिया गया फ़ॉर्म भरें और हम आपको फोन करेंगे।
            </p>

            <p className='text-justify py-1 font-semibold'>
                100% गारंटी। आपका ऑर्डर किसी लोगो, टिकट या उत्पाद के बारे में किसी तरह की जानकारी के बिना, एक बक्से में पैक होगा।
            </p>

            <p className='text-center text-2xl py-3 font-extrabold'>
                पूरी तरह से गुमनाम।
            </p>


            {/* <div className="text-center py-3">
                <div className="fontNoto text-md font-extrabold text-black">
                    Old Price:- <strike className="fontPoppins font-semibold text-red-500"> ₹4000</strike>
                </div>

                <div className="fontNoto text-md font-extrabold text-black">
                    New Price:-<span className="fontPoppins font-semibold text-green-500"> ₹2300</span>
                </div>
            </div>
 */}

            <img src="/main/hfs_images/p8.webp" alt="" className='md:w-1/2 w-5/6 mx-auto py-3' />


            <Order_Now />

        </div>
    )
}

export default third_content