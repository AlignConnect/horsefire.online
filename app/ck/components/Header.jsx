import React from 'react'
import { Image } from 'react-bootstrap'

const Header = () => {
    return (
        <section className="relative">

            <div className="w-full max-w-6xl mx-auto">
                {/* <div className="text-black fontPoppins text-md md:text-2xl py-3 font-semibold text-center md:text-left">
                    Ayurveda for everyone every day
                </div> */}


            </div>

            <div className="relative">
                <div className="w-full max-w-6xl mx-auto relative z-10 ">

                    <div className="text-white fontPoppins text-md py-3 text-left px-3">
                        *TRUE STORY
                    </div>
                    <div className="bg-[#f3f3f3] md:px-4 rounded-t-xl mx-1">
                        <div className="fontPoppins text-black md:py-7 py-5 px-2">
                            Home &gt; health
                        </div>

                        <div className="px-1 md:py-5">
                            <div className=" fontNoto text-xl md:text-3xl font-extrabold py-1 text-center md:text-left">
                                क्या आप भी एक ताकतवर मर्द की तरह अपना स्टैमिना और आंतरिक क्षमता बढ़ा कर दमदार प्रदर्शन करना चाहते है? अगर हाँ तोह आगे पढ़े।
                            </div>
                        </div>

                        <img src="/main/ck_images/header_img.jpg" alt="" className='w-full px-2 rounded-xl  sm:w-3/4 mx-auto' />

                        <div className="text-black text-justify fontNoto text-[1.1rem] md:text-xl py-5 px-2 indent-8">
                            दोस्तों अगर आप भी लिंग में ढीलापन और शीघ्रपतन की समस्या के शिकार है तो ये खास आपके ही लिए है। दोस्तों, हर पुरुष की चाहत होती है की वो लम्बे समय तक सेक्स करें पर ढ़ीले लिंग और शीघ्रपतन की समस्या उन्हें बेबस बना देती है। उससे भी ज्यादा ये चाहत महिलाओं में होती है की उनके पार्टनर देर सेक्स करें ताकि उन्हें भी ऑर्गेज्म (चरमसुख) मिले। जी हाँ पुरुषों की तरह महिलाये भी स्खलित होती है, पर उनका टाइम लिमिट आज के पुरुषों से कई गुना ज्यादा होता है।
                        </div>

                        <div className="flex items-center gap-2 border border-black md:w-1/2 rounded-lg py-2">
                            <div className="pl-2">
                                <img
                                    className='w-16 sm:w-20'
                                    src="/main/ck_images/Avinash.png"
                                    alt='Avinash'
                                />
                            </div>
                            <div className="">
                                <div className="font-semibold fontKalnia text-md md:text-xl">
                                    Avinash Saksena
                                </div>
                                <div className="fontPoppins text-sm md:text-md">
                                    Age:-34 Year
                                </div>
                            </div>
                        </div>

                        <div className="text-black text-justify fontNoto text-[1.1rem] md:text-xl py-6 px-2">
                            मेरा नाम अविनाश सक्सेना है और मैंने आपको आपकी सहनशक्ति और आंतरिक शक्ति बढ़ाने की एक आयुर्वेदिक विधि से परिचित कराया है। मैं न केवल इसका वादा करता हूं, बल्कि मैं इसे वैज्ञानिक प्रयोगों के माध्यम से प्रदर्शित भी कर सकता हूं !!
                        </div>


                        <hr />


                        <div className="pt-3 md:pt-5">
                            <div className="fontNoto text-xl md:text-3xl font-extrabold">
                                <span className="">&#x201C;</span>इस जड़ी-बूटियों से पाएं आयुर्वेदिक शक्ति:
                            </div>

                        </div>
                    </div>
                </div>
                <img src="/main/ck_images/header_background.webp" alt='Head_Background' className="!h-72 w-full absolute top-0" />
            </div>


        </section>
    )
}

export default Header