import dynamic from 'next/dynamic';
import React from 'react'
const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});

const Herbs = () => {

    const Herbs = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center gap-1 bg-[#d6eaeb] px-2 my-3 rounded-md ' key={key}>
                <img src={e.herbs_icon} className='w-1/3 mx-auto py-3' alt='Benifits_images' />
                <div className="py-4">
                    <div className='fontNoto text-xl md:text-2xl font-extrabold '>{e.herbs_name}</div>
                    <div className=" fontNoto text-[1.1rem] md:text-[1.3rem] ">{e.herbs_content}</div>
                </div>
            </div >
        })
    }

    return (
        <div>




            <div className=''>
                {
                    Herbs([
                        {
                            herbs_icon: "/main/hmg_images/ashwa.png",
                            herbs_name: "अश्वगंधा-",
                            herbs_content: "इसके सेवन से ताकत महसूस होती है, लिंग में हार्ड इरेक्शन मिलता है, और सेक्स टाइमिंग बढ़ती है ।"
                        },
                        {
                            herbs_icon: "/main/hmg_images/shial.png",
                            herbs_name: "शिलाजीत-",
                            herbs_content: "यह जोश उत्तेजना बढ़ाने का असरदार औषधि है। यह पेल्विक मसल्स मजबूत कर स्खलन पर कण्ट्रोल बढ़ाता है।"
                        },
                        {
                            herbs_icon: "/main/hmg_images/safed.png",
                            herbs_name: "सफ़ेद मूसली-",
                            herbs_content: "सफेद मूसली विख्यात शक्तिवर्धक और जोशवर्धक जड़ीबूटी है। यह जोश और उत्तेजना बढ़ाने में बखूबी काम करता है।"
                        },
                        {
                            herbs_icon: "/main/hmg_images/gok.png",
                            herbs_name: "गोखरू-",
                            herbs_content: "यह जोश, उर्जा, शारीरिक शक्ति और सेक्स टाइमिंग में बढ़ोत्तरी करता है। केसर वाला दूध सुहागरात के लिए मशहूर भी है।"
                        }
                    ])
                }
            </div>


            {/* <div className="mx-2 my-2 rounded-lg border border-solid border-black">
                <img src="/main/hmg_images/product.webp" alt="" className='w-3/4 mx-auto p-2 !rounded-2xl ' />
            </div> */}
            <div className="py-2">
                <OrderBtn />
            </div>



            <div className="">
                <p className='fontNoto text-[1.1rem] md:text-[1.3rem] text-justify py-2'>
                    दोस्तों, HorseFire Tablet के इस्तेमाल से पुरुष को इतनी एनर्जी, स्टैमिना और टाइमिंग मिल जाती है जिससे वो अपने महिला साथी को संतुष्ट कर सके। इसकी वजह से पूरे भारत में इसका इस्तेमाल तेजी से बढ़ा है। पुरुष इसके इस्तेमाल से अपनी यौन कमजोरी दूर कर रहे है और एक रोमांचक जीवन व्यतीत कर रहे है । यह प्रोडक्ट आयुष मंत्रालय भारत सरकार द्वारा प्रमाणित है और पूर्णतः आयुर्वेदिक है जिसका कोई भी साइड इफ़ेक्ट नहीं है।
                </p>
            </div>


        </div>
    )
}

export default Herbs