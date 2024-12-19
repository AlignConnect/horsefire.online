import { Noto_Serif_Devanagari } from 'next/font/google';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const CusRev = () => {



    const [isPlaying, setisPlaying] = useState(false);

    const handlePlaying = () => {
        setisPlaying((prev) => !prev);
    };

    const [width, setWidth] = useState();

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Initial call to set the initial width
        handleResize();

        // Event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Now you can use the 'width' state in your component


    return (

        <section className={noto.className}>

            <div className="pt-3"><div className="header_con font-bold setHeight h-[35px] md:h-[45px]" id=''> <span className="header_con_lr GetHeight " id=''>प्रोडक्ट के बारे में ग्राहकों की राय</span></div></div>


            <div className="w-full">
                <ReactPlayer
                    onClick={() => handlePlaying()}
                    url="https://www.youtube.com/embed/h6diHEikhdQ?controls=0"
                    width={"100%"}
                    height={width > 768 ? "420px" : "200px"}
                    playing={isPlaying}
                    light={true}
                    playIcon={<img src='/images/you.png' className="w-[10%] md:w-[15%]" />}
                    style={{ marginBottom: '10px', height: "120px" }}
                />
            </div>


        </section>

    )
}

export default CusRev