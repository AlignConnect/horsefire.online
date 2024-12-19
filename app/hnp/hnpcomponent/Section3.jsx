import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";
const Flipamazon = dynamic(() => import('./FlipAmazon'));

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section3 = () => {
    return (
        <section className={noto.className}>


            <div className=""><div className="header_con font-bold setHeight h-[70px] md:h-[95px]" id=''>

                <span className="header_con_lr GetHeight1" id=''>'HORSEFIRE TABLET'<br /><span className="#ffde00">के फायदे</span></span>

            </div></div>


            <section>

                {/* ------------------------------------------------ */}

                <div>
                    <div className="manageImgCon">
                        <div className="ListImage">
                            <img src="/images/list9.png" alt="dsasds" className="w-full" />
                        </div>
                        <div className="ListContent">
                            <h2 className="text-2xl md:text-3xl">स्पर्म काउंट और क्वालिटी</h2>
                        </div>
                    </div>

                    <p className="">इसके इस्तेमाल से पुरूषों का स्पर्म काउंट और क्वालिटी बढ़ता है और उर्वरक होता हैं और इस वजह से <span style={{ color: '#5e0a22' }}>Horse Fire Tablet </span> को विशेषज्ञों की प्रामाणिकता भी प्राप्त हैं।</p>

                </div>


                {/* ------------------------------------------------ */}

                <div>
                    <div className="manageImgCon">
                        <div className="ListImage">
                            <img src="/images/list10.png" alt="dsasds" className="w-full" />
                        </div>
                        <div className="ListContent">
                            <h2 className="text-2xl md:text-3xl">जोश और स्टैमिना बढाए</h2>
                        </div>
                    </div>

                    <p className=""><span style={{ color: '#5e0a22' }}>Horse Fire Tablet </span>हर उस व्यक्ति का जोश और स्टैमिना बढ़ा देता है जो पुरुष संभोग के दौरान जल्दी थक जाते है, साँस फूलने लगती है या जोश की कमी है। इस तरह सेक्स प्रदर्शन में सुधार होता है। </p>

                </div>



                {/* ------------------------------------------------ */}

                <div>
                    <div className="manageImgCon">
                        <div className="ListImage">
                            <img src="/images/list1.png" alt="dsasds" className="w-full" />
                        </div>
                        <div className="ListContent">
                            <h2 className="text-2xl md:text-3xl">लिंग बनें सख्त और मजबूत</h2>
                        </div>
                    </div>

                    <p className=""><span style={{ color: '#5e0a22' }}>Horse Fire Tablet </span> का सेवन करने वाले पुरूषों का लिंग किसी मीनार की भांति ऐसा सख्त और मजबूत बन जाता है, जिससे पुरुष घंटों बेड पर टिकता हैं। </p>

                </div>



                {/* ------------------------------------------------ */}

                <div>
                    <div className="manageImgCon">
                        <div className="ListImage">
                            <img src="/images/list11.png" alt="dsasds" className="w-full" />
                        </div>
                        <div className="ListContent">
                            <h2 className="text-2xl md:text-3xl">टाइमिंग बढ़ाएं</h2>
                        </div>
                    </div>

                    <p className="">यह आपकी कमजोर नसों को ठीक करने के साथ ही, उसमें कामोत्तेजना की अग्नि भरता हैं। साथ ही इससे बेड पर पुरूषों की परफॉर्मेंस में भी चार चांद लग जाते हैं।</p>



                </div>



                {/* <div className="text-center">
                    <a href='#form' className='blinkForm' >
                        ORDER NOW
                    </a>
                </div> */}

                <Flipamazon />


                <div className="w-full">
                    <img src="/images/third.jpg" alt="adasd" className="w-full" loading="lazy" />
                </div>

                <p className="py-2"> सिर्फ इतना ही नहीं <span className="text-[#5e0a22]" >Horse Fire Tablet</span> का इस्तेमाल करने वाले पुरूष तन के साथ साथ मन से भी पूर्णतः स्वस्थ रहते हैं। वे हमेशा तरोताजा महसूस करते हैं, जिससे उनकी सोचने समझने की क्षमता में वृद्धि होती हैं। पुरूषों का एनर्जी लेवल, स्टेमिना और जोश इस कदर बढ़ जाता हैं, कि उनकी हर रात सुहागरात होती हैं।</p>

                {/* <div className="text-center">
                    <a href='#form' className='blinkForm' >
                        ORDER NOW
                    </a>
                </div> */}

                <Flipamazon />



                <div className="w-full relative -left-7 py-3">
                    <img src="/images/four.png" alt="adasd" className="w-full md:w-2/3 mx-auto" loading="lazy" />
                </div>


                <h4 className="text-center m-0 font-bold text-xl"><span className="font-black text-[red] text-2xl" >HORSE FIRE TABLET </span><br />लेने के लएि यहाँ फॉर्म भरे</h4>

                <div className='flex flex-column justify-center items-center mt-1 px-7 rounded-[10px] bg-[#986120]' style={{ border: '1px solid #eceae2' }}>

                    <ul className={`my-2 font-bold fontSet text-white list-disc`} >
                        <li className=""><span style={{ color: '#ff2' }}>Horse Fire Tablet</span> के 10 लाख से ज्यादा सन्तुष्ट ग्राहक है</li>
                        <li className=""><span >Horse Fire Tablet</span> की डिलीवरी पुरे भारत में मुफ्त में की जाती है</li>
                        <li className="">आयुष मंत्रालय और गवर्नमेंट द्वारा सर्टिफाइड</li>
                        <li className=""><span  >Horse Fire Tablet</span> के कोई साइड इफेक्ट्स नहीं है</li>
                    </ul>

                </div>

                {/* <div className="text-center">
                    <a href='#form' className='blinkForm' >
                        ORDER NOW
                    </a>
                </div> */}

                <Flipamazon />


            </section>


        </section>
    )
}

export default Section3;