import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari, Poppins } from "next/font/google";
const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn1'));

const Youtube = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeFrame'));

const Section1 = () => {
    return (
        <section className={`${noto.className} border px-4`}>


            <div className='text-4xl mt-4 mb-3 font-bold text-center'>
                <p className='text-[#04356f]'>ऐसे मिटाये समस्या,</p>
                <p className='text-[#0d9486]'>बढ़ाये प्यार</p>
            </div>

            <p>
                दोस्तों इस बात से दुनिया परिचित है की आयुर्वेद का जनक हमारा भारत है। लेकिन कुछ लोग अपने प्रोडक्ट अफ्रीकन जड़ीबूटियों, अमेरिकन जड़ीबूटियों से बना हुआ बताकर भारत में बेचते है जबकि अमेरिका जैसे देशों में आयुर्वेद का प्रचलन ही नहीं है। हमें गर्व है की हम भारतीय है और भारत वर्ष ने शिलाजीत, अश्वगंधा, गोक्षुरा, केसर, सफ़ेद मूसली जैसी अनेक पौरुषता वर्धक जड़ीबूटियों की खोज की। इनके नियमित इस्तेमाल से कमजोर से कमजोर पुरुष अपनी मर्दानगी में जोरदार इजाफा कर सकता है। इन्ही विशेष जड़ीबूटियों के शोधों का परिणाम है Horse fire Tablet !!!
            </p>

            <div className="w-full my-4">
                <img src="/main/hm_images/amaflip.webp" alt="asd" loading="lazy" className="w-full md:w-[70%] mx-auto"/>
            </div>

            <div className='py-3 flex justify-center'>
                <OrderBtn />
            </div>


            <div className='text-4xl mt-6 mb-2 font-semibold text-center'>
                <p className='text-[#04356f]'>हॉर्सफायर के जादू से </p>
                <p className='text-[#0d9486]'>करें नामर्दी को गायब !</p>
            </div>

            <p>
                Horse fire Tablet एक पूर्ण आयुर्वेदिक और असरदार फार्मूलेशन है जो AR Ayurveda द्वारा बनाया गया है। Horse fire Tablet में अश्वगंधा, शिलाजीत, कौचा, सफ़ेद मूसली, गोक्षुरा, केसर जैसी 17 भरोसेमंद भारतीय जड़ीबूटियों की शक्ति समाहित है। ये हर्ब्स पुरुष समस्या के आलावा भी अनेक लाभों के लिए उपयोगी माने जाते है। इनके सेवन से डायबिटीज, ब्लड प्रेशर, स्ट्रेस और फिजिकल स्ट्रेंथ की कमी जैसी समस्याओं में अद्भुत लाभ मिलता है।
            </p>

            <p className="bg-[#04356f] text-white text-center pt-3 pb-2 font-semibold text-xl">
                Customer Review Video
            </p>

            <div className="my-3">
                <Youtube vid={"oOfFq4ihRsY"} />
            </div>

            <div className='py-3 flex justify-center'>
                <OrderBtn />
            </div>






        </section>
    )
}

export default Section1