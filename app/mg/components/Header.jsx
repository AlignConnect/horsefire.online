import React from 'react'

function Header() {

    const list1 = [
        "दमदार घोड़े जैसी स्टैमिना",
        "बड़ा और मजबूत औजार",
        "लम्बी और टिकाऊ टाइमिंग",
        "महिला संतुष्टि वाला प्रदर्शन",
        "अन्य धातु रोग से राहत",
    ]

    return (
        <div className='w-full   '>
            <div className="px-3 pt-5 pb-3  font-extrabold text-center">

                <p className="text-4xl sm:text-5xl">विशषज्ञों ने लगाई मुहर</p>
                <p className="text-2xl sm:text-3xl mt-3 italic">"इस फार्मूला से बढ़ेगी टाइमिंग और औजार की सख्ती, आप भी जान लें!"</p>
            </div>
            <img src="/main/mg_images/01.jpg" alt="pic" width='100%' height='100%' loading='lazy' />

            <div className="px-3 text-[1.1rem] sm:text-xl mt-5">
                <p className="">दोस्तों, आजकल पुरुषों में यौन कमजोरी बहुत तेजी से बढ़ रही है। जवान रहते पुरुष अपनी मर्दानगी खो रहे है। एक तरह युवा वर्ग शीघ्रपतन से पीड़ित है वही बहुत सारे पुरुष 35-40 की उम्र में पार्ट का कड़कपन खोते जा रहे है और समय अवधि भी घटती जा रही है। </p>
                <div className="text-center font-extrabold mt-5">
                    <p className="text-3xl sm:text-4xl text-red-600">क्या आप ये चाहते हैं?</p>
                    <div className="text-white space-y-5 text-xl sm:text-2xl">
                        {list1.map((e, key) => {
                            return <div className="" key={key}>
                                <p className="clippath bg-black pt-3 pb-1 ">{e}</p>
                            </div>
                        })}

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Header