import dynamic from 'next/dynamic';
import React from 'react'
const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});

const YoutubeFrame71 = dynamic(() => import('@/app/mg/components/YoutubeFrame'), {
    loading: () => <p>loader</p>
});
function Section1() {
    return (
        <div className='w-full '>
            <div className=" px-3 py-5 text-[1.1rem] sm:text-xl text-justify">

                <p className=""><span className='font-bold'>Horse Fire Tablet</span> इन जैसी 17 बेमिसाल जड़ीबूटियों और कामोत्तेजक भस्मों को मिलकर बना है। <span className='font-bold'>Horse Fire Tablet</span> पर हुए शोधों के अनुसार यह शीघ्रपतन, इरेक्टाइल डिसफंक्शन, लो स्टैमिना जैसी समस्त यौन समस्याओं का बेस्ट आयुर्वेदिक इलाज है। यह पुरुष के शरीर में उन सभी पौष्टिक तत्त्वों और हॉर्मोन की पूर्ति करने में मदद करता है जो एक पुरुष को 55 साल की उम्र में भी जवान रहने के लिए चाहिए।</p>

                <div className='mt-3 mb-1 bg-[#ffffc1] p-1 rounded-xl' style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                    <div className='text-center pt-3 rounded-xl'>
                        <div className=' text-2xl font-extrabold' >
                            जानिए क्या कहते है सेलिब्रिटी<br /><span className='text-red-600'>Horse Fire Tablet</span> के बारे में

                        </div>
                        <div className="w-100 p-2">

                            <YoutubeFrame71 vid='I6VBauarWrM' />

                        </div>
                    </div>
                </div>

                <div className="my-5">
                    <OrderBtn />
                </div>

                <p className="">इसके सेवन किसी भी यौन कमजोरी से पीड़ित व्यक्ति कुछ सप्ताह के भीतर ही रिकवर होने लगता है। व्यक्ति का जोश, उत्तेजना, औजार की कठोरता और समय अवधि बढ़ने लगती है। इस प्रकार 2-3 मिनट या उससे भी कम समय टिकने वाले पुरुष लम्बा टिकने लगते है और जोरदार प्रदर्शन कर महिला पार्टनर को असली मजा दे पाते है।</p>

                <div className='mt-3 mb-1 bg-[#ffffc1] p-1 rounded-xl' style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                    <div className='text-center pt-3 rounded-xl'>
                        <div className=' text-2xl font-extrabold' >
                            <span className='text-red-600'>Horse Fire Tablet</span><br /> पर ग्राहकों की प्रतिक्रिया
                        </div>

                        <p className="text-start px-3 text-[1.1rem]">Horse fire tablet यौन समस्या से पीड़ित पुरुषों की पहली पसंद बन गया है। ग्राहक इसके परिणाम से काफी संतुष्ट है, इसका नियमित इस्तेमाल करके पुरुष लगातार अपने प्रदर्शन में इजाफा कर रहे है और सेक्सुअल लाइफ जो खुशहाल मोड़ दे रहे है। आप परिणाम खुद देख लीजिये-</p>

                        <div className="w-100 p-2">
                            <YoutubeFrame71 vid='h6diHEikhdQ' />
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <OrderBtn />
                </div>

            </div>
        </div>
    )
}

export default Section1