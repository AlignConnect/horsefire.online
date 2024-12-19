import dayjs from 'dayjs'
import React, { useState, useEffect } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
import { IoEyeSharp } from 'react-icons/io5'

const Header = () => {

    let [happy, sethappy] = useState(0);
    const [exis, setexis] = useState(0)
    const [hexxx, sethexxx] = useState(0);

    const hexa = () => {
        const date = new Date();
        let axom = date.getTime();
        let que = axom - 1709896200000;
        sethexxx((que / 5009).toFixed(0));
        sethappy(((que / 5009) / 3.7).toFixed(0));
    }


    useEffect(() => {

        setInterval(() => {
            hexa()
        }, 1000);

    }, [])


    const onexis = () => {
        if (!exis) {
            sethappy(parseInt(happy)
                + 1);
        }
        else {
            sethappy(parseInt(happy)
                - 1);
        }
        setexis(!exis);
    }



    return (
        <section className="w-full md:w-[710px] mx-auto bg-white">

            <div className=''>
                <div className='flex justify-around items-center py-3 bg-[#fca311]' >

                    <div>
                        <a href="#form"><FaBars className='text-3xl text-black' /></a>
                    </div>
                    <div className='font-black text-[#ff0000] text-[1.3rem] bg-black px-6 py-1 rounded-[3px]'>
                        {/* <a href='#form '><img src="/main/mi_images/logo.png" alt="rtertet" width={100} className='w-[240px] md:w-[400px]' loading='lazy' /></a> */}

                        <span className='text-[#b7b7b7]'> HORSEFIRE</span> <span className='text-[#fca311]'> TABLET</span>

                    </div>
                    <div>
                        <a href="#form"><FaSearch className='text-3xl text-black' /></a>
                    </div>
                </div>



                <div className="w-full flex items-center justify-center gap-2 mt-2 mb-1 text-[0.8rem]" style={{ fontSize: '0.8rem' }}>
                    <span className='ms-1 font-bold block pe-2' style={{ borderRight: '1px solid black' }}>{dayjs().subtract(1, "days").format("DD MMMM YYYY")} 11:25 AM</span>
                    <div className="pe-2 font-bold border-b-1 flex items-center" onClick={onexis} style={{ borderRight: '1px solid black' }}>
                        {
                            exis ? <AiFillHeart className='text-xl me-1 text-red-400' /> : <AiOutlineHeart className='me-1' style={{ marginTop: '-0.1rem' }} />
                        }
                        {happy}
                    </div>
                    <div className='flex items-center font-bold' ><IoEyeSharp className='text-[1.1rem]' /> {hexxx}</div>
                </div>
            </div>

            <h1 className="fontNoto fontNoto text-center text-red-500 text-2xl mt-5 px-3 sm:text-3xl font-bold">महज 30 दिनों में अपनी सेक्स टाइमिंग को 30-45 मिनट तक बढ़ाएं और लिंग को बनाएं सख्त और मजबूत</h1>

        </section>
    )
}

export default Header