import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const BtnOrder = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn1'))

const Section2 = () => {
    return (
        <section className={noto.className}>

            <h2 className='text-[29px] text-center font-bold my-2'>खुशहाली ने दी दरवाजे पर दस्तक</h2>

            <div className="w-full">
                <img src="/main/og_images/im1.jpg" alt="asd" loading="lazy" className="w-full" />
            </div>

            <div className='mt-4 flex justify-center'>
                <BtnOrder />
            </div>

            <p className="my-2">
                एक दिन मैंने एक भारत मूल के मशहूर पोर्न स्टार निक्स इंडियन का आर्टिकल पढ़ी जिमसे उनके दमदार बॉडी बड़े लिंग और लम्बे सेक्स का राज छपा था। उसमे प्रश्न था की आप अपनी फिटनेस कैसे मेंटेन करते है? आपका लिंग इतना लम्बा मोटा और सेक्स प्रदर्शन इतना बेहतर कैसे है?
            </p>

            <small className="px-2">replied by niks indian</small>

            <p className="bg-[#017bff] text-white pt-2 px-2 rounded-xl">
                निक्स इंडियन"- इन सभी सवालो का एक ही जवाब है प्राकृतिक जड़ीबूटियां ! जी हाँ मैं भारतीय मूल का हूँ और अमेरिकन, UK पोर्न इंडस्ट्री में सालों से काम कर रहा हूँ। भारत की कुछ मशहूर जड़ीबूटियां है जो पुरुषों के लिए वरदान है। भारत से इन जड़ीबूटियों को एक्सपोर्ट किया जाता है। पोर्न इंडस्ट्री के पुरुष द्वारा सख्त लिंग और ज्यादे देर तक सेक्स करने के लिए इन जड़ीबूटियों के मिश्रण से बने Horse Fire Tablet का इस्तेमाल करते है।
            </p>

            <h2 className='text-[29px] text-center font-bold mt-5 mx-2'>विशेष सुविधा है उपलब्ध</h2>

            <p>
                <span className="text-red-600 font-bold">
                    निक्स ने आगे कहा उन पुरुषों
                </span>
                &nbsp;की लिए जिनकी समस्या गंभीर है और सामान्य गोली असर नहीं कर रही उनके लम्बाई, वजन और उम्र का आंकलन कर एक्सपर्ट्स द्वारा
                <span className="text-red-600 font-bold">
                    &nbsp;कस्टमाइज्ड दवा तैयार की जाती है जिससे गारंटीड लाभ मिलता है।
                </span>
            </p>

            <h2 className='text-[29px] text-center font-bold pt-5 mx-2'>मैंने तुरंत आर्डर किया..</h2>

            <p>
                मैंने ख़ुशी से उछल पड़ी आखिर वो दिन आने वाला था जो मैं चाहती थी। बिना देर किये मैंने तुरंत सर्च करके <span className="text-red-600 font-bold"> Horse Fire Tablet आर्डर कर दिया। </span> यह कंपनी ले ऑफिसियल साइट के आलावा Amazon, Flipkart, पर भी उपलब्ध है। ये देख कर मेरा <span className="text-red-600 font-bold"> विश्वास और भी ज्यादा बढ़ गया की ट्रस्टेड वेबसाइट्स पर लिस्टेड है।</span>
            </p>

            <div className="w-full">
                <img src="/main/og_images/im2.png" alt="asdds" loading="lazy" className="w-full" />
            </div>


            <div className='mt-4 flex justify-center'>
                <BtnOrder />
            </div>


        </section>)
}

export default Section2