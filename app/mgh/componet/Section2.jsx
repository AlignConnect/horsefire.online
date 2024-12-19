import dynamic from 'next/dynamic'

const FlipA = dynamic(() => import('./Orderbtn2'), {
    loading: () => <p>loader</p>
});


const Section2 = () => {
    return (
        <section className='fontNoto text-[1.1rem] sm:text-xl'>

            <div className='bg-[#3a393e] text-white px-3 pt-2 rounded-lg font-bold text-xl sm:text-2xl text-center my-2 inline-block'>अगर आपको भी दुनिया के कई सारे पुरुषों की तरह ही सेक्सुअल टाइमिंग बढ़ाने में अब तक सफलता नहीं मिली हैं, तो बिल्कुल भी निराश ना हों, क्योंकि अब आपकी यह समस्या पूर्ण रूप से ठीक होने वाली हैं.</div>



            <p className='my-2'><span className='text-red-500 font-bold'>HorseFire Tablet</span> के महज कुछ दिनों के इस्तेमाल के बाद ही मेरी टाइमिंग हो गई एकदम परफेक्ट</p>


            <img src="/main/brc_images/image3.jpg" alt="pic" width='100%' height='100%' loading='lazy' />


            <p className='mt-3'>"पहले मेरी सेक्सुअल टाइमिंग इतनी खराब थी कि मैं बिस्तर पर चढ़ते ही ढेर हो जाता था. शर्म के मारे मैं पार्टनर से कभी नजरें नहीं मिला पाता था. पर जब मैंने <span className='text-red-500 font-bold'>HorseFire Tablet</span> का इस्तेमाल शुरू किया, तो मेरे अन्दर जैसे करिश्मा हो गया. अब मैं बिना रुकें, बिना थकें काफी देर तक सेक्स कर सकता हूं. सिर्फ इतना ही नहीं मेरे जोश और स्टेमिना को बढ़ाने में भी <span className='text-red-500 font-bold'>HorseFire Tablet </span>ने महत्वपूर्ण भूमिका निभायी हैं. अब मेरी नजरें शर्म से झुकने की बजाए, सेक्स, जोश और उन्माद में डूबी रहती हैं."</p>

            <FlipA />

            <div className='bg-[#3a393e] text-white px-3 pt-2 rounded-lg font-bold text-xl sm:text-2xl text-center my-2 inline-block'>जानें विज्ञान की मदद से आपकी सेक्सुअल टाइमिंग को कैसे एक्चुअल सेक्सुअल टाइमिंग में बदलें</div>

            <p className=''>
                आपकी सेक्स लाइफ को गति देने वाले इस नुस्खे का उपयोग बेहद आसान हैं. गोलियां आपके शरीर में पहुंचने के साथ ही अपना असर दिखाना शुरू कर देती हैं. आपके शरीर के अन्दर आवागमन करती हुई ये गोलियां शरीर के हर हिस्से पर अपना असर दिखाती हैं. खासकर आपके लटके हुए औजार को यह किसी मीनार की भांति खड़ा कर देती हैं. ट्रैक से उतर चुकी टाइमिंग की ट्रेन इसके जरिए फिर से पटरी पर दौड़ने लगती हैं. </p>

            <div className='bg-[#3a393e] text-white px-3 pt-2 rounded-lg font-bold text-xl sm:text-3xl text-center my-2 inline-block'>जबरदस्त <span style={{ color: "yellow", fontWeight: "bold" }}>HorseFire Tablet</span> के दिलचस्प आंकड़े आपके सामने हैं</div>

            <img src="/main/brc_images/image4.jpg" alt="pic" width='100%' height='100%' loading='lazy' />

            <FlipA />

        </section>
    )
}

export default Section2