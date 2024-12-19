const Hurbs = () => {

    const hurbs = (arr) => {

        return arr.map((e, key) => {

            return <div className='' key={key}>

                <div className='m-2 rounded-xl bg-[#FEFAF6]' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>


                    <div className=''>
                        <img src={e.img} alt="herbs" className='w-62 sm:w-1/2 mx-auto' />
                    </div>



                    <h2 className='text-xl sm:text-3xl text-center text-red-700 font-extrabold'>{e.title}</h2>



                </div>

            </div >
        })


    }

    return (

        <section className='fontNoto'>
            <div className=''>
                <div className="three_bg ">

                    <div className="sm:max-w-[70%] mx-auto ">
                        <div className="fontNoto text-[1.3rem] text-white sm:text-[2vw] font-extrabold  pt-8 px-2">
                            <span className="">&#x201C;</span>हॉर्सफायर टेबलेट में शक्तिशाली जड़ीबूटियों और भस्मों का अनूठा संयोजन है।
                        </div>


                        <div className='grid grid-cols-3 items-center sm:py-7 py-5' >

                            {
                                hurbs([
                                    {
                                        img: "/main/ht_images/a.png",
                                        title: "अश्वगंधा"
                                    },
                                    {
                                        img: "/main/ht_images/b.png",
                                        title: "शिलाजीत"
                                    },
                                    {
                                        img: "/main/ht_images/c.png",
                                        title: "केसर"
                                    },
                                    {
                                        img: "/main/ht_images/d.png",
                                        title: "सफ़ेद मूसली"
                                    },
                                    {
                                        img: "/main/ht_images/e.png",
                                        title: "गोखरू"
                                    },
                                    {
                                        img: "/main/ht_images/f.png",
                                        title: "अभ्रक भस्म"
                                    }
                                ])
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hurbs