import dynamic from 'next/dynamic';
import React from 'react'


const OrderBtn = dynamic(() => import('../components/orderNow'), {
    loading: () => <p> Loading</p>
});

const Story_ck = () => {
    return (
        <section className='w-full max-w-6xl mx-auto'>
            <div className="text-black text-justify fontNoto text-[1.1rem] md:text-xl py-3 px-2">
                आप पहली बार इस समस्या का सामना कर रहे हैं, या पहले इसे अन्य तरीकों से बेहतर करने की कई बार कोशिश कर चुके हैं - इससे कोई फर्क नहीं पड़ता। मेरे पास आपके लिए खुशखबरी है।
            </div>


            <img src="/main/ck_images/c11.jpg" alt="" className='sm:w-1/2 w-full mx-auto py-2' />



            <div className="text-black text-justify fontNoto text-[1.1rem] md:text-xl py-3 px-2">
                यदि आपने कभी दवा से इस समस्या से राहत पाने की कोशिश की है, तो आपको पता होना चाहिए कि आपके सभी प्रयास व्यर्थ थे और अगर यह काम भी करता है, तो इससे केवल आपके इरेक्शन में सुधार होता है, और केवल अस्थायी रूप से, जैसा कि आप शायद जानते हैं। यदि आप इसे पहली बार आज़मा रहे हैं, तो आप भाग्यशाली हैं। अब आप सही तरीका जान गए हैं और बहुत सारा पैसा बचा सकते हैं जो आप बेकार उत्पादों पर खर्च कर सकते थे। मैं आपको अपने सहायक राजेश की वास्तविक तस्वीर दिखाना चाहता हूं। उसकी आंतरिक शक्ति एक अधिकार प्राप्त व्यक्ति की तरह बढ़ गई है और अब वह भीतर से खुश महसूस करता है।
            </div>


            <hr />


            <div className="fontNoto text-[1.1rem] md:text-3xl font-extrabold pt-5 pb-2 text-center md:text-left ">
                <span className="">&#x201C;</span>आयुर्वेद की मदद से अपने वैवाहिक जीवन को खुशहाल कैसे बनाएं और स्तंभन क्रिया में सुधार कैसे करें?
            </div>


            <ul className='text-black text-justify fontNoto text-[1.1rem] md:text-xl py-3 px-2 ms-8 list-disc'>
                <li>
                    सब कुछ बहुत सरल है. एक बार जब ये गोलियाँ आपके शरीर में प्रवेश कर जाती हैं, तो आप अक्सर पाएंगे कि आप कुछ ही दिनों में स्फूर्ति महसूस करने लगते हैं। आपको अपना आहार या व्यायाम बदलने की ज़रूरत नहीं है। ये दवाएं स्वाभाविक रूप से आपके जीवन को बेहतर बनाती हैं।
                </li>
                <li className='pt-3'>
                    यह कोई जादू नहीं है, बल्कि पुरुष प्रदर्शन को बेहतर बनाने के लिए विज्ञान और आयुर्वेद की शक्ति है। यह अफ़्रीकी और आयुर्वेदिक जड़ी-बूटियों जैसे अफ़्रीकी मोरुंडो, शिलाजीत, अश्वगंधा और जयपाल के एक विशेष संयोजन का एक जटिल प्रभाव है, जो न केवल सहनशक्ति और आकार को तेजी से बढ़ाता है, बल्कि टेस्टोस्टेरोन के स्तर को भी बढ़ाता है। रक्त परिसंचरण और मानसिक स्वास्थ्य में भी सुधार होता है।
                </li>
            </ul>



            <div className="fontNoto text-[1.1rem] md:text-3xl font-extrabold pt-5 pb-2 text-center md:text-left ">
                <span className="">&#x201C;</span><span className='text-red-600 fontPoppins'>HORSEFIRE TABLET</span> के साथ उपचार के प्रभाव के आंकड़े। परिणाम प्रतिशत में व्यक्त किए गए हैं।
            </div>

            <img src="/main/ck_images/p5.webp" alt="" className='sm:w-1/2 w-80 mx-auto py-2' />

            <OrderBtn />

        </section>
    )
}

export default Story_ck