"use client"
import dynamic from 'next/dynamic';
import React from 'react'


const Order_Now = dynamic(() => import('../components/orderNow'));


const Sec_content = () => {
    return (
        <div className='px-2'>
            <div className=" py-2">


                <img src="/main/hfs_images/pro3.webp" alt="" className='md:w-1/2 w-full mx-auto' />
                <Order_Now />
            </div>

            <p className='text-justify py-2'>
                कई प्रयोग ऐसे ही परिणामों की पुष्टि करते हैं। अध्ययनों में, हमने परीक्षण से पहले और बाद में स्वयंसेवकों के टेस्टोस्टेरोन के स्तर को मापा, साथ ही शरीर के आकार को भी। और 97% मामलों में इस की प्रभावशीलता देखी गई है। और केवल स्वयंसेवक के बीच ही नहीं, बल्कि असली ग्राहकों में भी। उनके साथ घटी कहानियाँ काफ़ी दिलचस्प हैं:
            </p>

        </div>
    )
}

export default Sec_content