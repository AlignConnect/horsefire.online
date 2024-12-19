import { Noto_Serif_Devanagari } from "next/font/google";


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Header = () => {
    return (

        <section className={noto.className}>
            <section className='md:w-[768px] w-full mx-auto '>
                <div className="text-center font-bold pt-4 pb-2 px-6 mb-2 text-2xl bg-black text-white "    >
                    HORSEFIRE TABLET
                </div>

                <div className="px-3">
                    <div className='text-3xl py-4 text-red-500 text-center font-bold'>ये उपाय अपनाएंगे तो गारंटीड सुधर जाएगी सेक्सुअल लाइफ
                    </div>

                    <p className="text-xl">बिस्तर पर सर्वश्रेष्ठ प्रदर्शन करना हर पुरुष का सपना होता हैं पर पुरुष कमजोरी की वजह से यह एक सपना ही रह जाता है। लेकिन अब चिंता करने की कोई जरुरत नहीं है, क्योंकि <span className="text-red-600 font-bold text-xl">Horse Fire Tablet</span> है पुरुष समस्या का सबसे Best Solution तो बस इसे आजमाए और पुरुष कमजोरी भूल जाये !</p>

                    <div>
                        <img src="/main/mg_images/02.jpg" alt="dsad" loading='lazy' className='w-full h-full' />
                    </div>

                </div>
            </section>
        </section>

    )
}

export default Header