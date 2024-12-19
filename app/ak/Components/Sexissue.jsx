import dynamic from 'next/dynamic';
import React from 'react'
const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});
const Sexissue = () => {

    const sex_issue_points = (arr) => {
        return arr?.map((e, key) => {
            return <div className="py-1" key={key}>
                <div className='fontNoto flex text-black' >
                    {key + 1}.&nbsp;
                    <div>
                        {e.title}
                    </div>
                </div >
            </div>
        })
    }

    return (
        <div>
            <div className="">
                <p className='fontNoto text-[1.1rem] md:text-[1.3rem] text-justify py-2 indent-10'>
                    <span className="text-2xl font-semibold">दो</span>स्तों अगर आप भी लिंग में ढीलापन और शीघ्रपतन की समस्या के शिकार है तो ये खास आपके ही लिए है। दोस्तों, हर पुरुष की चाहत होती है की वो लम्बे समय तक सेक्स करें पर ढ़ीले लिंग और शीघ्रपतन की समस्या उन्हें बेबस बना देती है। उससे भी ज्यादा ये चाहत महिलाओं में होती है की उनके पार्टनर देर सेक्स करें ताकि उन्हें भी ऑर्गेज्म (चरमसुख) मिले। जी हाँ पुरुषों की तरह महिलाये भी स्खलित होती है, पर उनका टाइम लिमिट आज के पुरुषों से कई गुना ज्यादा होता है।
                </p>
            </div>

            <div className="fontNoto bg-black text-white text-xl md:text-2xl pt-2 md:pt-3 text-center font-extrabold my-3">
                सेक्स कमजोरी की मुख्य वजहें-
            </div>

            <div className="text-[1.1rem] md:text-[1.3rem] px-2">
                {
                    sex_issue_points([
                        {
                            title: "चिंता, तनाव या डिप्रेशन की समस्या"
                        },
                        {
                            title: "गन्दी वीडियो का लत और हस्तमैथुन से शीघ्र ऑर्गेज्म की आदत"
                        },
                        {
                            title: "एल्कोहल या अन्य नशीली पदार्थों का अत्यधिक सेवन"
                        },
                        {
                            title: "देर से सोना, उचित नींद न लेना"
                        },
                        {
                            title: "पान मसाला, सिगरेट व अन्य तम्बाकू युक्त प्रोडक्ट का सेवन"
                        },
                        {
                            title: "शरीर में टेस्टोस्टेरोन का धीमा निर्माण या कमी"
                        },
                        {
                            title: "संतुलित आहार न लेना, फ़ास्ट फ़ूड - जंक फ़ूड का सेवन"
                        },
                        {
                            title: "डायबिटीज, थायराइड, प्रोस्टेट से परेशान और दवाओं का सेवन"

                        }
                    ])
                }
            </div>


            <div className="mx-2 my-2 rounded-lg border border-solid border-black">
                <img src="/main/hmg_images/second_couple.jpg" alt="" className='!rounded-2xl w-full px-2 py-2 ' />
            </div>


            <div className="fontNoto bg-black text-white text-xl md:text-2xl pt-2 md:pt-3 text-center font-extrabold my-3">
                ऐसे मिटाये सेक्स कमजोरी, और बढ़ाये प्यार
            </div>


            <div className="">
                <p className='fontNoto text-[1.1rem] md:text-[1.3rem] text-justify py-2'>
                    सेक्स कमजोरी मिटाने के लिए आपको चाहिए एक स्थायी इलाज जो समस्या को जड़ से ठीक करने में मदद करें ! ना की वायग्रा जैसी केमिकल वाली गोलियों की जिनका सेक्स प्रॉब्लम से कुछ लेना-देना नहीं है। हर बार सेक्स से पहले वायग्रा की गोलियां खाने और लाइफ को खतरे में डालने से बेहतर है की सुरक्षित और सर्टिफाइड दवा आजमाकर इसे जड़ से ख़त्म किया जाए, और ये सर्टिफाइड दवा है AR Ayurveda का HorseFire Tablet. जी हाँ, ये दवा सेक्स समस्या में बहुत असरदार और पूर्ण रूप से सुरक्षित भी है। वही, केमिकल वाली गोलियां सेक्स समस्या पर कोई असर नहीं करती बल्कि कार्डियक अरेस्ट, लिवर डैमेज, हार्ट स्ट्रोक, और प्रोस्टेट रिलेटेड समस्या उत्पन्न कर सकती है।
                </p>

                <div className="mx-2 my-2 rounded-lg border border-solid border-black">
                    <img src="/main/hmg_images/hft_cer.jpg" alt="" className='w-full mx-auto p-2 !rounded-2xl ' />
                </div>

                <div className="py-2">
                    <OrderBtn />
                </div>

                <p className='fontNoto text-[1.1rem] md:text-[1.3rem] text-justify py-2'>
                    HorseFire Tablet अपनी नाम के भांति ही पुरुषों को बेड पर पावरफुल घोड़े जैसी शक्ति देता है और शरीर के रग-रग में जोश और उत्तेजना की आग लगा देता है जो घंटो तक चलता रहता है। यह पुरुष शक्ति, समय अवधि की सीमा या औजार के कड़कपन को उच्चतम स्तर पर ले जाने में मदद करता है। इस प्रकार पुरुष वो प्रदर्शन कर सकते है जो वे खुद या उनकी फीमेल पार्टनर उनसे चाहती है।
                </p>





            </div>

            <div className="fontNoto bg-black text-white text-xl md:text-2xl pt-2 md:pt-3 text-center font-extrabold my-3">
                हॉर्सफायर के जादू से करें नामर्दी को गायब!
            </div>


            <div className="">
                <p className='fontNoto text-[1.1rem] md:text-[1.3rem] text-justify py-2'>
                    दोस्तों, HorseFire Tablet. अश्वगंधा, शिलाजीत, सफ़ेद मूसली, गोखुरा और केसर जैसी 16 जड़ीबूटियों से बना हुआ एक शुद्ध आयुर्वेदिक सेक्स स्टैमिना और टाइमिंग बूस्टर है। हॉर्सफायर टैबलेट टेबलेट ने खुद को साबित किया है कि सेक्स समस्या के लिए ये ही बेस्ट है। इसे इस काबिल एक पावरफुल जड़ीबूटियों के उचित और संतुलित मिश्रण ने बनाया। इसका सहारा श्रेय इस फार्मूलेशन को तैयार करने वाले आयुर्वेदाचार्यों को को जाता है। जिन्होंने कई सालों तक जड़ीबूटियों का रिसर्च करने के बाद यह असरदार औषधि तैयार किया।
                </p>
            </div>



        </div >
    )
}

export default Sexissue