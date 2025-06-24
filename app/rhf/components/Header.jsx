import OrderNow from './orderNow'
import React from 'react'

const Header = () => {
  return (
    <div>

      <div>
        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7b0e5d17-b58d-4151-1788-05aaca3a3800/public" alt="dssd" loading='lazy' className='w-full' />
      </div>

      <div>
        <div className='text-lg sm:text-2xl flex justify-center  items-center pt-5 pb-3 fontNoto'>
          <p className='pt-2'>अब बनें बेस्ट परफ़ॉर्मर -  &nbsp;</p>
          <p className='bg-[#fe0000] px-4 text-white font-semibold pt-2'>बिना किसी साइड इफेक्ट के</p> </div>
      </div>


      <div className='w-full sm:w-[80%] mx-auto my-3 pt-3 relative'>
        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3b5aa0db-81b7-4bf5-69a3-4ed3cf8e2d00/public" alt="sdsds" loading='lazy' className='' />

        <div
          className='absolute fontNoto transform translate-x-[-50%] sm:left-[50%] left-[55%] top-[46%] text-center text-white text-[17px] sm:text-xl font-semibold w-full'
        >
          3,500+ यूनिट्स हर दिन भारत में बिक रहीं
        </div>

      </div>




      <div className='w-full sm:w-[80%] mx-auto my-3 pt-3 relative'>
        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/98ae2a10-b5c8-4d21-b8bf-acfeaa0afc00/public" alt="sdsds" loading='lazy' className='' />

        <div className='absolute fontNoto transform translate-x-[-50%] left-[41%] sm:left-[38%] top-[46%] text-center text-white text-[17px] sm:text-xl font-semibold w-full'>
          3+ मिलियन संतुष्ट ग्राहक
        </div>

      </div>



      <div className='w-full sm:w-[80%] mx-auto my-3 pt-3 relative'>
        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/285c2dba-cbec-4385-5e75-7777a9dee300/public" alt="sdsds" loading='lazy' className='' />

        <div className='absolute fontNoto transform translate-x-[-50%] left-[48%] sm:left-[45%] top-[46%] text-center text-white text-[17px] sm:text-xl font-semibold w-full'>
          96% पुरुषों ने महसूस किया सुधार
        </div>

      </div>



      <div className='fontNoto text-2xl my-7 text-center font-semibold'>
        क्या आप भी इन समस्याओं से जूझ रहे हैं?
      </div>



      <div className='grid grid-cols-2 gap-2 sm:gap-4 '>

        <div className='rounded-br-[30%] overflow-hidden h-[180px] sm:h-auto sm:min-h-[280px]'>
          <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e268e6ff-157b-445c-0ba7-d1cf0344fc00/public" alt="dsss" loading='lazy' className='w-full poly ' />
          <div className='fontNoto font-semibold text-white text-[17px] sm:text-xl pt-2 pb-1 text-center bg-[#fe0000] -mt-14'>
            थकान और  <br />कमजोरी
          </div>
        </div>



        <div className='rounded-bl-[30%] overflow-hidden h-[180px] sm:h-auto sm:min-h-[280px] '>
          <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3b99556c-536d-44df-3226-4f630d3f6400/public" alt="dsss" loading='lazy' className='w-full poly ' />
          <div className='fontNoto font-semibold text-white text-[15px] sm:text-xl pt-2 pb-1 text-center bg-[#fe0000] -mt-14'>
            एनर्जी और स्टैमिना <br /> की कमी
          </div>
        </div>



        <div className='rounded-tr-[20%] overflow-hidden'>
          <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/53ccdc2f-67af-4fb6-a60e-392a39e9a100/public" alt="dsss" loading='lazy' className='w-full poly ' />
          <div className='fontNoto font-semibold text-white  text-[15px] sm:text-xl pt-2 text-center bg-[#fe0000] -mt-14'>
            ढीला या <br /> असंतुष्ट प्रदर्शन
          </div>
        </div>


        <div className='rounded-tl-[20%] overflow-hidden'>
          <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/375362dd-86bd-466d-1794-581992e23500/public" alt="dsss" loading='lazy' className='w-full poly ' />
          <div className='fontNoto font-semibold text-white text-[15px] sm:text-xl pt-2 text-center bg-[#fe0000] -mt-14'>
            साथी को समय ना <br /> देने की परेशानी
          </div>
        </div>


      </div>


      <OrderNow />


      <div className='w-full mb-5'>
        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4479844b-bd1d-4264-e074-6946a09be700/public" alt="dfdasd" loading='lazy' className='w-full' />
      </div>


      <div className='w-full mt-5'>
        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d13579d1-d1dd-4a9c-20e1-54c03213d400/public" alt="dfdasd" loading='lazy' className='w-full' />
      </div>





    </div>
  )
}

export default Header
