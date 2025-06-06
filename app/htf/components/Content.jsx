import dynamic from 'next/dynamic';
import React from 'react'



const OrderBtn = dynamic(() => import('../components/orderNow'));

const Content = () => {

    const reasons = (arr) => {
        return arr?.map((e, key) => {
            return <div key={key} className='sm:py-5 py-2 px-1 mx-2 '>
                <img src={e.reason_img} className='mx-auto md:w-16 w-12 pt-2' alt='reason_img' loading="lazy" />
                <div className='md:text-xl text-md font-extrabold text-center text-black pt-3'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.reason_title }}
                    />
                </div>
            </div >
        })
    }
    return (
        <section className=''>


            <div className="bg-[#f7e7ea] px-2 sm:px-0">


                <div className="sm:max-w-[65%] mx-auto ">


                    <div className="pt-3">
                        <OrderBtn />
                    </div>


                    <p className='sm:py-6 py-4'>
                        दोस्तों, सामान्यतः जीने के लिए रोटी कपडा और मकान जरुरी होता है परन्तु दाम्पत्य जीवन को खुशहाली पूर्वक जीने के लिए स्वस्थ और ऊर्जावान पति का कमरतोड़ प्यार बहुत मायने रखता है। परन्तु आज के समय में लगभग हर 100 में से 80 से अधिक पति कमजोरी वश दाम्पत्य जीवन को भोग नहीं पाते और जीवनसंगिनी के उम्मीदों पर निराशा की कील ठोक देते है।
                    </p>
                </div>


                <div className="sm:max-w-[70%] mx-auto ">




                    <div className="grid sm:grid-cols-2 items-center sm:py-3 py-2 px-2">


                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/29445f19-7b36-4964-1bda-ca5059704600/public" alt="" className='sm:w-3/4 w-full px-2 mx-auto' />

                        <div className="">

                            <div className="fontNoto text-[2.1rem] sm:text-[3vw] font-extrabold  ">
                                <span className="">&#x201C;</span>पुरुषो के निराशा की वजह
                            </div>

                            <ul className='fontNoto text-[1.2rem] sm:text-[1.2vw] ml-6 list-disc sm:leading-relaxed leading-normal'>
                                <li>
                                    चिंता, तनाव या डिप्रेशन की समस्या
                                </li>
                                <li>
                                    एल्कोहल या अन्य नशीली पदार्थों का अत्यधिक सेवन
                                </li>
                                <li>
                                    देर से सोना, उचित नींद न लेना
                                </li>
                                <li>
                                    संतुलित आहार न लेना, फ़ास्ट फ़ूड - जंक फ़ूड का सेवन
                                </li>
                                <li>
                                    शरीर में टेस्टोस्टेरोन का धीमा निर्माण या कमी
                                </li>
                                <li>
                                    पान मसाला, सिगरेट व अन्य तम्बाकू युक्त प्रोडक्ट का सेवन
                                </li>
                                <li>
                                    डायबिटीज, थायराइड, प्रोस्टेट से परेशान और दवाओं का सेवन
                                </li>
                            </ul>

                        </div>

                    </div>


                </div>
                <div className="sm:max-w-[65%] mx-auto ">




                    <p className='sm:py-6 py-4'>
                        अगर आप उपर बताए गए प्रॉब्लम्स में से एक भी महसूस कर रहे है तो यकीन मानिये आप अपनी घरवाली को कभी संतुष्ट नहीं कर सकते। वैवाहिक जीवन को खुशहाल बनाना है तो आपको देर तक टिककर जोरदार शॉट लगाने पड़ेंगे।
                    </p>

                </div>

            </div >



            <section>


                <div className="three_bg px-2 sm:px-0">

                    <div className="sm:max-w-[70%] mx-auto ">
                        <div className="grid sm:grid-cols-2 items-center sm:py-14 py-7">



                            <div className=" sm:order-0 order-1">

                                <div className="text-white fontNoto text-[1.8rem] sm:text-[2.5vw] font-extrabold text-center sm:text-left  leading-tight pt-5 px-2 sm:pt-7 pb-3">
                                    <span className="">&#x201C;</span>इसलिए लाइफ में <span className='text-red-500'>रोमांच</span> भरने के लिए आपको चाहिए-
                                </div>

                                <p className='text-white'>
                                    Horse Fire Tablet जो एक प्राकृतिक संयोजन से बना शक्तिवर्धक है जिसके इस्तेमाल से कुछ मिनट में आउट होने वाले भी देर तक टिककर लम्बी पारी खेलते है। अगर आप भी बेड पर फेल है और बीवी आपके प्रदर्शन से संतुष्ट नहीं होती तो एक बार Horse Fire Tablet का सेवन अवश्य करें और बिस्तर में झंडे गाड़े।
                                </p>



                            </div>

                            <div className="sm:order-1 order-0">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a670b8f2-6729-43c2-0933-cbd592924100/public" alt="" className='sm:w-5/6 w-full px-2 mx-auto ' />
                                <div className="pt-3">
                                    <OrderBtn />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>




                <div className="bg-[#f7e7ea] px-2 sm:px-0">
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



                            </div>
                            <div className="pt-3">
                                <OrderBtn />
                            </div>

                        </div>

                        <p className='sm:py-6 py-2'>
                            <span className='font-extrabold  italic '>हॉर्सफायर लेने वाले पुरुष में इतना दमखम होता है की हर शॉट में पार्टनर की चीख निकल जाती है।</span> आपको बता दें की यह मार्किट में उपलब्ध अन्य के मुकाबले ज्यादा प्रभावशाली और सुरक्षित है। जहां अन्य केवल झूठे वादों से लोगो को भ्रमित करते है वही Horse Fire Tablet अपने अद्भुत प्रभाव क्षमता से समस्याएं मिटाकर अपनी विश्वसनीयता और लोकप्रियता को साबित किया है।
                        </p>







                    </div>

                    <div className="sm:max-w-[50%] mx-auto">


                        <div className="bg-white rounded-md mx-3 sm:my-5 mb-8 rsn" >

                            <div className='fontNoto grid md:grid-cols-4 grid-cols-2 md:gap-2  mx-1'>
                                {
                                    reasons([
                                        {
                                            reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1091ddec-5aac-4edc-9cf7-748af296a400/public",
                                            reason_title: "100% मनी<br/> बैक गारंटी "
                                        },
                                        {
                                            reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b2e4e47e-6d1f-4c84-c85b-3f2a3512f600/public",
                                            reason_title: "10 लाख+<br/> संतुष्ट ग्राहक "
                                        },
                                        {
                                            reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/77613456-74cc-497e-c30f-fdc2667ca900/public",
                                            reason_title: "COD पेमेंट<br/> उपलब्ध "
                                        },
                                        {
                                            reason_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3f2dca83-5221-43cc-8919-28b35c924300/public",
                                            reason_title: "Flipkart, Amazon<br/> पर लिस्टेड"
                                        }
                                    ])
                                }
                            </div>
                        </div>




                        <div className="fontNoto text-center sm:text-3xl text-2xl font-extrabold py-4  px-3">
                            ज्यादा न सोचे आज अपनाये और अपने रोमांस को उच्च सिखर पर ले जाये!
                        </div>

                    </div>
                </div>



            </section>



        </section>
    )
}

export default Content