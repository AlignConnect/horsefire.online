import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";
import { MdVerified } from "react-icons/md";

const BtnOrder = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn1'))


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const x = [
    "सुबह - शाम 1 टेबलेट 1 गिलास गुनगुने दूध के साथ।",
    "असर दिखने पर चाहे तो 24 घंटे में 1 गोली खाएं।",
    "कम से कम 3 महीने का कोर्स तो अवश्य पूरा करें।",
    "या फिर बेहतर सलाह के लिए उनके एक्सपर्ट से संपर्क करें !"
]

const y = [

    "15 दिनों के अंदर सेक्स अवधि में 10x वृद्धि ",
    "लिंग के लम्बाई और मोटाई में वृद्धि ",
    "जोश,  शक्ति और स्टैमिना मे अद्भुत वृद्धि",
    "कामेच्छा में वृद्धि, अन्य गुप्त रोग जड़ से हल"
]

const Section3 = () => {


    function loop(x) {
        return x.map((e, key) => {
            return <li key={key}>{e}</li>
        })
    }

    function loopy(x) {
        return x.map((e, key) => {
            return <li key={key} className="flex gap-2 p-1 font-semibold"><MdVerified className="text-green-700 text-xl" />{e}</li>
        })
    }



    return (
        <section className={noto.className}>
            <h2 className='text-[24px] text-center font-bold mt-5 mx-2'>पति ने रात भर में 4 बार पानी निकाला</h2>

            <p>
                4 दिन के अंदर प्रोडक्ट डिलीवर हो गया। एक्सपर्ट के बताये तरीके से सेवन करने लगे मात्र एक सप्ताह में रिजल्ट देख मैं चौक गयी। उनका लिंग बहुत कठोर हो गया था। लिंग का उभार साफ दिख रहा था की बहुत दिनों बाद सेक्स के लिए बेताब है। मैं भी बेचैन थी परिमाण देखने के लिए, फिर हमने सेक्स किया पहली बार हमारा सेक्स नॉनस्टॉप 15 मिनट से ज्यादा चला था वो भी मात्र एक सप्ताह में। मैं अंदर ही अंदर संतुष्टि महसूस कर रही थी।
            </p>

            <div className="w-full">
                <img src="/main/og_images/im4.jpg" alt="asdasd" loading="lazy" className="w-full" />
            </div>




            <p>
                मेरे पति भी इस अविश्वसनीय प्रभाव से हैरान थे। मात्र 15 दिनों में उनका लिंग लम्बा और मोटा भी दिखने लगा था, सेक्स अवधि में भी जोरदार वृद्धि हो गयी। अगले सेक्स में उन्होंने मुझे 4 बार झाड़ दिए। अब उनका लिंग मजबूत हो गया है। हर शॉट में मेरी चीख निकल जाती है पर मुझे वो मजा मिलता है जो मैं हमेशा से चाहती थी।
            </p>


            <div className="text-white bg-[#c21e1f] pt-3 px-2">
                <h1 className="text-3xl font-bold">सेक्स लाइफ को एन्जॉय करें</h1>
                <p>
                    मैं उन लड़कियों में से हूँ जो लाइफ को इंजॉय करना चाहती है न की काटना ! अगर कोई भी पुरुष जल्दी डिस्चार्ज हो जाता है, लिंग में दम नहीं है तो उसे Horse Fire Tablet अवश्य आजमानी चाहिए !
                </p>
            </div>

            <div className='mt-4 flex justify-center'>
                <BtnOrder />
            </div>


            <div className="bg-[#f4e42f] rounded-xl my-3 p-4">

                <h1 className="text-3xl font-bold">ऐसे करें सेवन</h1>

                <ul className="list-disc w-[90%] ms-5">
                    {loop(x)}
                </ul>

            </div>




            <div>

                <h2 className="text-2xl text-center">Horse Fire से होने वाले लाभ </h2>

                <ul className="w-[90%] ms-5">
                    {loopy(y)}
                </ul>

            </div>

            <div className="w-full">
                <img src="/main/og_images/im3.jpg" alt="asdasd" loading="lazy" className="w-full" />
            </div>

            <div className='mt-4 flex justify-center'>
                <BtnOrder />
            </div>

        </section>)
}

export default Section3