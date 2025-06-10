import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa';


const Header = () => {

    const reasons = [
        "शराब, सिगरेट या नशीले पदार्थों का अत्यधिक सेवन",
        "नींद की कमी या अनियमित दिनचर्या",
        "शरीर में टेस्टोस्टेरोन की कमी",
        "असंतुलित भोजन, जंक फूड का ज़्यादा सेवन",
        "डायबिटीज, थायराइड, प्रोस्टेट या अन्य शारीरिक समस्याएं",
        "केमिकल बेस्ड टैबलेट्स का ज़रूरत से ज़्यादा इस्तेमाल",
    ];


    return (
        <section className='fontNoto'>

            {/* <div className="text-sm text-end px-2 pt-2 bg-gray-200">
                *विज्ञापन-संबंधी
            </div> */}

            <div className='header_bg_grad sm:pt-10 sm:pb-7 pt-6 pb-4 text-center '>
                <dv className="bg-white rounded-3xl sm:text-2xl text-[1rem] text-center font-extrabold  pt-2 pb-1 sm:pt-4 sm:pb-2 sm:px-5 px-3 shadow-2xl">
                    खुशहाल दांपत्य जीवन का राज़ - <span className='text-red-800'> ज़्यादा ऊर्जा, ज़्यादा प्यार!</span>
                </dv>
            </div>




            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a45af773-895e-44ae-45ce-701984928500/public" alt="" className='w-full ' />

            <p>
                क्या आप चाहते हैं कि आपका दांपत्य जीवन और भी सुखद, सशक्त और संतुलित बने? क्या आप चाहते हैं कि आप अपने जीवनसाथी को हर बार उस स्तर की खुशी दे पाएं जिसकी वे उम्मीद करते हैं? अगर हां, तो यह लेख खासतौर पर आपके लिए है। क्यों जल्दी "आउट” हो जाते हैं पुरुष?
            </p>


            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c3fd3663-adbb-4913-dafd-acb46ad63600/public" alt="" className='w-full p-2' />

            <div className='font-extrabold text-xl sm:text-3xl p-2 mt-2 mb-1'>
                दाम्पत्य जीवन में जल्दी थकावट या प्रदर्शन में कमी कई कारणों से हो सकती है:
            </div>


            <div className=" space-y-4">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-[#009908] text-white px-4 py-2 shadow-sm"
                    >
                        <span className="text-2xl mr-3"><FaRegArrowAltCircleRight /></span>
                        <span className="sm:text-2xl text-lg pt-1 font-semibold">{reason}</span>
                    </div>
                ))}
            </div>


            <div className="font-extrabold sm:text-2xl text-[1rem] pt-7 pb-4 px-2 leading-loose sm:leading-loose">
                ये सभी कारण न केवल <span className='bg-red-900 text-white px-2 pt-2 text-md'>आपके प्रदर्शन को प्रभावित करते हैं।</span><br /> बल्कि आपके आत्मविश्वास को भी कमजोर कर सकते हैं।
            </div>
        </section>
    )
}

export default Header