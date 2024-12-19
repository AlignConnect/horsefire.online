import dynamic from 'next/dynamic';
import React from 'react'



const OrderBtn = dynamic(() => import('../components/orderNow'), {
    loading: () => <p> Loading</p>
});

const Customer_exp = () => {
    return (
        <section className='w-full max-w-6xl mx-auto'>

            <hr />


            <div className="text-black text-justify fontNoto text-[1.1rem] md:text-xl py-3 px-2">
                कई प्रयोग ऐसे ही परिणामों की पुष्टि करते हैं। अध्ययनों में, हमने परीक्षण से पहले और बाद में स्वयंसेवकों के टेस्टोस्टेरोन के स्तर को मापा, साथ ही शरीर के आकार को भी। और अधिक मामलों में इस की प्रभावशीलता देखी गई है। और केवल स्वयंसेवक के बीच ही नहीं, बल्कि असली ग्राहकों में भी। उनके साथ घटी कहानियाँ काफ़ी दिलचस्प हैं:
            </div>

            <hr />


            <div className="grid sm:grid-cols-2 py-5 items-center gap-3 mx-3">


                <div className='chat_block'>
                    <img className='chat_icon' src='/main/ck_images/Hitesh.png' />
                    <div className='chat_bubble left'>
                        <div className='text-xl font-semibold'>Hitesh Kumar</div>
                        <div className='text-black text-justify fontNoto text-[1rem] md:text-md pt-5 pb-2 italic '>मुझमें बिल्कुल भी सहनशक्ति नहीं थी और दो मिनट की दौड़ के बाद ही मैं थक गया था। हालाँकि, अब प्रभाव इतना शानदार है कि मैं अब बिना थके घंटों काम कर सकता हूँ। और अब मुझमें किसी भी अन्य एथलीट जितना ही धैर्य है। मैं कहूंगा कि यह अब तक मेरे द्वारा आजमाया गया सबसे अच्छा उत्पाद है। <br />
                        </div>
                    </div>
                </div>

                <div className='chat_block'>
                    <img className='chat_icon' src='/main/ck_images/Manoj.png' />
                    <div className='chat_bubble left'>
                        <div className='text-xl font-semibold'> Manoj Srivastaw</div>
                        <div className='text-black text-justify fontNoto text-[1rem] md:text-md  pt-5 pb-2 italic '>Horsefire ने मुझे मेरी अपेक्षा से अधिक परिणाम दिये। चाहे मैंने कितनी भी मेहनत की हो, मेरी सहनशक्ति और ताकत ने मुझे कभी निराश नहीं किया। हालाँकि मेरी उम्र 36 साल है, लेकिन मेरी गति और सहनशक्ति किसी 20-25 साल के लड़के से कम नहीं है। अब मेरा पार्टनर भी मेरा दीवाना है.<br />
                        </div>
                    </div>
                </div>
            </div>
            <hr />


            <div className="fontPoppins text-[1.1rem] md:text-3xl font-extrabold pt-5 pb-2 text-center md:text-left ">
                <span className="">&#x201C;</span>Ingredients Behind <span className='text-red-600'>HORSEFIRE TABLET</span>
            </div>


            <img src="/main/ck_images/hft.png" alt="" className='w-full sm:w-3/6 mx-auto py-4' />


            <OrderBtn />


            <div className="text-black text-justify fontNoto text-[1.1rem] md:text-xl py-3 px-2">
                HorseFire Tablet अश्वगंधा, शिलाजीत, सफ़ेद मूसली, गोखुरा और केसर जैसी 16 जड़ीबूटियों से बना हुआ एक शुद्ध आयुर्वेदिक सेक्स स्टैमिना और टाइमिंग बूस्टर है।
            </div>

            <div className="text-black text-justify fontNoto text-[1.1rem] md:text-xl py-3 px-2">
                HorseFire Tablet के इस्तेमाल से पुरुष को इतनी एनर्जी, स्टैमिना और टाइमिंग मिल जाती है जिससे वो अपने महिला साथी को संतुष्ट कर सके। इसकी वजह से पूरे भारत में इसका इस्तेमाल तेजी से बढ़ा है। पुरुष इसके इस्तेमाल से अपनी यौन कमजोरी दूर कर रहे है और एक रोमांचक जीवन व्यतीत कर रहे है । यह प्रोडक्ट आयुष मंत्रालय भारत सरकार द्वारा प्रमाणित है और पूर्णतः आयुर्वेदिक है जिसका कोई भी साइड इफ़ेक्ट नहीं है।
            </div>

            <div className="text-center py-3">
                <div className="fontNoto text-md font-extrabold text-black">
                    Old Price:- <strike className="fontPoppins font-semibold text-red-500"> ₹4000</strike>
                </div>

                <div className="fontNoto text-md font-extrabold text-black">
                    New Price:-<span className="fontPoppins font-semibold text-green-500"> ₹2300</span>
                </div>
            </div>


            <img src="/main/ck_images/p8.webp" alt="" className='w-80 sm:w-3/6 mx-auto py-4' />

            <OrderBtn />


            <div className="fontPoppins font-semibold  sm:text-xl py-3 px-2 text-center">
                <span className='text-red-600'>Dosage:- </span>Take 1 Tablet per day with lukewarm milk or water for 1 month!
            </div>

            <div className="text-black text-justify fontNoto text-[1.1rem] md:text-xl py-3 px-2 font-semibold">
                आप भी "हॉर्सफायर टेबलेट" के इस्तेमाल से उन लाखों पुरुषों में शामिल हो जाये जो कभी निराश थे पर आज अपनी मैरिड लाइफ में काफी खुश और संतुष्ट है।
            </div>


        </section>
    )
}

export default Customer_exp