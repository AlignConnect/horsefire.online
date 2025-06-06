import React from 'react'


const Header = () => {



    const why_recommendation = (arr) => {
        return arr?.map((e, key) => {
            return <div className='sm:flex  items-center sm:justify-center gap-3 py-2 ' key={key}>
                <div className="">
                    <img src={e.icon} className=" sm:w-full w-16 mx-auto" alt="icons" />
                </div>
                <div className='uppercase text-white fontJosefin font-semibold sm:text-[1vw] text-[0.8rem] sm:text-left text-center sm:pt-0 pt-2'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }



    return (
        <section>


            <div className="bg_head px-2 sm:px-0">

                <div className=' text-md bg-red-500 fontPoppins sm:py-1  text-center text-white'>

                    <div className="flex items-center justify-center gap-1">


                        <div className="sm:text-md text-sm pt-1 ">
                            *विज्ञापन-संबंधी
                        </div>
                    </div>


                </div>

                <div className="sm:max-w-[80%] mx-auto ">


                    <div className="grid sm:grid-cols-2 items-center sm:py-16 py-5">


                        <div className=" leading-tight">

                            <div className="fontBebas font-extrabold sm:text-[5.7vw] text-[3.5rem] text-center sm:text-left text-red-500 uppercase  leading-none py-2 ">
                                <div className="">
                                    horse fire <span className="text-black">tablet</span>
                                </div>
                            </div>
                            <div className="fontNoto text-black font-extrabold sm:text-[1.9vw] text-[1.4rem] leading-tight sm:text-left text-center sm:px-0 px-10 py-2">
                                खुशहाल दाम्पत्य जीवन का आधार ज्यादा ऊर्जा ज्यादा प्यार
                            </div>
                            <div className="fontJosefin leading-tight font-semibold sm:py-2 sm:1  sm:text-left text-center">
                                <div className='sm:text-[1.6vw] text-[1.1rem]'>Empower Your Vitality with Premium</div>
                                <div className='sm:text-[1.8vw] text-[1.1rem]'>Ayurvedic Formulation for Men</div>
                            </div>

                            <div className="fontPoppins leading-tight font-semibold uppercase text-[#cf7819] sm:py-2 py-3 sm:text-left text-center">
                                <div className='sm:text-[1.8vw] text-[1.4rem]'>Get upto <span className='sm:text-[2.8vw] text-[1.8rem] font-extrabold '>40% off</span></div>
                            </div>

                            <div className="text-left sm:block hidden">
                                <a href="#form"><div className="pop_imagehfv cursor-pointer fontPoppins px-8 py-1 bg-black inline-block  text-white text-[1.2vw] font-semibold rounded hover:bg-gray-600 my-3 ">
                                    ORDER NOW
                                </div>
                                </a>
                            </div>
                        </div>

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/037f7ab6-36bd-4e2d-22d2-524beb5d3b00/public" alt="" className='sm:w-full w-full mx-auto' />

                    </div>




                </div>
                <div className="w-full sm:max-w-[85%] mx-auto pb-7">
                    <div className="grid sm:grid-cols-3 grid-cols-3 justify-center items-center bg-red-500 sm:py-5 py-2 rounded-lg mx-1 ">
                        {
                            why_recommendation([
                                {
                                    icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/19244ddc-a345-4ff8-2f9a-005ec0259200/public",
                                    title: "clinically<br/> approved"
                                },

                                {
                                    icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4ee5ee83-b5c0-48aa-5d32-47cb7aa4ab00/public",
                                    title: "Doctor<br/> recommended"
                                },
                                {
                                    icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1a1f55b2-35f8-49af-4750-6809cd689200/public",
                                    title: "100% natural<br/> product"
                                },

                            ])
                        }
                    </div>

                </div>
            </div>


        </section>
    )
}

export default Header