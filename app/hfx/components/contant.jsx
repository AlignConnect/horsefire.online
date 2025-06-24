import dynamic from 'next/dynamic';
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_3'), {
    loading: () => <p>loader</p>
});


const OrderBtn = dynamic(() => import('../components/OrderNow'), {
    loading: () => <p>loader</p>
});

const contant = () => {



    const tips = [
        "सबसे पहले नीली गोलियों से दूरी बनाएं, ये स्वास्थ्य के लिए हानिकारक है।",
        "एल्कोहल या अन्य नशीली पदार्थ का अत्यधिक सेवन न करें",
        "नींद पूरी लें ये टेस्टोस्टेरोन लेवल के लिए बहुत जरूरी है।",
        "टेस्टोस्टेरोन बूस्टर तत्व खाएं जो पुरुषता के लिए सबसे जरूरी है।",
        "ताकत बढ़ाने के लिए आयुर्वेद अपनाएं"
    ];

    const benefits = [
        {
            text: " ऊर्जा और स्टैमिना",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c98543fc-0607-4162-70d8-9d3661a5d700/public",
            reverse: false,
        },
        {
            text: "मनचाही लम्बी अवधि",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c3b8b628-42dc-44f7-76ec-b500685b1400/public",
            reverse: true,
        },
        {
            text: "मजबूत खड़ापन देर तक",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4181c2d2-fc97-4ebb-d0e4-efa52de57100/public",
            reverse: false,
        },
        {
            text: "मिनिमम 4 राउंड हर बार",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4101819f-2219-4413-ec50-71b83fe3be00/public",
            reverse: true,
        },
    ];


    const pointss = [
        {
            content: "COD पेमेंट उपलब्ध",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a398c524-26ca-4115-93a3-c71905205300/public"
        },
        {
            content: "97.6% सफलता दर",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7f9e1795-fe70-48b4-ba01-90e8e6265900/public"
        },
        {
            content: "Flipkart, Amazon पर लिस्टेड",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/52daa9d6-c1fd-443e-d38b-36799fcc1500/public"
        },
        {
            content: "+30 लाख संतुष्ट ग्राहक",
            img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d16f0989-8ff1-4b4a-b033-a6b3ac228700/public"
        }
    ]


    const YoutubeFrame = dynamic(() => import("./YoutubeFrame"));

    const steps = [
        {
            step_text: "सुबह और रात्रि भोजन के बाद एक टैबलेट दूध/पानी के साथ",
            step_image: " https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bdf5febb-0995-4b71-6703-b78080744e00/public",
        },
        {
            step_text: "बेहतर परिणाम के लिए 1 गिलास दूध के साथ लें",
            step_image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b51de8f3-36a9-4e99-2d20-4d9e5b9b6a00/public",
        },
        {
            step_text: "एक महीने के अंदर खेल प्रदर्शन में सुधार अनुभव करें",
            step_image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/76ef6646-6a5a-4bbf-a98d-257b1fc96a00/public",
        },
    ];



    return (
        <div className='fontNoto'>

            <div className="text-[#f5f604] sm:text-3xl text-2xl font-extrabold p-2 mt-3">
                समाधान क्यों जरुरी है??
            </div>
            <div className='text-white px-2'>विज्ञानिक रिसर्च से समझे</div>

            <p>
                मास्टर्स एण्ड जॉनसन ने सम्भोग की प्रक्रिया का वैज्ञानिक अध्ययन किया है। और वे इस नतीजे पर पहुँचे हैं कि 75% पुरुष शीघ्रपतन के शिकार हैं, पचहत्तर प्रतिशत ! गहन मिलन के पहले ही वे स्खलित हो जाते हैं और 90% स्त्रियाँ कभी ऑर्गेज्म तक नहीं पहुँचती। आधुनिक मनोविज्ञान कहता हैं कि जब तक स्त्री को काम भोग में गहन संतुष्टि नहीं होती, वह चिड़चिड़ी और क्रोधी होती हैं। अगर हमारी पत्नी हमेशा लड़ती झगड़ती रहती है तो पूरी स्थिति पर फिर से विचार करें। इसमें पत्नी का ही कसूर नहीं है, हो सकता है कि उसका कारण पति ख़ुद हों।
            </p>

            <OrderBtn />

            <p>
                पुरुष तो सन्तुष्ट हो जाता है, क्योंकि वह स्खलित हो जाता है। फिर वह करवट ले कर सो जाता है। लेकिन स्त्री आँसू बहाती रहती है और वह अनुभव उसके लिए अधूरा होता है। सौ में से नब्बे स्त्रियाँ तो यह भी नहीं जानती हैं कि ऑर्गेज्म क्या है और इसके पीछे के वजह है कमजोर पुरुष और पुरुषों की गुप्त कमजोरी !!
            </p>

            <div className="text-[#f5f604] sm:text-3xl text-2xl font-extrabold p-2 mt-3">
                मर्दाना ताकत का जीवन पर प्रभाव-
            </div>

            <p>
                शारीरिक ताकत के साथ साथ मर्दाना ताकत बहुत मायने रखता है। जो पुरुष मर्दानगी से लबालब भरे है, जिनके पौरुषता का स्तर इतना हाई है की उनकी पार्टनर प्रदर्शन से कराह उठें ऐसे पुरुषों के लव लाइफ या गृहस्थ लाइफ में कोई निराशा या नाराजगी नहीं होती। लेकिन जो पुरुष कमजोर है उनके लाइफ में दुःख ही दुःख होता है। लव लाइफ में ब्रेकअप! तो वही वैवाहिक जीवन में अफेयर और फिर तलाक की नौबत आ जाती है।
            </p>


            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2a2e07d9-bcbb-4875-8469-987d33de3700/public" alt="" className='w-full px-1' />




            <div className="text-[#f5f604] sm:text-3xl text-2xl font-extrabold p-4 mt-3">
                मर्दानगी बढ़ाने के लिए ये जरूर करें-
            </div>

            <div className="bg-black text-white p-3 rounded-lg mx-auto">
                <ul className="space-y-4">
                    {tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <img
                                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cacfe29b-9f77-42f1-f090-27e2f660e400/public"
                                alt="check icon"
                                className="w-5 h-5 pt-1"
                            />
                            <div className="text-lg text-justify">{tip}</div>
                        </li>
                    ))}
                </ul>
            </div>




            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ef21ef76-1fbf-481b-3c4d-a48eee6a5300/public" alt="" className='w-full px-3' />


            <div className="bg-red-700 mx-1 rounded-lg">
                <p className=''>
                    अगर आप अपनी पार्टनर को उतना समय नहीं दे पाते जितना वो चाहती है तो इस परिस्थिति में रिश्ते में खुशहाली कायम रखना मुश्किल है। अगर आप भी ऐसी कुछ भीं समस्या महसूस करते है तो एक बार <strong className='text-[#f5f604]'>Horse Fire Tablet</strong> अवश्य आजमाएं।
                </p>
            </div>



            <div className="fontPoppins text-center text-2xl md:text-4xl my-6 font-bold text-[#f5f604]">
                Experts Opinion
            </div>

            <Carousel
                showStatus={false}
                infiniteLoop={true}
                autoPlay={false}
                showThumbs={false}
                showArrows={true}
            >

                <div>
                    <YoutubeFrame vid={"lRwX-1q_R5Q?si=Gd7jsvmQ_PPYTQYU"} />
                </div>

                <div>
                    <YoutubeFrame vid={"lGJ_yqR9sfs?si=oYlIG6xtHA8LHE3O"} />
                </div>
            </Carousel>

            <OrderBtn />


            <p>
                <strong className='text-[#f5f604]'>Horse fire Tablet</strong> एक पूर्ण आयुर्वेदिक और असरदार फार्मूलेशन है जो <strong className='text-[#f5f604]'>AR Ayurveda</strong> द्वारा बनाया गया है। <strong className='text-[#f5f604]'>Horse fire Tablet</strong> में अश्वगंधा, शिलाजीत, कौचा, सफ़ेद मूसली, गोक्षुरा, केसर जैसी 17 भरोसेमंद भारतीय जड़ीबूटियों की शक्ति समाहित है। ये हर्ब्स पुरुष समस्या के आलावा भी अनेक लाभों के लिए उपयोगी माने जाते है। इनके सेवन से डायबिटीज, स्ट्रेस और फिजिकल स्ट्रेंथ की कमी जैसी समस्याओं में अद्भुत लाभ मिलता है।
            </p>


            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5754af05-8ba1-4b82-04c3-548f7bdcb500/public" alt="" className='w-full' />
            <OrderBtn />

            <p>
                <strong className='text-[#f5f604]'>Horse fire Tablet</strong> अपनी नाम के भांति ही पुरुषों को बेड पर एक पावरफुल घोड़े जैसी शक्ति देता है और शरीर के रग-रग में जोश और उत्तेजना की आग लगा देता है जो आग घंटो जलती रहती है। यह पुरुष शक्ति, समय अवधि की सीमा या औजार के कड़कपन को उच्चतम स्तर पर ले जाने में मदद करता है। इस प्रकार पुरुष वो प्रदर्शन कर सकते है उनकी फीमेल पार्टनर उनसे चाहती है।
            </p>


            <div className='bg-[#009cff] text-2xl text-white font-extrabold fontPoppins text-center my-3'>
                Key Benefits:
            </div>

            <div className="grid gap-6 px-2 py-3">
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-2 items-center"
                        style={{
                            direction: item.reverse ? 'rtl' : 'ltr',
                        }}
                    >
                        {/* Text Box */}
                        <div
                            className="card-text-bg sm:text-2xl text-md text-black font-extrabold pt-2 sm:pt-3 rounded text-center"
                            style={{
                                direction: 'ltr',
                            }}
                        >
                            {item.text}
                        </div>

                        {/* Image */}
                        <div>
                            <img
                                src={item.image}
                                alt={`benefit-${index}`}
                                className=" w-full h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <OrderBtn />

            <p className="">
                <strong className='text-[#f5f604]'>Horse fire Tablet</strong> का नियमित इस्तेमाल कर के हजारो पुरुष अपनी निराश रिलेशनशिप और वैवाहिक जीवन को रोचक और मजेदार बना लिए है, Watch Review👇
            </p>


            <div className="py-4">
                <Carousel
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={false}
                    showThumbs={false}
                    showArrows={true}
                >

                    <div>
                        <YoutubeFrame vid={"vTgbUS5qagY?si=IfRJqui7ZP_WAB3h"} />
                    </div>
                    <div>
                        <YoutubeFrame vid={"ENd3ADBXxfo?si=1DcinVSW9KTXxB6Y"} />
                    </div>

                    <div>
                        <YoutubeFrame vid={"BnoIvnZh4eY?si=wcgtQFEl8nrO74QL"} />
                    </div>
                </Carousel>
            </div>

            <p>
                <strong className='text-[#f5f604]'>Horse fire Tablet</strong> पुरुष कमजोरी का सबसे प्रभावी समाधान बनकर उभरा है, इसके इस्तेमाल से पुरुष लगातार अपने स्वास्थ्य में सुधार कर रहे है। इस उत्पाद का सक्सेस रेट <strong className='text-[#f5f604]'>97.6% </strong>है जो किसी भी अन्य उत्पाद से कई गुना बेहतर है।
            </p>


            <div className="grid grid-cols-2 items-center px-2 py-3">
                {pointss.map((item, index) => (
                    <div
                        key={index}
                        className=""
                    >
                        <div>
                            <img
                                src={item.img}
                                alt={`points-${index}`}
                                className=" sm:w-1/2 w-2/3 mx-auto"
                            />
                            <div
                                className="text-[#f5f604] fontNoto text-center font-extrabold text-lg"
                            >
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <OrderBtn />

            <div className='bg-[#009cff] text-2xl text-white font-extrabold fontPoppins text-center my-3 py-2'>
                Right Way of Consumption:
            </div>

            <div className="grid gap-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 bg-[#0d1b2a] text-white rounded-lg p-4"
                    >
                        <img
                            src={step.step_image}
                            alt={`step-${index}`}
                            className="w-20 h-20"
                        />
                        <p className="text-lg font-medium">{step.step_text}</p>
                    </div>
                ))}
            </div>

            <OrderBtn />

            <div className="bg-black text-white">
                <MostSelling />

            </div>



        </div>


    )
}

export default contant