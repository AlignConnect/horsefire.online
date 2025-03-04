import dynamic from 'next/dynamic';
import React from 'react'



const OrderBtn = dynamic(() => import('../components/orderNow'));

const Content = () => {
    return (
        <div className='px-2'>


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

                <OrderBtn />


                {/* <p className='font-semibold'>
                    राजेश पर हुए ये प्रभाव अचंभे की बात नहीं है।
                </p> */}

            </div>

        </div>
    )
}

export default Content