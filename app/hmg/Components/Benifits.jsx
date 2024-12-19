import dynamic from 'next/dynamic';
import React from 'react'
const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});
const Benifits = () => {

    const tablet_benefits = (arr) => {
        return arr?.map((e, key) => {
            return <div className="" key={key}>
                <div className="flex items-center gap-2 py-1">
                    <img
                        className='w-7'
                        src="/main/hmg_images/download.png"
                        alt='benefits_image'
                        loading="lazy"
                    />

                    <div className="fontNoto text-[1.1rem] md:text-[1.3rem] font-semibold text-black pt-2">
                        {e.benefit_title}
                    </div>
                </div>
            </div>
        }
        )
    };

    return (
        <div>
            <div>
                <div className="fontNoto bg-black text-white text-xl md:text-2xl pt-2 md:pt-3 text-center font-extrabold my-3">
                    हॉर्सफायर टेबलेट से होने वाले लाभ
                </div>

                <div>
                    {
                        tablet_benefits([
                            {
                                benefit_title: "15 दिनों के अंदर सेक्स अवधि में 10x वृद्धि"
                            },
                            {
                                benefit_title: "लिंग के लम्बाई और मोटाई में वृद्धि"
                            },
                            {
                                benefit_title: "जोश, शक्ति और स्टैमिना मे अद्भुत वृद्धि"
                            },
                            {
                                benefit_title: "कामेच्छा में वृद्धि, अन्य गुप्त रोग जड़ से हल"
                            }
                        ])
                    }
                </div>

                <div className="">
                    <p className='fontNoto text-[1.1rem] md:text-[1.3rem] text-justify py-2'>
                        हॉर्सफायर टेबलेट एक शुद्ध नेचुरल और आयुर्वेदिक औषधि है। आयुर्वेद को सदियों से सबसे सफल और दुष्प्रभाव मुक्त चिकित्सा पद्धति के तौर पर जाना जाता है। आयुर्वेद का अनुसरण और जड़ीबूटियों का रिसर्च कर यह औषधि तैयार की गयी है। हॉर्सफायर टेबलेट पुरुष यौन कमजोरी का सबसे प्रभावी समाधान बनकर उभरा है, क्योंकि इसमें आयुर्वेद की सबसे मशहूर जड़ीबूटियों की उच्चतम क्वालिटी इस्तेमाल में लिया गया है।
                    </p>
                </div>


                <div className="py-2">
                    <OrderBtn />
                </div>

                <div className="">
                    <img src="/main/hmg_images/hft_certificate.webp" alt="" className='sm:w-3/4 w-80 mx-auto py-3' />
                </div>

            </div>
        </div>
    )
}

export default Benifits