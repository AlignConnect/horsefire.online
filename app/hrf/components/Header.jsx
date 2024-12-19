import React from 'react'

const Header = () => {
    return (
        <section className='fontNoto'>


            <div className="max-w-4xl mx-auto bg-[#EBF5EE]">

                <div className="text-end px-2 bg-[#808080] pt-2 text-white">
                    *विज्ञापन-संबंधी<small> (Advertorial)</small>
                </div>


                <div className="py-3 px-2">

                    <div className="">
                        <img
                            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ea626296-458d-4c86-856e-1ab92ad19600/public"
                            alt="shital"
                            className='sm:w-[15%] w-[30%] mx-auto'
                        />
                    </div>

                    <div className="sm:text-2xl text-xl font-extrabold text-center pt-4">
                        -आरवी पाटिल
                    </div>

                    <hr className='mt-3 border-t-2 border-dotted border-black' />


                    <div className="text-center sm:text-3xl text-xl font-extrabold pt-7">
                        मेरे पति की शारीरिक कमज़ोरी उनके आत्मविश्वास को कम कर रही थी, लेकिन फिर इस आसान तरीके ने सब कुछ बदल दिया!
                    </div>

                    <div className='text-center pt-2'>-आरवी पाटिल द्वारा लिखित</div>

                    <hr className='mt-3 border-t-2 border-dotted border-black' />

                </div>


            </div>


        </section>
    )
}

export default Header