import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});



function SexProblemHeader() {

    var settings = {
        dots: false,
        speed: 1000,
        initialSlide: 0,
        infinite: true,
        className: "center",
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
    };

    const aryurvedic_list = [{
        id: 1,
        name: 'अश्वगंधा',
        nameId: 'ashwagandha',
        image: '/main/mg_images/ashwagandha.png',
        content: 'यह टेस्टोस्टेरोन बढ़ाकर स्टैमिना और इरेक्शन बढाने में मदद करता है।'
    },
    {
        id: 2,
        name: 'शिलाजीत',
        nameId: 'shilajit',
        image: '/main/mg_images/shilajit.png',
        content: 'जोश, उर्जा, स्टैमिना, तथा कड़कपन और टाइमिंग बढाने मदद करता है।'
    },

    {
        id: 3,
        name: 'श्वेत मूसली',
        nameId: 'safed musli',
        image: '/main/mg_images/swet musli.png',
        content: 'कामोत्तेजना तथा टेस्टोस्टेरोन का स्तर बढ़ाने में मदद करती हैं।'
    },
    {
        id: 4,
        name: 'गोखरू',
        nameId: 'gokshura',
        image: '/main/mg_images/gokshura.png',
        content: 'पार्ट का कड़कपन, शारीरिक बल और टाइमिंग बढ़ाने में मदद करता है।'
    },
    {
        id: 5,
        name: 'केसर',
        nameId: 'keshar',
        image: '/main/mg_images/kesar.png',
        content: 'दिमाग को शांत रखने, स्टैमिना बढ़ाने और बेहतर प्रदर्शन करने में मदद करता है।'
    }
    ]

    return (

        <div className="w-full text-[1.1rem] sm:text-xl text-justify ">
            <div className="py-5">
                <OrderBtn />
            </div>

            <img src="/main/mg_images/02.jpg" alt="pic" width='100%' height='100%' loading='lazy' />

            <div className="px-3">
                <p className=" my-5">अगर आप भी उन पुरुषों में से एक है, जो अपने बेड प्रदर्शन को लेकर चिंतित है तो ऐसे में आपको जरुरत है <span style={{ fontWeight: "bold" }}>Horse Fire Tablet</span> आजमाने की। <span style={{ fontWeight: "bold", color: "red" }}>Horse Fire Tablet</span> एक प्रमाणित आयुर्वेदिक औषधि है जो कमजोर शरीर में भी घोड़े जैसी स्टैमिना, ऊर्जा और ताकत भर देती है। इतना ही नहीं <span style={{ fontWeight: "bold", color: "red" }}>Horse Fire Tablet</span> बेस्ट फार्मूलेशन है जो पार्ट का इरेक्शन और टाइमिंग बढ़ाकर आपका यौन प्रदर्शन <span style={{ fontWeight: "bold", color: "red" }}>10X</span> तक बढ़ा सकती है।
                </p>

                <p className="text-3xl sm:text-4xl text-red-600 text-center font-extrabold">ये हर्ब्स है बेमिसाल!</p>
            </div>

            <div className="w-10/12 mx-auto mb-5">
                <Slider {...settings} >

                    {aryurvedic_list.map((e, key) => {
                        return <div key={key}>
                            <div className="bg-[#f6f6f6] text-center p-2  h-full rounded-xl mx-2  shadow-sm shadow-slate-500">
                                <img src={e.image} alt="pic" className="" width='100%' height={'160rem'} loading="lazy" />
                                <div className='flex justify-center m-2' style={{ height: "50%" }}>
                                    <div className='rounded-3' style={{ width: "60%" }}>
                                        <h1 className="text-center text-3xl sm:text-4xl pt-2 font-bold" style={{ color: "red", margin: "0", }}>{e.name}</h1>
                                    </div>
                                </div>
                                <div className=" mt-2 text-[1.3rem] sm:text-2xl font-extrabold" style={{ height: '120px' }}>{e.content}</div>
                            </div>
                        </div>
                    })}
                </Slider>
            </div>
            <OrderBtn />

        </div>
    )
}

export default SexProblemHeader