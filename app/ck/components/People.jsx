import dynamic from 'next/dynamic';
import React from 'react'



const OrderBtn = dynamic(() => import('../components/orderNow'), {
    loading: () => <p> Loading</p>
});

const People = () => {
    return (
        <section className='w-full max-w-6xl mx-auto'>

            <hr />


            <div className="fontNoto text-[1.1rem] md:text-3xl font-extrabold pt-5 pb-2 text-center md:text-left ">
                <span className="">&#x201C;</span><span className='text-red-600 fontPoppins'>HORSEFIRE TABLET</span> का दो हफ्तों तक प्रयोग करने के बाद यह प्रभाव सामने आया।
            </div>


            <img src="/main/ck_images/p6.webp" alt="" className='w-80 sm:w-3/6 mx-auto py-4' />

            <OrderBtn />

            <ul className='text-black text-justify fontNoto text-[1.1rem] md:text-xl py-3 px-2 ms-8 list-disc'>
                <li>
                    उसका वैवाहिक जीवन सुधर गया है।
                </li>
                <li>
                    अब उसका स्टेमिना बढ़ गया है।
                </li>
                <li>
                    उसकी मानसिक स्थिति बेहतर हो गई है।
                </li>
                <li>
                    इरेक्शन लंबे समय तक बना रहता है, और पार्टनर के साथ रोमांस करने की उत्सुकता भी बनी रहती है।
                </li>
                <li>
                    उसकी कामेच्छा और टेस्टोस्टेरोन का स्तर बढ़ गया, और बिस्तर में रोमांस करने की क्षमता में बहुत सुधार हुआ है।
                </li>
            </ul>

            <img src="/main/ck_images/c12.jpg" alt="" className='w-full  rounded-xl  sm:w-3/4 mx-auto py-3' />

        </section>
    )
}

export default People