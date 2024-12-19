import React from 'react'

const Sec3 = () => {
    return (
        <section className='bg-white'>

            <section className='w-full md:w-[60%] mx-auto'>
                <div className='text-center container w-full md:w-[70%] mx-auto'>
                    <h5 className='pb-2' >Why more than 100000+ satisfied<br />
                        customers just ❤️ the Horse Fire Tablet</h5>
                    <div className='grid grid-cols-12 items-center gy-3 flex justify-center'>
                        <div className='text-center col-span-12 md:col-span-6' style={{ border: "1px dashed", borderColor: "#B0AA96" }}>
                            <img src="/images/1.png" alt="df" className='' style={{ width: "100%" }} loading='lazy' />
                        </div>
                        <div className='text-center col-span-12 md:col-span-6 ' style={{ border: "1px dashed", borderColor: "#B0AA96" }}>
                            <img src="/images/2.png" alt="sdf" className='' style={{ width: "100%" }} loading='lazy' />
                        </div>
                        <div className='text-center col-span-12 md:col-span-6' style={{ border: "1px dashed", borderColor: "#B0AA96" }}>
                            <img src="/images/3.png" alt="sdf" className='' style={{ width: "100%" }} loading='lazy' />
                        </div>
                        {/* <div className='text-center col-span-12 md:col-span-6' style={{ border: "1px dashed", borderColor: "#B0AA96" }}>
                                <img src="/images/4.png" alt="" className='' style={{ width: "100%" }}  loading='lazy'/>
                            </div> */}
                        <div className='text-center col-span-12 md:col-span-6' style={{ border: "1px dashed", borderColor: "#B0AA96" }}>
                            <img src="/images/5.png" alt="dfsa" className='' style={{ width: "100%" }} loading='lazy' />
                        </div>
                        <div className='text-center col-span-12 md:col-start-4 md:col-span-6' style={{ border: "1px dashed", borderColor: "#B0AA96" }}>
                            <img src="/images/6.png" alt="dsfad" className='' style={{ width: "100%" }} loading='lazy' />
                        </div>
                    </div>

                    <div className='mt-4 bg-black rounded-[30px]'>
                        <div className='grid grid-cols-12 items-center'>
                            <div className='col-span-12 md:col-span-4 my-3 text-center'>
                                <img src="/images/customers2x.png" alt="" className='ad w-[50%] md:w-[60%] mx-auto' loading='lazy' />
                            </div>
                            <div className='col-span-12 md:col-span-5 text-start'>
                                <div className='text-center px-1' style={{ color: "gray" }}>Niraj Patel, Rohan Yadav and <span className='text-white'>1022 others</span><br />  already Reviewed Horse Fire Tablet, <span className='text-light'>read their stores</span> </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-5'>

                    </div>
                </div>
            </section>

        </section>)
}

export default Sec3