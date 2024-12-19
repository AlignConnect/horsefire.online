import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Flipamazon = dynamic(() => import('./FlipAmazon'));


const Section1 = () => {


    return (

        <section className={noto.className}>

            <section className='bg-white '>
                <div className="w-full">
                    <h1 className='pt-4 md:block hidden text-center font-bold text-3xl text-[#6a041d]'>ऐसे पाएं कड़कपन और टाइमिंग का डबल पावर</h1>
                    <img src="/images/headImage.png" alt="pic" loading='lazy' className="md:hidden visible w-full py-2" />
                </div>

                <p className="py-3">आज कल के अधिकांश पुरूष अंग में ढीलेपन, शीघ्र पतन, स्पर्म काउंट की कमी, स्पर्म की खराब क्वालिटी से ग्रसित हैं। इन वजहों ने पुरषों की सेक्सुअल लाइफ को भारी क्षति पहुंचाई हैं। इसके अलावे मौजूदा जीवन शैली की वजह से भी पुरूषों की सेक्सुअल लाइफ बर्बादी के कगार पर पहुंच चुकी हैं।</p>


                <div className="w-full">
                    <img src="/images/1stimage.jpg" alt="asdadasd" loading="lazy" className="w-full" />
                </div>

                {/* <div className="text-center">
                    <a href='#form' className='blinkForm' >
                        ORDER NOW
                    </a>
                </div> */}

                <Flipamazon />




                <section className="py-5">

                    <div className=""><div className="header_con font-bold setHeight h-[35px] md:h-[45px]" id=''> <span className="header_con_lr GetHeight " id=''>सही जीवन शैली का अभाव</span></div></div>

                    <div>
                        <div className="manageImgCon">
                            <div className="ListImage">
                                <img src="/images/list2.png" alt="dsasds" className="w-full" />
                            </div>
                            <div className="ListContent">
                                <h2 className="text-2xl md:text-3xl">डिप्रेशन की समस्या</h2>
                            </div>
                        </div>

                        <p className="">काम काज का बोझ और स्ट्रेस की वजह से अत्यधिक पुरूष मानसिक तनाव से गुजर रहें हैं। जिसका प्रभाव यौन जीवन पर पड़ता है।  मूड नहीं बनता तथा जल्दी पतन होने लगता है।</p>
                    </div>

                    {/* ------------------------------------------------ */}

                    <div>
                        <div className="manageImgCon">
                            <div className="ListImage">
                                <img src="/images/list3.png" alt="dsasds" className="w-full" />
                            </div>
                            <div className="ListContent">
                                <h2 className="text-2xl md:text-3xl">गंदी आदतें</h2>
                            </div>
                        </div>

                        <p className="">गंदी वीडियोज देखने और सबसे बच बचाकर जल्दी से खुशी पाने के लिए युवा हस्तमैथुन का सहारा लेते है जो एक आदत बन जाती है जिससे शीघ्रपतन उत्पन्न हो जाती है। </p>
                    </div>



                    {/* ------------------------------------------------ */}

                    <div>
                        <div className="manageImgCon">
                            <div className="ListImage">
                                <img src="/images/list4.png" alt="dsasds" className="w-full" />
                            </div>
                            <div className="ListContent">
                                <h2 className="text-2xl md:text-3xl">मादक पदार्थों का सेवन</h2>
                            </div>
                        </div>

                        <p className="">पुरूषों के यौन जीवन पर इन नशीले पदार्थों का असर इस कदर हावी होता हैं, कि उनका खास अंग किसी काम का नहीं रह जाता हैं।</p>
                    </div>



                    {/* ------------------------------------------------ */}

                    <div>
                        <div className="manageImgCon">
                            <div className="ListImage">
                                <img src="/images/list5.png" alt="dsasds" className="w-full" />
                            </div>
                            <div className="ListContent">
                                <h2 className="text-2xl md:text-3xl">सिगरेट, तम्बाकू और पान मसाला का सेवन</h2>
                            </div>
                        </div>

                        <p className="">सिगरेट, तम्बाकू और पान मसालों के सेवन से सेक्सुअल क्षमता का ह्रास होता हैं।</p>
                    </div>



                    {/* ------------------------------------------------ */}

                    <div>
                        <div className="manageImgCon">
                            <div className="ListImage">
                                <img src="/images/list6.png" alt="dsasds" className="w-full" />
                            </div>
                            <div className="ListContent">
                                <h2 className="text-2xl md:text-3xl">टेस्टोस्टेरोन की कमी</h2>
                            </div>
                        </div>

                        <p className="">विशेषज्ञ मानते हैं कि टेस्टोस्टेरोन की कमी की वजह से भी पुरूषों का स्पर्म काउंट कम होता जाता हैं और उनकी कामेच्छा में कमी आने लगती हैं।</p>
                    </div>

                    {/* ------------------------------------------------ */}

                    <div>
                        <div className="manageImgCon">
                            <div className="ListImage">
                                <img src="/images/list7.png" alt="dsasds" className="w-full" />
                            </div>
                            <div className="ListContent">
                                <h2 className="text-2xl md:text-3xl">पर्याप्त नींद ना लेना</h2>
                            </div>
                        </div>

                        <p className="">विशेषज्ञों के मुताबिक कम 8 घंटे से कम सोने का सीधा असर आपके शरीर पर पड़ता हैं। इसका सबसे ज्यादा प्रभाव उनकी सेक्सुअल परफॉर्मेंस पर पड़ता हैं। उनकी सेक्सुअल परफॉर्मेंस में गिरावट आने लगती हैं।</p>
                    </div>

                    {/* ------------------------------------------------ */}

                    <div>
                        <div className="manageImgCon">
                            <div className="ListImage">
                                <img src="/images/list8.png" alt="dsasds" className="w-full" />
                            </div>
                            <div className="ListContent">
                                <h2 className="text-2xl md:text-3xl">जंक फूड का सेवन</h2>
                            </div>
                        </div>

                        <p className="">जंक फ़ूड के सेवन से शरीर को जरुरी पोषक तत्व नहीं मिलते, और टेस्टोस्टेरोन नहीं बढ़ता है और प्रदर्शन में गिरावट आ जाती है। ऐसे पुरूष बेड पर जल्दी ढेर हो जाते हैं, जो किसी भी लिहाज से सही नहीं हैं।</p>

                    </div>





                </section>







            </section>
        </section>


    )
}

export default Section1