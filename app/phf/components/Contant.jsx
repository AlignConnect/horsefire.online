import dynamic from 'next/dynamic';
import React from 'react'


const OrderNow = dynamic(() => import('./Ordernow'), {
    loading: () => <p>Header Loading</p>
});

const Contant = () => {

    const herbs = [
        {
            name: "अश्वगंधा",
            description: "तनाव कम कर शक्ति बढ़ाए",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eda3cb83-a170-4141-1c80-8e804716e800/public",
        },
        {
            name: "शिलाजीत",
            description: "सहनशक्ति और टेस्टोस्टेरोन में सुधार",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a01bde7a-229e-456a-49ae-a84e320ddb00/public",
        },
        {
            name: "सफेद मूसली",
            description: "स्टेमिना और पावर के लिए प्रसिद्ध",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/378df941-4da4-4c32-ca3d-897173093b00/public",
        },
        {
            name: "गोखरू",
            description: "शरीर की ऊर्जा को बढ़ाता है",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b1feaf00-46fb-48b1-818e-d099cccbc700/public",
        },
        // {
        //     name: "केसर",
        //     description: "मूड और परफॉर्मेंस में सहायता करता",
        //     image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dfadef24-18bd-4ea0-f92e-ed13713ab300/public",
        // },
    ];

    const benefits = [
        {
            text: "शरीर में प्राकृतिक ऊर्जा को बढ़ाता है",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c83ae125-0ec9-4ca3-bfbf-9f09f3993f00/public",
        },
        {
            text: "जल्दी थकावट से बचाता है",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/46b63cf8-2d50-4a9a-4ef4-ac92a36fa400/public",
        },
        {
            text: "मानसिक और शारीरिक आत्मविश्वास को मजबूत करता है",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ccc0c65e-079a-4739-d661-b9d368130800/public",
        },
        {
            text: "लंबे समय तक प्रदर्शन करने में मदद करता है",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bfddfd67-5ea6-49e9-a465-d8be219fc900/public",
        },
        {
            text: "पार्टनर को संतुष्ट करने की क्षमता को बढ़ाता है",
            image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d0fc940d-d515-433f-0c9a-c0f87ce8f300/public",
        },
    ];


    const chemical_tablet = [
        "कुछ समय के लिए असर करती हैं ",
        "हार्ट स्ट्रोक, लिवर डैमेज जैसी समस्याओं का खतरा ",
        "शरीर पर पड़ता है बुरा असर"
    ];


    const points = [
        "आयुर्वेदिक, सुरक्षित और सर्टिफाइड",
        "स्थायी समाधान, बिना किसी साइड इफेक्ट के",
        "नियमित उपयोग से परफॉर्मेंस में स्पष्ट सुधार",
    ];

    return (

        <section className='fontNoto'>




            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8f9d59fa-9d8e-417f-9abe-cfa66a81dc00/public" alt="" className='w-full' />

            <div>

                <OrderNow />

                <p className='leading-loose font-semibold'>
                    <strong className='bg-red-900 text-white px-2 pt-1'>Horse Fire Tablet</strong> - आपकी नॉनस्टॉप परफॉर्मेंस का सीक्रेट
                    आज की तेज़ रफ्तार ज़िंदगी में हर व्यक्ति चाहता है कि वह देर तक "क्रीज़” पर टिके और नॉनस्टॉप शॉट्स खेले। ठीक वैसे ही जैसे एक शानदार बैट्समैन मैदान में करता है। लेकिन इसके लिए ज़रूरत है एक असरदार, सुरक्षित और आयुर्वेदिक समाधान की।
                    क्यों चुनें <span className='text-red-900'>Horse Fire Tablet?</span>
                </p>

                <div className=''>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e861fbdf-7f1b-445c-3c12-58228f51fe00/public" alt="" className='w-full  border border-solid border-2 border-green-600 ' />

                </div>
                <OrderNow />


                <p>
                    <strong className='text-green-700'>AR Ayurveda</strong> का <span className='text-red-900'>Horse Fire Tablet </span>एक आयुर्वेदिक फार्मूला है, जो पुरुषों के प्रदर्शन और आत्मविश्वास को बढ़ाने के लिए तैयार किया गया है। इसमें मौजूद <strong className='text-green-800 font-semibold'>16 शुद्ध जड़ी-बूटियां  </strong>शरीर में ऊर्जा, स्फूर्ति और संतुलन लाती हैं।
                </p>


                <div className="py-6">
                    <h2 className="text-2xl font-semibold text-white bg-green-700 w-36 mx-auto px-4 pt-2 text-center rounded-md mb-6">
                        प्रमुख हर्ब्स:
                    </h2>

                    <div className="bg-[#dbffeb] grid sm:grid-cols-2 grid-cols-2 py-4 items-center gap-3 px-2">
                        {herbs.map((herb, index) => (
                            <div
                                key={index}
                                className=" bg-gray-100 shadow-2xl rounded-xl"
                            >
                                <div className="">
                                    <img
                                        src={herb.image}
                                        alt={herb.name}
                                        className="w-2/3 sm:w-2/4 mx-auto "
                                    />
                                </div>

                                <div className=''>
                                    <div className="bg-[#008510] text-white text-center sm:text-2xl text-2xl pt-2 font-extrabold">{herb.name}</div>
                                    <div className="pt-2 sm:px-8 px-4 sm:text-lg text-lg text-center  font-semibold">{herb.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <OrderNow />


                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e374f928-940c-4f9d-24db-ca51936ecb00/public" alt="" className='w-full p-2' />


            </div>


            <div className="">
                <div className="pt-5 pb-3 my-3 text-center sm:text-2xl text-lg font-extrabold text-black mb-6 border border-red-700 rounded-xl mx-2">
                    कैसे काम करता है{" "}
                    <span className="bg-red-700 text-white px-1 pt-2 ">
                        HORSE FIRE TABLET?
                    </span>
                </div>

                <div className="bg-pink-50 grid grid-cols-2 px-2 pb-6">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="mt-2"
                        >
                            <div className="">
                                <img
                                    src={item.image}
                                    alt={item.text}
                                    className="w-full"
                                />
                            </div>
                            <div className="sm:text-lg text-md font-extrabold px-2 sm:px-4 text-center leading-tight pt-3">{item.text}</div>
                        </div>
                    ))}
                </div>
            </div>


            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d1cf8ea0-631e-4b71-57a2-f6d656a5c800/public" alt="" className='w-full' />
            <OrderNow />


            <div className="fontAnton  border border-[#128523] rounded-xl p-6 max-w-xl mx-auto bg-white text-center space-y-4 my-10 ">
                <div className="bg-[#f8ff1e] px-4 py-2 inline-block rounded  text-black text-xl shadow">
                    Chemical Based Pills
                </div>

                <div className="text-3xl font-extrabold text-black">VS</div>

                <div className="bg-[#128523] px-4 py-2 inline-block rounded text-white text-xl shadow">
                    Ayurvedic Horse Fire Tablet
                </div>
            </div>



            <div className="bg-[#f8ff1e] px-4 pt-3 text-center w-1/2 mx-auto  text-black sm:text-3xl text-[1.1rem] shadow font-extrabold rounded-t-2xl my-3">
                केमिकल बेस्ड टैबलेट्स
            </div>



            <div className="py-4 my-4">
                {chemical_tablet.map((reason, index) => (
                    <div
                        key={index}
                        className="flex items-center  text-black px-4 py-2 "
                    >
                        <span className="mr-3"><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cacfe29b-9f77-42f1-f090-27e2f660e400/public" alt="" className='' /></span>
                        <span className="sm:text-2xl text-lg pt-1 font-semibold">{reason}</span>
                    </div>
                ))}
            </div>



            <div className="fontAnton bg-[#128523]  px-4 pt-3  pb-2 text-center w-1/2 mx-auto  text-white sm:text-3xl text-[1.4rem] shadow rounded-t-2xl my-3 uppercase">
                Horse fire tablet
            </div>

            <div className="bg-gradient-to-b from-white to-green-200 py-6 px-4 space-y-4">
                {points.map((point, index) => (
                    <div key={index} className="flex items-center space-x-1">
                        <div className=" flex items-center ">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d9399899-1db7-4a0d-5cc6-fbdcff4d2000/public" alt="" className='w-1/2 mx-auto' />
                        </div>
                        <div className="bg-green-700 text-white sm:text-lg font-semibold px-4 pt-3 rounded-full">
                            {point}
                        </div>
                    </div>
                ))}
            </div>


            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6554c91c-f140-48a0-8ab5-942dcda86400/public" alt="" className='w-full' />

            <OrderNow />

        </section>

    )
}

export default Contant