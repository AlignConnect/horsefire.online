
import dynamic from 'next/dynamic';
import React from 'react'

const OrderBtn = dynamic(() => import('../components/orderNow'), {
    loading: () => <p>loader</p>
});

const Flip = dynamic(() => import('../components/FlipAmazon'), {
    loading: () => <p>loader</p>
});

const Story = () => {
    return (
        <section>

            <div className="">

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2fdece8f-20e7-4407-3b68-a7dede37d800/public" alt="" className='w-full mt-5' />

                <p className='px-2 py-2 text-center text-gray-500 italic text-lg'>
                    हर पुरुष में अपने साथी को वास्तव में संतुष्ट करने की क्षमता नहीं होती, और न ही मेरे पति में!😞
                </p>

                <hr className='my-3' />


                <p className='px-2 py-2 text-justify'>
                    ...लेकिन अब रात में हमारा मौज-मस्ती का समय घंटों तक चलता है! इस सुपर आयुर्वेद टेबलेट ने मेरे पति के लिए बहुत अच्छा काम किया है! इससे उन्हें बेहतर प्रदर्शन करने और अपनी सहनशक्ति में सुधार करने में मदद मिली, जिससे मुझे वास्तव में संतुष्टि मिली।
                </p>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c7e34284-4328-4af7-b890-8b82a2803300/public" alt="" className='w-full' />

                <p className='px-2 py-2 text-justify'>
                    हर रात अपने पति को केवल 2-3 मिनट में सो जाते हुए देखना, मुझे असंतुष्ट छोड़ना हमारी खूबसूरत शादीशुदा जिंदगी को बर्बाद कर रहा था। सबसे पहले मैंने सोचा,<span className="font-semibold">"अन्य पुरुषों को अपनी महिलाओं को खुश करने के लिए सहनशक्ति और ताकत कैसे मिलती है?"</span>
                </p>


                {/* <img src="/main/htb_images/c3.webp" alt="" className='w-80 sm:w-3/4 mx-auto' /> */}


                {/* <img src="/main/htb_images/c4.webp" alt="" className='w-80 sm:w-3/4 mx-auto' /> */}

                <div className="mb-3">
                    <Flip />
                </div>

                <p className='px-2 py-2 text-justify'>
                    किसी भी तरह, यह हमारे रिश्ते में मदद नहीं कर रहा था! हम एक-दूसरे से प्यार करते थे और अपनी शादी नहीं तोड़ना चाहते थे। मेरे पति ने वह सब कुछ करने की कोशिश की जो आप सोच सकते हैं!
                </p>



                {/* <img src="/main/htb_images/c5.webp" alt="" className='w-80 sm:w-3/4 mx-auto' /> */}



                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/026ff111-eba5-4359-50ae-6916fa548100/public" alt="" className='w-full py-1' />

                <p className='px-2 py-2 text-justify'>
                    उन्होंने जिम ज्वाइन किया, शाकाहारी खाना खाया, योग किया!
                </p>


                {/* <img src="/main/htb_images/c7.webp" alt="" className='w-80 sm:w-3/4 mx-auto' /> */}

                <p className='px-2 py-2 text-justify'>
                    सब कुछ आज़माने के बावजूद उसका प्रदर्शन और सहनशक्ति वैसी ही बनी रही और हमारा मौज-मस्ती का समय हर रात कुछ मिनटों से अधिक नहीं चला
                </p>

                <p className='px-2 py-2 text-justify'>
                    कुछ महीनों तक उसे हर रात मुझे असंतुष्ट छोड़कर सोते हुए देखने के बाद, मैं तंग आ गयी  हूँ! मैं यह सोचकर हैरान रहगयी  कि शायद यह उसकी आनुवंशिकी थी जो इसका कारण बन रही थी और वह इसके बारे में कुछ नहीं कर सकते थे ।
                </p>

                <div className="mb-3">
                    <Flip />
                </div>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/60758604-f12f-4bdd-2662-370f66963f00/public" alt="" className='w-full py-2' />


                <p className='px-2 py-2 text-justify'>
                    उन्हें अपना  आत्मविश्वास खोते हुए देखना बिल्कुल पसंद नहीं आया। मैं उनसे  प्यार करती थी और उनकी  मदद करना चाहती थी , लेकिन मैं असहायथी , क्योंकि मुझे नहीं पता था कि उनकी  मदद कैसे करूँ। हर दिन वह परेशान रहते थे !
                </p>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f0230f1f-5ce4-46db-a21c-60b547cdb900/public" alt="" className='w-full py-2' />

                <p className='px-2 py-2 text-justify'>
                    लेकिन हमारी किस्मत को तो कुछ और ही मंजूर था! हम हमेशा एक साथ रहना चाहते थे! आप सोच रहे होंगे कि क्या हुआ? खैर, यही हुआ...
                </p>

                <div className="mb-3">
                    <Flip />
                </div>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d665f89f-010d-4945-7436-45fde62df800/public" alt="" className='w-full py-2' />

                <p className='px-2 py-2 text-justify'>
                    मैंने एक पुरुष स्वास्थ्य एक्सपर्ट  का वीडियो देखा, जहां उन्होंने कहा कि एक पुरुष स्वाभाविक रूप से घंटों तक प्रदर्शन कर सकता है। अब, यह काफी दिलचस्प था क्योंकि मेरे पति को इसकी ज़रूरत थी!
                </p>



                <img src="/main/htb_images/p2.webp" alt="" className='w-full pb-2' />

                <div className="mb-3">
                    <Flip />
                </div>

                <p className='px-2 py-2 text-justify'>
                    उस वीडियो में वह बताते हैं कि कैसे वह अपने प्रदर्शन और सहनशक्ति को बेहतर बनाने के लिए आयुर्वेद के प्राचीन विज्ञान की शक्ति का उपयोग करते हैं। वह <span className='text-red-500'>HORSEFIRE TABLET</span> नामक आयुर्वेद फार्मूला आधारित उत्पाद पर अपने शोध के बारे में बताते हैं, जिसका वे स्वयं दैनिक उपयोग करते हैं।
                </p>

                <img src="/main/htb_images/p5.webp" alt="" className='w-80 sm:w-3/4 mx-auto pb-2' />

                <div className="mb-3">
                    <Flip />
                </div>


                {/* <div className="text-center py-3">
                    <div className="fontNoto text-2xl font-extrabold text-black">
                        पुरानी कीमत:- <strike className="fontPoppins font-semibold text-red-500"> ₹4000</strike>
                    </div>

                    <div className="fontNoto text-2xl font-extrabold text-black">
                        नई कीमत:-<span className="fontPoppins font-semibold text-green-500"> ₹2300</span>
                    </div>
                </div> */}

                <p className='px-2 py-2 text-justify'>
                    उनका कहना है कि <span className='text-red-500'>HORSEFIRE TABLET</span>  में इस्तेमाल किए गए विभिन्न आयुर्वेदिक अवयवों का शक्तिशाली मिश्रण उनकी सहनशक्ति और प्रदर्शन को बेहतर बनाने में मदद करता है। यह अश्वगंधा, शिलाजीत, सफ़ेद मूसली, गोखुरा और केसर जैसी जड़ी-बूटियों के साथ उन्नत विज्ञान और आयुर्वेद का एक आदर्श मिश्रण है।
                </p>


                <img src="/main/htb_images/p3.webp" alt="" className='w-full pb-2' />



                <p className='px-2 py-2 text-justify'>
                    मूल रूप से <span className='text-red-500'>HORSEFIRE TABLET</span> फॉर्मूला पुरुषों को हार्मोन उत्पन्न करने में मदद करता है और उन्हें फिर से 18 साल का महसूस कराता है। यह स्वाभाविक रूप से आपके साथी को वास्तव में संतुष्ट करने के लिए बहुत अधिक सहनशक्ति और ऊर्जा प्रदान करता है। आपको रोजाना 1 टेबलेट दूध या पानी के साथ लेना चाहिए।
                </p>

                <img src="/main/htb_images/p6.webp" alt="" className='w-80 sm:w-3/4 mx-auto pb-2' />

                <div className="mb-3">
                    <Flip />
                </div>


                {/* <div className="text-center py-3">
                    <div className="fontNoto text-2xl font-extrabold text-black">
                        पुरानी कीमत:- <strike className="fontPoppins font-semibold text-red-500"> ₹4000</strike>
                    </div>

                    <div className="fontNoto text-2xl font-extrabold text-black">
                        नई कीमत:-<span className="fontPoppins font-semibold text-green-500"> ₹2300</span>
                    </div>
                </div> */}


                <p className='px-2 py-2 text-justify'>
                    <span className='text-red-500'>HORSEFIRE TABLET</span>  के बारे में मुझे जो पसंद है वह यह है कि यह 100% मेड इन इंडिया ब्रांड है। यह केवल प्राकृतिक जड़ी-बूटियों से बनाया गया है जो यह सुनिश्चित करता है कि इसका उपयोग सुरक्षित है।
                </p>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1d6900d9-a374-48d2-e56d-f6272226e600/public" alt="" className='w-full pb-2' />

                <p className='px-2 py-2 text-justify'>
                    मैं वीडियो से काफी प्रभावित हुई और अपने पति के लिए भी <span className='text-red-500'>HORSEFIRE TABLET</span>  चाहती थी। इसलिए, मैंने इसे अभी ऑर्डर करने का निर्णय लिया। हमने सारी आशा खो दी थी, इसलिए प्रयास करने में कोई हानि नहीं थी!
                </p>

                <img src="/main/htb_images/p7.webp" alt="" className='w-80 sm:w-1/2 mx-auto py-4' />

                <div className="mb-3">
                    <Flip />
                </div>


                {/* <div className="text-center py-3">
                    <div className="fontNoto text-2xl font-extrabold text-black">
                        पुरानी कीमत:- <strike className="fontPoppins font-semibold text-red-500"> ₹4000</strike>
                    </div>

                    <div className="fontNoto text-2xl font-extrabold text-black">
                        नई कीमत:-<span className="fontPoppins font-semibold text-green-500"> ₹2300</span>
                    </div>
                </div> */}


                <p className='px-2 py-2 text-justify'>
                    सबसे महत्वपूर्ण बात यह है कि <span className='text-red-500'>HORSEFIRE TABLET</span> उत्पादों की कीमत मेरे लिए सस्ती थी। मैंने कैश ऑन डिलीवरी विकल्प चुना
                </p>



                <img src="/main/htb_images/p9.jpg" alt="" className='w-full py-4' />


                <div className="mb-3">
                    <Flip />
                </div>


                <p className='px-2 py-2 text-justify'>
                    3 दिन बाद, मुझे मेरा पार्सल प्राप्त हुआ। ऐसा दिखता था. जैसा कि आप देख सकते हैं, मैंने पार्सल खोलते समय एक तस्वीर ली।
                </p>


                <div className="text-center font-extrabold fontNoto text-3xl"> इसका परिणाम क्या है?</div>

                <img src="/main/htb_images/c12.jpg" alt="" className='w-full pb-2' />



                <p className='px-2 py-2 text-justify'>
                    मेरे पति ने पहले दिन से हर रात यह टेबलेट लेना शुरू किया और एक सप्ताह तक जारी रखा। इसका उपयोग करने के 4-5 दिनों के बाद, मेरे पति को लगा कि उनका प्रदर्शन बेहतर हो रहा है और सहनशक्ति भी।
                </p>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4ab3de5a-6e04-4c93-156a-03f4309c6600/public" alt="" className='w-full pb-2' />


                <div className="mb-3">
                    <Flip />
                </div>


                <p className='px-2 py-2 text-justify'>
                    मुझे अभी भी याद है वह सातवां दिन था और उस रात वह पूरी तरह से एक असली आदमी में बदल गया था। वह रात हमारे जीवन की सबसे अच्छी रात थी। करीब 1 घंटे तक लगातार मजा आया। मैं पहले कभी इतना संतुष्ट नहीं हुई थी. मैं कभी भूल नहीं सकती ।
                </p>


                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a5af31e5-c3eb-4238-7dda-c621fc74dd00/public" alt="" className='w-full pb-2' />


                <p className='px-2 py-2 text-justify'>
                    मुझे ऐसा लग रहा था जैसे मैं अपने पति से पहली बार मिल रही हूँ। वह पूरी तरह से इतने जोश और ऊर्जा से भरा हुआ था। मानो या न मानो, वह अनुभव अमूल्य है।
                </p>

                <p className='px-2 py-2 text-justify'>
                    मैं यह अपने दिल की गहराइयों से कहती हूं, मैं अपने पति का आत्मविश्वास वापस लाने के लिए <span className='text-red-500'>HORSEFIRE TABLET</span> को बहुत-बहुत धन्यवाद देती हूं। इसने मुझे मेरे जीवन की सबसे बड़ी ख़ुशी दी। यदि आप भी वैसा ही अनुभव चाहते हैं, तो आपको इसे अवश्य आज़माना चाहिए।
                </p>

                <img src="/main/htb_images/p8.webp" alt="" className='w-72 sm:w-3/6 mx-auto py-2' />

                <div className="mb-3">
                    <Flip />
                </div>


                {/* <div className="text-center py-3">
                    <div className="fontNoto text-2xl font-extrabold text-black">
                        पुरानी कीमत:- <strike className="fontPoppins font-semibold text-red-500"> ₹4000</strike>
                    </div>

                    <div className="fontNoto text-2xl font-extrabold text-black">
                        नई कीमत:-<span className="fontPoppins font-semibold text-green-500"> ₹2300</span>
                    </div>
                </div> */}
            </div>

        </section>
    )
}

export default Story