import dynamic from 'next/dynamic'
import React from 'react'


// const FlipA = dynamic(() => import('./FlipAmazon'), {
//     loading: () => <p>loader</p>
// })

const FlipA = dynamic(() => import('./Orderbtn2'), {
    loading: () => <p>loader</p>
})

const Section1 = () => {

    return (
        <div className='fontNoto mt-4'>

            <div className='bg-[#3a393e] text-white px-3 pt-2 rounded-lg font-bold text-2xl text-center my-2 inline-block'>इस उपाय से आपका लिंग बनेगा फौलाद और आप बनाएंगे टाइमिंग का नया रिकॉर्ड</div>

            <div className="w-100 ">
                <img src="/main/brc_images/image1.png" alt="pic" className="w-full" width='100%' height='100%' loading='lazy' />
            </div>

            <p className="text-[1.1rem] sm:text-xl mt-2">दोस्तों आज के दौर के अधिकांश पुरूष लिंग में ढीलेपन, कामोत्तेजना में कमी और बेड पर देर तक ना टिक पाने की वजह से काफी परेशान रहते हैं. पर आपको यह जानकर अत्यंत खुशी होगी, कि हमने आपकी इस परेशानी का वैज्ञानिक हल ढूंढ निकाला हैं. ये वैज्ञानिक तरीका आपके अंग को बनाएगा सख्त और मजबूत, साथ ही इससे आपकी सेक्स टाइमिंग में भी आश्चर्यजनक रूप से वृद्धि हो जाएगी.
            </p>


            <div className='text-center pb-3'>
                <div className='bg-[#3a393e] text-white px-3 pt-2 rounded-lg font-bold text-2xl text-center my-2 inline-block'>इस वैज्ञानिक तरीके का आधार इस प्रकार हैं</div>
            </div>



            <ul className='font-bold text-justify text-[1.1rem] sm:text-xl text-[#a52a2a] ms-8 list-disc' >
                <li>इस वैज्ञानिक तरकीब के जरिए आपके एनर्जी लेवल में असाधारण रूप से वृद्धि होती हैं, साथ ही स्टेमिना को बुस्ट करने में यह तरीका अत्यंत लाभदायक हैं.</li>

                <li>बिस्तर पर जल्दी स्खलित हो जाने वाले पुरुषों की टाइमिंग इस वैज्ञानिक तरीके को अपनाने के बाद काफी बढ़ने लगी हैं.</li>

                <li>जिन पुरुषों में टेस्टोस्टेरोन का स्तर सामान्य से कम होता हैं, इस वैज्ञानिक तरीके के जरिए उनके टेस्टोस्टेरोन के स्तर में वृद्धि होती हैं.</li>

                <li>सेक्स के प्रति उदासीन पुरूषों के यौन जीवन में इस वैज्ञानिक तरीके के माध्यम से कामोत्तेजना की उत्पत्ति होती हैं. साथ ही उनकी पौरूष शक्ति कई गुना तक बढ़ जाती हैं.</li>

                <li>आपकी तसल्ली के लिए बता दें दोस्तों, कि उपरोक्त सभी बातों पर विज्ञान अपनी मुहर पहले ही लगा चुका हैं.</li>
            </ul>
            <FlipA />

        </div>)
}

export default Section1