import dynamic from 'next/dynamic';
import React from 'react'


const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});

const Last = () => {



    return (
        <section>


            <div className="three_bg ">

                <div className="sm:max-w-[70%] mx-auto ">
                    <div className="grid sm:grid-cols-2 items-center sm:py-14 py-7">



                        <div className=" sm:order-0 order-1">

                            <div className="text-white fontNoto text-[1.8rem] sm:text-[2.5vw] font-extrabold text-center sm:text-left  leading-tight pt-5 px-2 sm:pt-7 pb-3">
                                <span className="">&#x201C;</span>इसलिए लाइफ में <span className='text-red-500'>रोमांच</span> भरने के लिए आपको चाहिए-
                            </div>

                            <p className='text-white'>
                                Horse Fire Tablet जो एक प्राकृतिक संयोजन से बना शक्तिवर्धक है जिसके इस्तेमाल से कुछ मिनट में आउट होने वाले भी देर तक टिककर लम्बी पारी खेलते है। अगर आप भी बेड पर फेल है और बीवी आपके प्रदर्शन से संतुष्ट नहीं होती तो एक बार Horse Fire Tablet का सेवन अवश्य करें और बिस्तर में झंडे गाड़े।
                            </p>

                            <div className="pt-3">
                                <OrderBtn />
                            </div>

                        </div>

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a670b8f2-6729-43c2-0933-cbd592924100/public" alt="" className='sm:w-5/6 w-full px-2 mx-auto sm:order-1 order-0' />
                    </div>

                </div>

            </div>




            <div className="bg-[#f7e7ea]">
                <div className="sm:max-w-[70%] mx-auto ">




                    <div className="grid sm:grid-cols-2 items-center sm:py-10 py-6 px-2">


                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7b3e6326-8160-428d-c23e-0521f1821200/public" alt="" className='sm:w-5/6 w-full mx-auto' />

                        <div className="">

                            <div className="fontNoto text-[2.1rem] sm:text-[3vw] font-extrabold  py-3">
                                <span className="">&#x201C;</span>हॉर्सफायर टेबलेट के फायदे
                            </div>

                            <ul className='fontNoto text-[1.2rem] sm:text-[1.2vw] ml-6 list-disc sm:leading-relaxed leading-normal'>
                                <li>
                                    शक्ति और स्फूर्ति में सुधार होता है
                                </li>
                                <li>
                                    ज्यादा सख्त, ज्यादा मजबूती
                                </li>
                                <li>
                                    टाइमिंग सुधरती है
                                </li>
                                <li>
                                    आप लम्बी पारी खेल सकते है
                                </li>
                                <li>
                                    प्रदर्शन में सुधार होता है
                                </li>
                            </ul>

                            <div className="pt-3">
                                <OrderBtn />
                            </div>


                        </div>

                    </div>

                    <p className='sm:py-6 py-2'>
                        <span className='font-extrabold  italic '>हॉर्सफायर लेने वाले पुरुष में इतना दमखम होता है की हर शॉट में पार्टनर की चीख निकल जाती है।</span> आपको बता दें की यह मार्किट में उपलब्ध अन्य के मुकाबले ज्यादा प्रभावशाली और सुरक्षित है। जहां अन्य केवल झूठे वादों से लोगो को भ्रमित करते है वही Horse Fire Tablet अपने अद्भुत प्रभाव क्षमता से समस्याएं मिटाकर अपनी विश्वसनीयता और लोकप्रियता को साबित किया है।
                    </p>







                </div>
            </div>

        </section>

    )
}

export default Last