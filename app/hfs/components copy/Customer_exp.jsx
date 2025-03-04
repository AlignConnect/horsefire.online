import dynamic from 'next/dynamic';
import React from 'react'



const OrderBtn = dynamic(() => import('../components/orderNow'));

const Customer_exp = () => {
    return (
        <section className='w-full max-w-6xl mx-auto px-2'>


            <div className="grid sm:grid-cols-2 py-5 items-center gap-3 mx-3">


                <div className='chat_block'>
                    <img className='chat_icon' src='/main/ck_images/Hitesh.png' />
                    <div className='chat_bubble left'>
                        <div className='text-xl font-semibold'>Jatin Agrawal</div>
                        <div className='text-black text-justify fontNoto text-[1rem] md:text-md pt-5 pb-2 italic '>मेरे पास स्टेमिना बिलकुल भी नहीं था सिर्फ 2 मिनट दौड़ने के बाद ही मैं थक जाता था । लेकिन horsefire tablet का असर ऐसा है जो अब मैं घंटो तक काम कर के भी थकता नही । और अब मेरे पास किसी भी खिलाडी की तरह लम्बा स्टेमिना है।
                        </div>
                    </div>
                </div>

                <div className='chat_block'>
                    <img className='chat_icon' src='/main/hfs_images/manoj.webp' />
                    <div className='chat_bubble left'>
                        <div className='text-xl font-semibold'> Manoj Srivastaw</div>
                        <div className='text-black text-justify fontNoto text-[1rem] md:text-md  pt-5 pb-2 italic '>Horsefire ने मुझे मेरी अपेक्षा से अधिक परिणाम दिये। चाहे मैंने कितनी भी मेहनत की हो, मेरी सहनशक्ति और ताकत ने मुझे कभी निराश नहीं किया। हालाँकि मेरी उम्र 36 साल है, लेकिन मेरी गति और सहनशक्ति किसी 20-25 साल के लड़के से कम नहीं है। अब मेरा पार्टनर भी मेरा दीवाना है.<br />
                        </div>
                    </div>
                </div>
            </div>


            <hr className='my-2' />

            <div className="fontNoto text-xl md:text-3xl font-extrabold text-center py-2 px-1">
                <span className="">&#x201C;</span>कैसे विज्ञान और आयुर्वेद की मदद से वैवाहिक जीवन को सुखी किया जाये, और स्तंभन शक्ति को बढ़ाया जाए?
            </div>

            <p className='text-justify py-2'>
                सब कुछ बहुत सरल है। इन गोलियों के शरीर में पहुँचने के बाद, कुछ दिनों में ही आप देखेंगे कि आपको अक्सर आतंरिक शक्ति महसूस होने लगेगी। आपको अपना आहार बदलने की आवश्यकता नहीं है, न ही किसी तरह के व्यायाम की। यह गोलियाँ स्वाभाविक रूप से आपके जीवन को बेहतर बना देंगी।
            </p>


            <img src="/main/hfs_images/p8.webp" alt="" className='md:w-1/2 w-5/6 mx-auto py-2' />

            <OrderBtn />

            <p className='text-justify py-2'>
                यह जादू नहीं है, यह विज्ञान और आयुर्वेद की शक्ति है जो आपके मर्दाना काम को बेहतर बनाने में मदद करता है। यह अफ्रीकी और आयुर्वेदिक जड़ी-बूटियों जैसे- अफ्रीकी मुलोंडो, शिलाजीत, अश्वगंधा, जयफल आदि के एक विशेष मिश्रण का जटिल प्रभाव है, जो न केवल तेजी से स्टेमिना और आपका आकार बढ़ाता है, बल्कि टेस्टोस्टेरोन की मात्रा भी बढ़ाएगा, इसकी मदद से रक्त परिसंचरण और मानसिक स्थिति में भी सुधार होगा।
            </p>

            <div className="fontNoto text-xl md:text-3xl font-extrabold py-2 px-1">
                <span className="text-red-600">&#x201C;HORSEFIRE </span>के साथ उपचार के प्रभाव के आंकड़े। परिणाम प्रतिशत में व्यक्त किए गए हैं।
            </div>


        </section>
    )
}

export default Customer_exp