import { useGlobalContext } from '@/app/statemanage/context'
import dayjs from 'dayjs'
import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaSearch, FaBars } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'

const Header = () => {

  const { exis, hexxx, happy, onexis } = useGlobalContext();

  return (
    <section className=''>
      <div className="flex justify-around items-center py-3 text-2xl bg-[#fca311] -mx-2 px-2 sm:px-5 ">
        <div>
          <a href="#form"><FaBars /></a>
        </div>
        <div>
          <a href='#form '><img src="/main/brc_images/logo.png" alt="pic" height='100%' width='100%' loading='lazy' className='sm:w-1/2 w-5/6 mx-auto' /></a>
        </div>
        <div>
          <a href="#form"><FaSearch /></a>
        </div>

      </div>


      <div className="w-full flex items-center justify-center gap-2 mt-2 mb-1 flex-grow" style={{ fontSize: '0.8rem' }}>
        <span className='ms-1 font-bold block pe-2 border-r ' >{dayjs().subtract(1, 'days').format("DD MMM YYYY")} </span>
        <div className="pe-2 font-bold border-r flex gap-1" onClick={onexis}  >
          {
            exis ? <AiFillHeart className='text-[1rem] me-1 text-red-500' /> : <AiOutlineHeart className='text-[1rem] me-1' />
          }
          {happy}
        </div>
        <span className=' font-bold  flex gap-1' ><IoEyeSharp style={{ fontSize: '1.1rem' }} /> {hexxx}</span>
      </div>

      <h1 className="fontNoto fontNoto text-center text-red-500 text-2xl mt-5 sm:text-3xl font-bold">महज 30 दिनों में अपनी सेक्स टाइमिंग को 30-45 मिनट तक बढ़ाएं और लिंग को बनाएं सख्त और मजबूत</h1>
    </section>
  )
}

export default Header