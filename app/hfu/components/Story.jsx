import dynamic from 'next/dynamic';
import React from 'react'

const PopUp = dynamic(() => import('./FormPop'));

const Story = () => {


    return (
        <section className='text-black text-start p-2'>


            <p className='text-lg'>
                दोस्तों, सामान्यतः जीने के लिए रोटी कपडा और मकान जरुरी होता है परन्तु दाम्पत्य जीवन को खुशहाली पूर्वक जीने के लिए स्वस्थ और ऊर्जावान पति का  कमरतोड़ प्यार बहुत मायने रखता है। परन्तु आज के समय में लगभग हर 100 में से 80 से अधिक पति कमजोरी वश दाम्पत्य जीवन को भोग नहीं पाते और जीवनसंगिनी के उम्मीदों पर निराशा की कील ठोक देते है।
            </p>

            <h3 className='font-bold text-2xl py-2'>ज्यादात्तर महिलाये इस समस्या पर अपने पति से चर्चा नहीं कर पाती है और अंदर ही अंदर घुटती रहती है।</h3>

            <div className='grid grid-cols-4 items-center gap-2 justify-center w-[100%]  md:w-full'>

                <div className='col-span-4 md:col-span-2 flex justify-start items-center gap-2 '>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/70734649-0c2d-4e2f-2770-c73ab667ae00/public" alt="sfdf" loading='lazy' className='w-[25px]' />
                    <p className='text-[22px] pt-2 md:text-lg'>डिप्रेशन की समस्या</p>
                </div>

                <div className='col-span-4 md:col-span-2 flex justify-start items-center gap-2 md:w-[80%] md:mx-auto'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/70734649-0c2d-4e2f-2770-c73ab667ae00/public" alt="sfdf" loading='lazy' className='w-[25px]' />
                    <p className='text-[22px]  pt-2 md:text-lg'>मादक पदार्थों का सेवन</p>
                </div>

                <div className='col-span-4 md:col-span-2 flex justify-start items-center gap-2 '>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/70734649-0c2d-4e2f-2770-c73ab667ae00/public" alt="sfdf" loading='lazy' className='w-[25px]' />
                    <p className='text-[22px]  pt-2 md:text-lg'>पर्याप्त नींद ना लेना </p>
                </div>

                <div className='col-span-4 md:col-span-2 flex justify-start items-center gap-2 md:w-[80%] md:mx-auto'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/70734649-0c2d-4e2f-2770-c73ab667ae00/public" alt="sfdf" loading='lazy' className='w-[25px]' />
                    <p className='text-[22px]  pt-2 md:text-lg'>जंक फूड का सेवन</p>
                </div>

            </div>


            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2426fbd8-02d9-4515-f479-e3711bffc900/public)] bg-cover my-4'>

                <p className='py-3 px-5 text-lg'>
                    अगर आप उपर बताए गए प्रॉब्लम्स में से एक भी महसूस कर रहे है तो यकीन मानिये आप अपनी घरवाली को कभी संतुष्ट नहीं कर सकते। वैवाहिक जीवन को  खुशहाल बनाना है तो आपको देर तक टिककर जोरदार शॉट लगाने पड़ेंगे।
                </p>
            </div>


            <PopUp />


            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/40d766f4-fe58-491d-5797-fdf658fd8f00/public)] bg-cover pb-4'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9d92568c-3732-40b4-502d-761398d45000/public" alt="sdf" loading='lazy' className='w-full md:w-[70%] mx-auto pt-6 pb-10' />
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fb1b1989-fc20-4708-fb35-1606ae22e900/public" alt="sdfd" loading='lazy' className='w-full md:w-[75%] mx-auto' />
            </div>

            <PopUp />


            <div>
                <p className='text-lg'>
                    <span className='text-red-800 font-bold'> Horse Fire Tablet</span> एक प्राकृतिक संयोजन से बना शक्तिवर्धक है जिसके इस्तेमाल से कुछ मिनट में आउट होने वाले भी देर तक टिककर लम्बी पारी खेलते है। अगर आप भी बेड पर फेल है और बीवी आपके प्रदर्शन से संतुष्ट नहीं होती तो एक बार<span className='text-red-800 font-bold'> Horse Fire Tablet</span> का सेवन अवश्य करें और बिस्तर में झंडे गाड़े।

                </p>
            </div>


        </section>
    )
}

export default Story