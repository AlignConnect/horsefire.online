import { useGlobalContext } from '@/app/statemanage/context';
import dynamic from 'next/dynamic';
import React from 'react'

const Form = dynamic(() => import('./Form'), {
    loading: () => <p>loader</p>
});

function Tab_Exp() {

    const { hours,
        minutes,
        remainingSeconds } = useGlobalContext();

    return (<div className="relative ">
        <div className='relative z-10 w-full py-5 max-w-md mx-auto px-3'>

            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }} className='text-center'>Limited Time Offer</div>
            <h3 className='pt-2 pb-2 text-2xl mb-10 text-center text-[#0d6efd] border border-black rounded-md' style={{ fontFamily: "Black Ops One" }}>{hours}:{minutes}:{remainingSeconds}</h3>

            <div className='border border-sky-500 rounded-xl text-[1.1rem] sm:text-xl text-center my-3'>
                <div className='pt-2 px-2  font-bold inline-block my-2 text-2xl relative -top-7 bg-sky-700 rounded-xl text-white'>ध्यान दें</div>
                <div className="-mt-5" >6 लाख से ज्यादा सन्तुष्ट ग्राहक</div>
                <div className="" >पूरे भारत में मुफ्त डिलीवरी सुविधा</div>
                <div className="">कोई दुष्प्रभाव नहीं, पूर्ण सुरक्षित </div>
                <div className="">10 दिनों की मनी बैक गारंटी</div>
            </div>

            <h1 className=" text-3xl sm:text-4xl mt-8  text-center  font-extrabold">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!</h1>
            <div className=" max-w-5xl mx-auto ">
                <Form />
            </div>
        </div>
    </div>
    )
}

export default Tab_Exp