import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";
import { FaStar } from "react-icons/fa";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn1'));


const Section2 = () => {
    return (
        <section className={noto.className}>

            <div className="bg-[url('/main/hm_images/wall.jpg')] my-4">

                <h1 className="py-5 text-center text-4xl font-black">Horse fire के बारे में Experts की राय !</h1>

                <div>
                    <div className="rounded-xl bg-[#017bff] back-clip pt-5 px-3 pb-2 text-white text-lg">
                        Horse Fire Tablet हाई क्वालिटी जड़ीबूटियों का अच्छा मिश्रण है। इसके इस्तेमाल से पुरुष आसानी से अपनी मरदाना ताकत बढ़ा सकते है। Horse Fire Tablet में वो हर तत्व उचित मात्रा में मिलाया गया है जो मर्दाना कमजोरी पर बहुत सटीक असर के लिए चाहिए। मैं अपने पेसेंट्स को इसे खाने का सुझाव भी देता हूँ।
                    </div>
                    <div className="flex items-center m-3">
                        <div>
                            <img src="/main/hm_images/dr1.png" alt="sdfsdf" loading="lazy" />
                        </div>
                        <h3 className="font-bold text-lg">Dr.Harisinh Solanki</h3>
                    </div>
                </div>


                <div>
                    <div className="rounded-xl bg-[#017bff] back-clip pt-5 px-3 pb-2 text-white text-lg">
                        एक यौन विशेषज्ञ के तौर पर मैं ये बात आप लोगो को बताना चाहता हूँ की टाइमिंग, इरेक्शन या पावर बढ़ाने के लिए नीली गोली न खाये उसके बहुत बुरे साइड इफेक्ट्स होते है। Horse Fire Tablet में इन समस्याओं को जड़ से मिटाने वाली गुणकारी जड़ीबूटियां शामिल है। इसे निश्चिंत होकर खाये और यौन समस्या मिटायें।
                    </div>
                    <div className="flex items-center m-3">
                        <div>
                            <img src="/main/hm_images/dr2.png" alt="sdfsdf" loading="lazy" />
                        </div>
                        <h3 className="font-bold text-lg">Dr.Pk Gupta</h3>
                    </div>
                </div>
            </div>

            <div className='py-3 flex justify-center'>
                <OrderBtn />
            </div>

            <div className='w-full'>
                <img src="/main/hm_images/pp.png" alt="asdasds" loading='lazy' className='w-[75%] md:w-[50%] mx-auto' />
            </div>

            <h1 className="my-5 text-[2rem] leading-[40px] font-black text-center">Horse fire की विशेष उपयोगिताएं</h1>


            <ul className='w-[90%] md:w-[50%] mx-auto text-xl '>
                <li>
                    <span className='flex gap-3'>
                        <FaStar className="text-[orange]" /> टेस्टोस्टेरोन हॉर्मोन्स बढ़ाता है।

                    </span>
                </li>
                <li>
                    <span className='flex gap-3'>
                        <FaStar className="text-[orange]" />   15 दिनों में 5X टाइमिंग बढ़ा सकता है।

                    </span>
                </li>
                <li>
                    <span className='flex gap-3'>
                        <FaStar className="text-[orange]" />   जल्दी झड़ने की समस्या जड़ से ख़त्म करे

                    </span>
                </li>
                <li>
                    <span className='flex gap-3'>
                        <FaStar className="text-[orange]" /> पार्ट में बढ़ाएं जोरदार इरेक्शन

                    </span>
                </li>
                <li>
                    <span className='flex gap-3'>
                        <FaStar className="text-[orange]" />  भरपूर एनर्जी और स्टैमिना बढ़ाएं

                    </span>
                </li>
                <li>
                    <span className='flex gap-3'>
                        <FaStar className="text-[orange]" />  धात गिरने की समस्या मिटाये

                    </span>
                </li>
                <li>
                    <span className='flex gap-3'>
                        <FaStar className="text-[orange]" />   जोश और उत्तेजना का स्तर बढ़ाए
                    </span>
                </li>

                <li>
                    <span className='flex gap-3'>
                        <FaStar className="text-[orange]" /> शारीरिक ताकत और इम्युनिटी बूस्ट करे
                    </span>
                </li>
            </ul>


        </section>
    )
}

export default Section2