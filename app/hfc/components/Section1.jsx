import { Noto_Serif_Devanagari } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section1 = () => {

    const listproductBene = [
        { id: 1, title: '100% सुरक्षित, आयुष मंत्रालय भारत सरकार से प्रमाणित है।', image: '/main/hfc_images/gr_4.png' },
        { id: 2, title: 'आप इसको COD पेमेंट सुविधा के साथ आर्डर कर सकते है।', image: '/main/hfc_images/gr_2.png' },
        { id: 3, title: 'इसके साथ दस दिनों की मनी बैक गारंटी सुविधा उपलब्ध है।', image: '/main/hfc_images/gr_3.png' },
        { id: 4, title: 'समस्या के हिसाब से कस्टम प्रोडक्ट तैयार किया जाता है।', image: '/main/hfc_images/gr_5.png' },
        { id: 5, title: 'यह सभी लैब टेस्टिंग में 100% सफल व असरदार साबित हुआ है।', image: '/main/hfc_images/gr_6.png' },
        { id: 6, title: 'भारत का भरोसेमंद उत्पाद जिसका ऑफिसियल वेबसाइट है।', image: '/main/hfc_images/gr_1.png' },
    ]


    return (
        <section className={noto.className}>
            <section className='md:w-[768px] w-full mx-auto px-3'>

                <div className="ordernowGifNew m-auto mt-5">
                    <a href="#form" className=""><div className="ordernowGifCustom">
                        अभी ऑर्डर करें
                    </div></a>
                </div>

                <div className="pt-4">
                    <p className="">बेड पर कमजोर पुरुषों को फ़िक्र करने की जरुरत नहीं है, क्योंकि गेम-चेंजर प्रोडक्ट <span className="comappColor">'Horse Fire Tablet'</span> अब आपके साथ हैं. जो बिस्तर पर आपकी परफॉर्मेंस को बदलकर रख देगा. आपकी परफार्मेंस को नई ऊंचाइयों पर ले जाएगा.</p>
                </div>



                <div className=" py-4 px-3 text-center mb-4" style={{ background: '#e5e5e5', boxShadow: 'inset 0px 5px 15px #cbcbcb,inset 0px -5px 15px #cbcbcb' }}>

                    <h1 className="comHead11  mb-4" style={{ borderBottom: '1px solid #9a9a9a', display: 'inline-block', fontWeight: '700' }}><span className="comappColor" >Trusted </span>Factors</h1>

                    <div className="grid grid-cols-12 gap-[12px]">
                        {listproductBene.map((item, key) => {
                            return <div key={key} className='col-span-6 sm:col-span-4 my-2'>
                                <div className="beneImageCon mx-auto">
                                    <img src={item.image} alt="pic" className="h-[100px]" />
                                </div>
                                <p className="text-lg mt-3 text-center text-black font-bold mb-0">{item.title}</p>
                            </div>
                        })}
                    </div>

                    <div className="ordernowGifNew m-auto my-2 ">
                        <a href="#form" ><div className="ordernowGifCustom">
                            अभी ऑर्डर करें
                        </div></a>
                    </div>
                </div>


                <div className="px-3 py-4 pt-2">
                    <h1 className='text-center text-2xl pb-4'> <span className="comappColor font-bold">'Horse Fire Tablet'</span><br /> एक संपूर्ण फॉर्मूलेशन</h1>

                    <p className="">Horse Fire Tablet विशेष जड़ी बूटियों और भस्मों की मदद से पुरुष कमजोरी को दूर करने के लिए तैयार किया गया हैं. इसमें अश्वगंधा, शिलाजीत, शतावरी, केसर और सफेद मूसली जैसी 17 जड़ीबूटी और भस्मों की शक्ति मौजूद है। यह एक उन्नत और संपूर्ण फॉर्मूलेशन हैं.</p>

                    <div className="" style={{ background: 'inherite' }}>
                        <Carousel
                            interval={2000} infiniteLoop autoPlay showArrows={false} showIndicators={true} showStatus={false} showThumbs={false}
                        >
                            <div className="w-full">
                                <img src="/main/hfc_images/caro1.jpg" alt="pic" className="w-full" />
                            </div>
                            <div className="w-full">
                                <img src="/main/hfc_images/caro2.webp" alt="pic" className="w-full" />
                            </div>
                            <div className="w-full">
                                <img src="/main/hfc_images/caro3.webp" alt="pic" className="w-full" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="ordernowGifNew m-auto my-3 mb-0 ">
                        <a href="#form" className=""><div className="ordernowGifCustom">
                            अभी ऑर्डर करें
                        </div></a>
                    </div>
                </div>

            </section>
        </section>
    )
}

export default Section1