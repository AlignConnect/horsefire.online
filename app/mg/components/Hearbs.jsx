import dynamic from 'next/dynamic';
const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});
function Hearbs() {
    const list2 = [
        "यौन हॉर्मोन टेस्टोस्टेरोन का स्तर बढ़ाए",
        "पार्ट की ढीली नसों की मरम्मत करे",
        "पार्ट में रॉड जैसी कठोरता दे",
        "2 मिनट की टाइमिंग को घंटो में बदले",
        "स्ट्रेंथ, एनर्जी और स्टैमिना बूस्ट करे ",
        "कॉन्फिडेंस लेवल बूस्ट करे ",
    ]

    return (
        <div className='w-full px-3 relative'>


            <div className="text-center font-extrabold">
                <p className="text-3xl sm:text-4xl mb-3"><span className="text-red-600">Horse Fire Tablet</span><br />
                    के चमत्कारी लाभ</p>
                <div className="text-white space-y-5 text-xl sm:text-2xl">
                    {list2.map((e, key) => {
                        return <div className="" key={key}>
                            <p className="clippath bg-black pt-3 pb-1 ">{e}</p>
                        </div>
                    })}

                </div>
            </div>

            <div className='text-center italic font-bold px-2 my-5 text-xl sm:text-[1.6rem] pt-2 sm:pt-4 sm:pb-2 bg-[#ffffc1] rounded-xl' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }} >ऊपर बताई गयी कोई भी यौन कमजोरी हो तो आज ही एक्सपर्ट से सलाह लें और खुशहाली की और आगे बढे !!</div>


            <div className={`w-full sm:w-8/12 mx-auto`}>
                <img src="/main/mg_images/horsefire.webp" alt="pic" width='100%' height='100%' loading='lazy' />
            </div>

            <OrderBtn />

        </div>
    )
}

export default Hearbs