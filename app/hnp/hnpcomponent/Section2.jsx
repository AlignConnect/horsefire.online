import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const Flipamazon = dynamic(() => import('./FlipAmazon'));

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section2 = () => {


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
            <section className='bg-white'>

                {/* <div className="text-center">
                    <a href='#form' className='blinkForm' >
                        ORDER NOW
                    </a>
                </div> */}

                <Flipamazon />

                <div className=""><div className="header_con font-bold setHeight h-[70px] md:h-[95px]" id=''>

                    <span className="header_con_lr GetHeight1" id=''>पुरूषों के लिए संजीवनी <br /><span className="#ffde00">'HORSEFIRE TABLET'</span></span>

                </div></div>


                <p className="">पुरूषों के सेक्सुअल लाइफ की समस्या आज रौद्र रूप लें चुकी हैं। मेन गेट तक पहुंचने के बाद फाटक के अन्दर ना घुस पाने की समस्या ने पुरषों का जीवन दुभर कर दिया हैं। पर आपको यह जानकर अत्यधिक खुशी होगी, कि AR Ayurveda ने <span className="text-[#5e0a22]" >'Horse Fire Tablet' </span>के रूप में पुरूषों की यौन समस्या का संपूर्ण समाधान ढूंढ निकाला हैं। </p>

                <p className="mt-3">अश्वगंधा, शिलाजीत, सफेद मूसली, गोखुरा और केसर जैसी 17 जड़ीबूटियों से बनीं आयुर्वेदिक <span className="text-[#5e0a22]" >Horse Fire Tablet </span> ने अब तक सेक्सुअल समस्या के शिकार कई सारे पुरुषों का सेक्स जीवन ठीक किया हैं। केमिकल फ्री Horse Fire Tablet बेहद असरदार होने के साथ साथ पूर्णतः सुरक्षित और विश्वसनीय भी हैं।</p>

                <div className="w-full">
                    <img src="/images/second.jpg" alt="sdfsdf" loading="lazy" />
                </div>

                <div className="pt-3"><div className="header_con font-bold setHeight h-[35px] md:h-[45px]" id=''> <span className="header_con_lr GetHeight " id=''>जानिए क्या कहते है एक्सपर्ट्स</span></div></div>


                <div className="w-full">
                    <ReactPlayer
                        onClick={() => handlePlaying()}
                        url="https://youtu.be/oOfFq4ihRsY?si=dENacVtEwEqv3VW4"
                        width={"100%"}
                        height={width > 768 ? "420px" : "200px"}
                        playing={isPlaying}
                        light={true}
                        playIcon={<img src='/images/you.png' className="w-[10%] md:w-[15%]" />}
                        style={{ marginBottom: '10px', height: "120px" }}
                    />
                </div>

                {/* <div className="text-center">
                    <a href='#form' className='blinkForm' >
                        ORDER NOW
                    </a>
                </div> */}

                <Flipamazon />


            </section>

        </section>
    )
}

export default Section2