import React from 'react'
import { MdHome } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

// const PopUp = dynamic(() => import('./FormPop'), {
//     loading: () => <p>loader</p>
// });

const Header = () => {
    return (
        <section className=''>

            <div className='flex justify-between items-center text-3xl text-black shadow-xl'>
                <div className='p-3'>
                    <MdHome className=' ' />
                </div>
                <div className='bg-black my-3 px-4 rounded-md'>
                    {/* <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4d52a5c8-da19-46dd-739d-11a00e4cc600/public' alt='asd' className='w-[180px]' /> */}

                    <h2 className='pt-3 md:pt-4 font-bold text-2xl md:text-4xl'><span className='text-red-600'>HorseFire</span> <span className='text-yellow-500'>Tablet</span></h2>

                </div>
                <div className='p-3'>
                    <GiHamburgerMenu className='' />
                </div>
            </div>


            <div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/67b08733-9397-4fbb-f612-bb94a57b9b00/public" alt="sdf" loading='eager' fetchPriority='high' className='w-full md:w-[100%] pt-5 mx-auto' />
            </div>

            <div className='px-5'>
                <p className='text-black font-bold text-end'>विज्ञापन-संबंधी</p>
            </div>

            <div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a1f0707a-2ecc-4e52-314a-69fe27472b00/public" alt="sdf" loading='eager' fetchPriority='high' className='w-full mx-auto' />
            </div>


        </section>
    )
}

export default Header