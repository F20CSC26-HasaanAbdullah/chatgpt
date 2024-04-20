import Image from 'next/image'
import React from 'react'
import plus from "../../public/assets/plus.svg";

const hello = () => {
  return (
    <div className='flex-row border border-black h-screen'>
      <div className='flex w-[260px] h-[832px] bg-black text-white'>
        <div className='flex flex-col '>
          <div className='flex rounded border border-white ml-[8px] mr-[8px] mt-2 w-[244px] h-[46px]'>
            <div>
              <Image src={plus} alt='plusicon'></Image>
            <div className='w-[220px] h-[20px] ml-5 mt-2'>
              New chat
            </div>
            </div>

          </div>


        </div>


    </div>
    </div>
  )
}

export default hello