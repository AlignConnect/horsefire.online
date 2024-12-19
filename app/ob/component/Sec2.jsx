import dynamic from 'next/dynamic'

const Fliplink = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn1'))

const Sec2 = () => {
    return (
        <section className="bg-white" >
            <section className={`w-full md:w-[60%] m-auto container pt-2 pt-md-4 w-full md:w-3/4 `} >
                {/* <div className="grid grid-cols-12 items-center justify-center py-4">
                    <div className="text-center col-span-12 md:col-span-2 px-2">
                        <div className="text-center md:text-end">
                            <div className="pt-2 pb-0">
                                <h5 className="text-xl">As seen in:</h5>
                            </div>
                        </div>
                    </div>

                    <div className="text-center col-span-6 sm:col-span-2 px-2">
                        <div style={{ border: '1px solid gray', borderRadius: "10px" }}>
                            <a href="https://www.aninews.in/news/business/business/healthy-foods-for-erectile-dysfunction-and-diet-guide20221014122830/" target="_blank">
                                <img src="/images/Ani.jpg" className="w-[90%] md:w-[70%] mx-auto" alt="Ani" loading='lazy' />
                            </a>

                        </div>
                    </div>
                    <div className="text-center col-span-6 sm:col-span-2 px-2">
                        <div style={{ border: '1px solid gray', borderRadius: "10px" }}>
                            <a href="https://news.webindia123.com/news/articles/Business/20221014/3993082.html" target="_blank">
                                <img src="/images/webindia123.jpg" className="w-[90%] md:w-[70%] mx-auto" alt="webindia123" loading='lazy' />
                            </a>
                        </div>
                    </div>
                    <div className="text-center col-span-6 sm:col-span-2 px-2">
                        <div style={{ border: '1px solid gray', borderRadius: "10px" }}>
                            <a href="https://www.mid-day.com/brand-media/article/why-hammer-of-thor-ayurvedic-medicine-demand-increases-23255059" target="_blank">
                                <img src="/images/mid-day.jpg" className="w-[90%] md:w-[70%] mx-auto" alt="mid-day" loading='lazy' />
                            </a>
                        </div>
                    </div>


                    <div className="text-center col-span-6 sm:col-span-2 px-2">
                        <div style={{ border: '1px solid gray', borderRadius: "10px" }}>
                            <a href="https://up18news.com/exercises-to-increase-your-stamina-in-bed-why-people-use-hammer-of-thor/" target="_blank">
                                <img src="/images/up18news.png" className="w-[90%] md:w-[70%] mx-auto" alt="up18news" loading='lazy' />
                            </a>
                        </div>
                    </div>
                </div> */}

                <div className='mt-4 mt-md-5 mb-0 pb-3 mb-md-3 text-center'>
                    <iframe className='w-full md:w-[80%] mx-auto md:h-[400px] h-[200px]' style={{ borderStyle: "dashed", borderColor: "#B0AA96" }} src="https://www.youtube.com/embed/JbWLIriN0cQ?si=dTgXOGBAJKxxbjUA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>


                <div className='mx-auto py-3 md:w-[60%]  w-full flex justify-center'>
                    <Fliplink />
                </div>

            </section>

        </section>
    )
}

export default Sec2