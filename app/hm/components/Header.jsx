import dayjs from 'dayjs'
import dynamic from 'next/dynamic';

import { Noto_Serif_Devanagari, Poppins } from "next/font/google";

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

const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn1'));

const Header = () => {
    return (
        <section className={`${noto.className} border px-4`}>


            <div className='bg-black rounded-lg relative'>
                <h1 className='text-center font-bold text-3xl py-2 my-3 text-[#0d9388] fontxly'>HorseFire Tablet</h1>
                {/* <span className='absolute text-white top-10 text-[12px] right-[30px] md:right-[200px]'>men's first choice</span> */}
            </div>

            <div className='text-center my-2'>
                <button className='rounded-xl bg-[#ecf5f4] px-5 pt-2 my-2'>100% Secure + 100% Healthy</button>
            </div>

            <div className='flex items-center gap-2'>
                <div>
                    <img src="/main/hm_images/wo.png" alt="adasd" loading='lazy' />
                </div>

                <div className='italic'>
                    <p className='font-bold text-xl'>Nisha Durani</p>
                    <p className='text-[grey] text-[13px]'>{dayjs().subtract(1, "days").format("MMM DD, YYYY")}</p>
                </div>
            </div>


            <div className='my-4'>
                {/* <h4 className='font-semibold'>Reading Time : 5 minutes</h4>
                <h2>मजेदार सेक्स लाइफ चाहते है तो सिर्फ 5 मिनट दें, और इस पोस्ट को पूरा पढ़ें !</h2> */}


                <h1 className='text-[#03366f] text-2xl font-bold my-3'>इस उपाय से मात्र 15 दिनों के अंदर पाएं जोरदार स्टैमिना और टाइमिंग!</h1>

                <div className='w-full'>
                    <img src="/main/hm_images/im11.jpg" alt="adasd" loading='lazy' className='w-full' />
                </div>

                <p className='my-2'>
                    दोस्तों, ये आर्टिकल पढ़ने वाले सभी पुरुषों के लिए एक सवाल है। इस सवाल का जवाब मुझे नहीं आपने आप को देना है। सवाल ये है की क्या आप अपने बेड प्रदर्शन से संतुष्ट है? क्या अपने ढीले और कमजोर औजार से अपनी महिला अपर्टनर को संतुष्ट कर पाते है? क्या ये जो आप 1 से 2 मिनट प्रदर्शन करते है वो संतोषजनक है? तो मुझे लगता है अधिकांश पुरुष खुद को कमजोर ही पाएंगे ! दोस्तों अगर आपका प्रदर्शन बेहतर है तो कोई बात नहीं पर अगर आप भी ऐसा महसूस करते है तो आपको चाहिए एक असरदार, उपयोगी और बेहतर समाधान।
                </p>

                <div className='py-3 flex justify-center'>
                    <OrderBtn />
                </div>


                <div className='text-4xl mt-4  font-bold text-center'>
                    <p className='text-[#04356f]'>मर्दाना ताकत का</p>
                    <p className='text-[#0d9486]'>जीवन पर प्रभाव</p>
                </div>

                <p>
                    शारीरिक ताकत के साथ साथ मर्दाना ताकत बहुत मायने रखता है। जो पुरुष मर्दानगी से लबालब भरे है, जिनके पौरुषता का स्तर इतना हाई है की उनकी पार्टनर प्रदर्शन से कराह उठें ऐसे पुरुषों के लव लाइफ या गृहस्थ लाइफ में कोई निराशा या नाराजगी नहीं होती। लेकिन जो पुरुष कमजोर है उनके लव लाइफ में दुःख ही दुःख होता है। ऐसे पुरुष फिजिकल होने से पहले अपने प्रदर्शन को लेकर चिंतित होते है। अच्छा प्रदर्शन नहीं कर पाते और अंततः रिश्ते में कड़वाहट बढ़ने लगती है और ब्रेकअप तक हो जाते है। कुछ ऐसा ही वैवाहिक जीवन में भी देखने सुनने को मिलते है जिसमे गैर मर्द के साथ सम्बन्ध और तलाक जैसी नौबत आ जाती है।
                </p>

                {/* <OrderBtn /> */}


                <div className='text-4xl mt-4 mb-3 font-bold text-center'>
                    <p className='text-[#04356f]'>मर्दानगी बढ़ाने के</p>
                    <p className='text-[#0d9486]'> लिए ये जरूर करें</p>
                </div>

                <ul className='list-disc w-[90%] mx-auto text-xl '>
                    <li>
                        <span className='text-[#11958a]'>
                            सबसे पहले वायग्रा की गोलियों से दूरी बनाएं, ये स्वस्थ के लिए हानिकारक है।
                        </span>
                    </li>
                    <li>
                        <span className='text-[#11958a]'>
                            धूम्रपान, पान मसाला जैसे तम्बाकू प्रोडक्ट का त्याग करें।
                        </span>
                    </li>
                    <li>
                        <span className='text-[#11958a]'>
                            एल्कोहल या अन्य नशीली पदार्थ का अत्यधिक सेवन न करें
                        </span>
                    </li>
                    <li>
                        <span className='text-[#11958a]'>
                            नींद पूरी लें ये टेस्टोस्टेरोन लेवल के लिए बहुत जरुरी है।
                        </span>
                    </li>
                    <li>
                        <span className='text-[#11958a]'>
                            टेस्टोस्टेरोन बूस्टर तत्व खाएं जो पौरुषता के लिए सबसे जरुरी है।
                        </span>
                    </li>
                    <li>
                        <span className='text-[#11958a]'>
                            जंक फ़ूड और पैकेज्ड फूड्स कम से कम सेवन करें।
                        </span>
                    </li>
                    <li>
                        <span className='text-[#11958a]'>
                            ताकत बढ़ाने के लिए आयुर्वेद अपनाएं
                        </span>
                    </li>
                </ul>

            </div>

            <div className='py-3 flex justify-center'>
                <OrderBtn />
            </div>


        </section>)
}

export default Header