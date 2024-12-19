import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';
import React from 'react'

const BtnOrder = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn1'))

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section1 = () => {
    return (
        <section>

            <div className={noto.className}>

                <h3 className={"text-[1.6rem] md:text-[1.9rem] text-center font-black pt-4 pb-3"}>आखिरकार मुझे सेक्स पावर बढ़ाने का असरदार दवा मिल गयी..!</h3>

                <div className='w-full'>
                    <img src="/main/og_images/doc.jpg" alt="asd" loading='lazy' className='w-full' />
                </div>

                <p className='text-[13px] font-semibold py-2'>
                    (Friday, October 6, 2023 New discovery from All India Institute of Medical Sciences, New Delhi professor make it easier to treat male dysfunction.)
                </p>

                <div className='grid md:grid-cols-2 bg-black text-white items-center text-center p-3'>
                    <div className='flex justify-center sm:justify-start items-center  gap-4'>
                        <div>
                            <img src="/main/og_images/fen.png" alt="sdsd" loading='lazy' />
                        </div>
                        <div className='text-start'>
                            <p className={`${poppin.className} text-xl font-bold`}>Rashika</p>
                            <p>Age : 29 years</p>
                        </div>
                    </div>
                    <div>
                        <button className='bg-white text-black pt-2 px-5 my-2 rounded-xl font-bold'>
                            based on true story
                        </button>
                        <p className='text-[11px]'>
                            Publised on {dayjs().subtract(1, 'days').format('DD/MM/YYYY')}
                        </p>
                    </div>
                </div>

                <div className='mt-4 flex justify-center'>
                    <BtnOrder />
                </div>

                <div>
                    <div className='bg-[#f3e52d] font-bold text-xl md:text-2xl my-3 pt-2 px-2'>
                        मजेदार सेक्स लाइफ चाहते है तो सिर्फ 5 मिनट दें, और इस पोस्ट को पूरा पढ़ें !
                    </div>

                    <p className='my-2'>
                        दोस्तों, मैं हूँ रशिका 29 साल की जवान लड़की 6 साल पहले मेरी शादी हुई थी पर मेरे हाथ सिर्फ निराशा ही लगी क्योंकि 8 साल बड़े मेरे पति सेक्स के खेल में  कमजोर मिले। मैं अपनी गदराई जवानी लेकर दिन-रात तड़पती रहती थी। उनके ढीले लिंग से कुछ नहीं हो पाता था अगर कभी कभार थोड़ी बहुत सख्ती मिल भी जाए तो 2-4 झटको में डिस्चार्ज हो जाते थे फिर चाहे हाथ से हिलाऊ या मुँह से चूसूं लिंग खड़ा नहीं होता था।
                    </p>


                    <p className='my-2'>
                        खीरा-मूली-गाजर जो मिले उससे मैं अपनी आग बुझाने की कोशिश करती, पर जिस्मानी आग तो जिस्म से ही बुझती है ना दोस्तों? घर में खीरे-मूली-गाजर सलाद से ज्यादा पर्सनली उपयोग में लेने लगी पर कभी भी गैर मर्द के बारे में नहीं सोचा क्योंकि अपने पति को धोखा देकर यौन सुख नहीं पाना चाहती थी।
                    </p>

                    <p className='my-2'>
                        मैं पोर्न फिल्मो के एक्टर को देखकर सोचती थी इनका लिंग इतना सख्त कैसे और ये इतने लम्बे समय तक सेक्स कैसे कर लेते है "काश! मेरे पति भी इस तरह सेक्स कर मुझे खुश कर देते " पर सोचने से क्या होता है जो नसीब में होता है वही मिलता है यही सोचकर अपने मन को मनाने की कोशिश करती थी।
                    </p>


                    <p>
                        हमने बहुत दवाइयां आजमाए, नीम-हकीमों से मिले पर कोई फर्क नहीं मिला। मेरे पति और भी दुखी और निराश हो जाते जब वो मुझे खुश नहीं कर पाते थे।
                    </p>


                </div>


            </div>

        </section>)
}

export default Section1