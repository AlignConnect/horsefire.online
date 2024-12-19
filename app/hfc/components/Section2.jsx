import { Noto_Serif_Devanagari, Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { ProgressBar } from 'react-bootstrap';
import { Stack, Rating, Box } from '@mui/material';
import { CiStar } from "react-icons/ci";
import { useGlobalContext } from "@/app/statemanage/context";
import Head from "next/head";
import Script from "next/script";



const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const poppin = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const listproductBene11 = [
  { id: 1, title: 'नैचुरली जोश और स्फूर्ति में सुधार', image: '/main/hfc_images/gr_9.png' },
  { id: 2, title: 'प्रदर्शन की अवधि कई गुना बढ़ गयी', image: '/main/hfc_images/gr_10.png' },
  { id: 3, title: 'औजार के सख्ती में गजब का इजाफा', image: '/main/hfc_images/gr_7.png' },
  { id: 4, title: 'ताकत और भरपूर मानसिक उत्साह', image: '/main/hfc_images/gr_8.png' },
]

const Section2 = () => {

  const { hours,
    minutes,
    remainingSeconds } = useGlobalContext();


  const [isPlaying, setisPlaying] = useState(false);

  const handlePlaying = () => {
    setisPlaying((prev) => !prev);
  };

  const ratingGrade = [82, 11, 4, 2, 1];
  const [outOfRating, setOutOfRating] = useState(4.5)
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    return () => {
      const multiWithInitial = ratingGrade.map((e, key) => e * (ratingGrade.length - key));
      const sumWithInitial11 = multiWithInitial ? multiWithInitial.reduce((accumulator, currentValue) => accumulator + currentValue, 0) : [100, 100, 100, 50, 100];
      const sumWithInitial = ratingGrade.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      const FinalOutOfRating = sumWithInitial11 && sumWithInitial ? (sumWithInitial11 / sumWithInitial) : 4.5

      // const sumWithInitial = ratingGrade.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      // const FinalOutOfRating = sumWithInitial ? ((sumWithInitial / 500) * 10) / 2 : 4.5

      setOutOfRating(FinalOutOfRating);

    }
  }, [ratingGrade])

  return (
    <section className={noto.className}>

      {/* <Script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
      </Script> */}

      <section className='md:w-[768px] w-full mx-auto px-3'>


        <h1 className={`mb-3 text-2xl text-center pt-3 text-black font-bold`} style={{ background: '#dedede' }}> <span style={{ color: "#ac2f29", }} className="font-bold">Horse Fire Tablet</span><br /> पर एक्सपर्ट की राय</h1>

        <div className="w-full">
          <ReactPlayer
            onClick={() => handlePlaying()}
            url="https://youtu.be/oOfFq4ihRsY?si=dENacVtEwEqv3VW4"
            width={"100%"}
            height={"300px"}
            playing={isPlaying}
            light={true}
            playIcon={<img src='/images/you.png' className="w-[10%] md:w-[15%]" />}
            style={{ marginBottom: '10px', height: "120px" }}
          />
        </div>


        <div className="px-3 pt-4">
          <h1 className='text-center text-3xl'> <span className="comappColor font-bold">Horse Fire </span> खाने वाले<br /> पुरुष अनुभव किये</h1>
        </div>

        <div className=" py-4 px-3 text-center " style={{ background: '#e5e5e5', boxShadow: 'inset 0px 5px 15px #cbcbcb,inset 0px -5px 15px #cbcbcb' }}>
          <div className="grid grid-cols-12">
            {listproductBene11.map((item, key) => {
              return <div key={key} className='col-span-6 my-2'>
                <div className="beneImageCon mx-auto w-[98%] md:w-[55%]">
                  <img src={item.image} className='h-[4rem] md:h-[6rem]' alt="pic" />
                </div>
                <p className="text-xl text-center mt-3 text-black font-bold mb-0">{item.title}</p>
              </div>
            })}
          </div>
          <div className="ordernowGifNew m-auto mb-2 mt-3">
            <a href="#form" className=""><div className="ordernowGifCustom">
              अभी ऑर्डर करें
            </div></a>
          </div>
        </div>


        <div className="ratingGrade py-3 py-sm-4 px-2 px-sm-4">

          <div className="grid grid-cols-12 items-center md:w-[70%] mx-auto">
            <div className="col-span-4">
              <img src="/main/hfc_images/product6.webp" alt="pic" className="w-full" />
            </div>
            <div className="col-span-8 px-1 custom_font">

              <div className="review_back">
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Rating
                    name="text-feedback"
                    value={outOfRating}
                    readOnly
                    precision={0.5}
                    emptyIcon={<CiStar style={{ opacity: 0.55 }} fontSize="inherit" />}
                    size="small"

                  />

                  <Box className='ms-2 ms-sm-4 py-2 text-[0.85rem] md:text-[1rem]'>{outOfRating.toFixed(1)} OUT OF 5</Box>
                </Box>
              </div>
              <p className={`${poppin.className} text-muted text-[15px] text-center mt-1 mb-1 mb-sm-2`}>740+ Customers review</p>


              {ratingGrade.map((item, key) => {

                return <div key={ratingGrade.length - key}>
                  <div className='grid grid-cols-12 m-0'
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <div className="col-span-3 pe-0 ps-2 text-start text-muted text-[0.86rem] md:text-[1rem]" >{ratingGrade.length - key} Star</div>
                    <ProgressBar className={`col-span-7 py-1  processPipe ${isActive ? 'active' : ''}`} now={item} label={`${item}%`} visuallyHidden />
                    <div className='col-span-2 pe-0 ps-1 py-0 text-[0.86rem] md:text-[1rem]' >{item}%</div>
                  </div>
                </div>
              })}

            </div>
          </div>
        </div>


        <div>
          <p className="mt-4 px-1"> Horse Fire Tablet ग्राहक के सर्वाधिक फायदे के उद्देश्य के साथ काम करता हैं. वास्तविकता यही है कि इसे कस्टमर सटिस्फैक्शन को ध्यान में रखकर तैयार किया गया है। यही वजह है की भारतीय पुरुष इस पर भरोसा करते है और रेटिंग के तौर पर अपना प्यार देते है।</p>
        </div>

        <div className="w-full px-2pt-3 " style={{ background: 'linear-gradient(45deg, #650d09, #9d0801)' }}>
          <div className="flex items-center justify-between pt-4 px-4 pb-1">
            <h1 className="text-center text-xl md:text-2xl m-0  text-white font-bold">तो देर किस बात की??</h1>
            <div className="mb-1">
              <a href="#form" className={`comappColor bg-white text-decoration-none rounded font-bold px-2  pt-2 text-lg md:text-xl`}> Order now</a>
            </div>
          </div>
        </div>


        <div className="px-3 py-4">

          <h4 className="text-center m-0">कुछ स्टेप्स फॉलो कर के पावर बढ़ाने और दमदार प्रदर्शन के सपने को साकार करें !!</h4>

          <div className="w-100 mt-2">
            <img src="/main/hfc_images/dhyanPic.webp" alt="pic" className="w-100" />
          </div>

        </div>




        <div className="px-2">

          <div className="w-100 fw-bold text-center " style={{ color: 'black', fontSize: '1.2rem', }}>
            <span className="" >Hurry Up...</span> Limited Offer:&nbsp; <span className="" style={{ color: 'red' }}> 00:{minutes}:{remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}</span>
          </div>

          <div className="ordernowGifNew m-auto mb-4 mt-2">
            <a href="#form" className=""><div className="ordernowGifCustom">
              अभी ऑर्डर करें
            </div></a>
          </div>


          <h3 className=" text-center fw-bold text-dark" style={{ marginTop: '1.7rem', marginBottom: '0.8rem' }}>प्रोडक्ट के बारे में अधिक जानकारी हेतु फॉर्म भरें और एक्सपर्ट से संपर्क करें !</h3>


        </div>


      </section>
    </section>
  )
}

export default Section2