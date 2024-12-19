import dynamic from 'next/dynamic';
import React from 'react'
import { MdDoubleArrow } from "react-icons/md";


const PopUp = dynamic(() => import('./FormPop'))

const Last = () => {
    return (

        <div>
            <div className='border-2 border-red-600 border-dashed pt-10 rounded-xl'>

                <div className='grid grid-cols-7 w-[90%] mx-auto'>

                    <div className='col-span-7 md:col-span-3 w-full'>
                        <img src="/main/hfu_images/px.avif" alt="ads" loading='lazy' className='w-[70%] mx-auto' />
                    </div>

                    <div className='col-span-7 md:col-span-4 text-black font-bold'>

                        <div className='bg-[#c72324] text-white pt-2 pb-0 text-2xl rounded-tl-lg'>HORSEFIRE TABLET</div>

                        <div className='text-lg'>
                            <div className='flex  items-center gap-4 my-2'>

                                <MdDoubleArrow color='black' size={25} />
                                <p>शक्ति और स्फूर्ति में सुधार होता है</p>

                            </div>
                            <div className='flex  items-center gap-4  my-2'>


                                <MdDoubleArrow color='black' size={25} />
                                <p>ज्यादा सख्त, ज्यादा मजबूती</p>

                            </div>
                            <div className='flex  items-center gap-4  my-2'>
                                <MdDoubleArrow color='black' size={25} />

                                <p>टाइमिंग सुधरती है</p>

                            </div>
                            <div className='flex  items-center gap-4  my-2'>


                                <MdDoubleArrow color='black' size={25} />

                                <p>आप लम्बी पारी खेल सकते है</p>

                            </div>
                            <div className='flex  items-center gap-4  my-2'>


                                <MdDoubleArrow color='black' size={25} />

                                <p>प्रदर्शन में सुधार होता है</p>

                            </div>
                        </div>

                    </div>

                </div>

            </div>


            <div className='pt-6'>
                <PopUp />
            </div>


            <div className='bg-[#a60ae7] text-center mt-4 mb-3'>
                <h2 className='bg-yellow-500 rounded-lg text-black pt-3 my-5 px-5 text-[30px] font-bold inline-block'>
                    अन्य से अलग और प्रभावी </h2>


                <p className='text-white text-start px-4 pb-4 text-xl'>

                    <span className='font-bold '>  हॉर्सफायर लेने वाले पुरुष में इतना दमखम होता है की हर शॉट में पार्टनर की चीख निकल जाती है।</span> आपको बता दें की यह मार्किट में उपलब्ध अन्य के मुकाबले ज्यादा प्रभावशाली और सुरक्षित है। जहां अन्य केवल झूठे वादों से लोगो को भ्रमित करते है वही <span className='text-[#fce91a] font-bold uppercase'> Horse Fire Tablet</span> अपने अद्भुत प्रभाव क्षमता से समस्याएं मिटाकर अपनी विश्वसनीयता और लोकप्रियता को साबित किया है।

                </p>


            </div>



            <div>

                <div className='text-center mt-6'>

                    <h3 className='bg-[#c92121] pt-3 pb-1 font-semibold text-2xl inline-block px-5'>होर्सफायर  पर भरोसा करने की वजह</h3>

                </div>


                <div className='grid grid-cols-4 font-bold text-lg'>

                    <div className='col-span-2'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/70827fc9-385d-4ae4-33f7-a65b0a5d7a00/public" alt="asd" loading='lazy' className='w-[80px] mx-auto py-3' />

                        <p className='text-black'>
                            100% मनी बैक गारंटी
                        </p>
                    </div>



                    <div className='col-span-2'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f0cbbede-445c-426a-4153-881adcc1b900/public" alt="asd" loading='lazy' className='w-[80px] mx-auto py-3' />

                        <p className='text-black'>
                            COD पेमेंट उपलब्ध
                        </p>
                    </div>


                    <div className='col-span-2'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9782f612-32a6-4cec-f4ef-7eb77fad0800/public" alt="asd" loading='lazy' className='w-[80px] mx-auto py-3' />

                        <p className='text-black'>
                            India's No.1 शक्तिवर्धक उत्पाद
                        </p>
                    </div>



                    <div className='col-span-2'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/12adc967-c5cd-458c-a042-a7a45bafdf00/public" alt="asd" loading='lazy' className='w-[80px] mx-auto py-3' />

                        <p className='text-black'>
                            Flipkart, Amazon पर लिस्टेड
                        </p>
                    </div>


                </div>

                <PopUp />


                <div className='w-full mt-5'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8c5357fc-2e17-4486-bd2c-a417b0a6fd00/public" alt="asd" loading='lazy' className='w-full' />
                </div>

                <p className='text-black text-2xl font-bold py-5 w-full mx-auto'>
                    ज्यादा न सोचे आज अपनाये और अपने रोमांस को उच्च सिखर पर ले जाये !
                </p>


            </div>



            <div className='relative text-center'>

                <div className='absolute w-[260px] left-[50%] top-[4%] transform translate-x-[-50%] translate-y-[-50%]'>

                    <h4 className='bg-[#c4211d] text-center text-xl font-bold pt-2 px-7 rounded-md '>नक्कालों से सावधान</h4>

                </div>

                <p className='bg-[#ffe302] rounded-md text-black font-bold text-lg pt-10 px-4 pb-2 text-start'>
                    Horsefire Tablet की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से AR Ayurveda ब्रांड देखकर ही प्रोडक्ट खरीदें !
                </p>


            </div>


        </div>

    )
}

export default Last