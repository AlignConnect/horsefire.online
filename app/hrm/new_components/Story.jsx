import dynamic from 'next/dynamic';
import React from 'react'


const FlipAmazon = dynamic(() => import('../old_backup_components/FlipAmazon'), {
    loading: () => <p>loader</p>
});

const Story = () => {
    return (
        <section>


            <div className="bg-[#f7e7ea] ">


                <div className="sm:max-w-[65%] mx-auto ">


                    <div className="pt-3">
                        <FlipAmazon />
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


        </section>

    )
}

export default Story