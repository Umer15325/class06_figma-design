import React from 'react'

const Footer = () => {
  return (
    <div className='text-black flex justify-between bg-white px-[120px] h-[80px]'>
        <div className='text-[18px] font-medium text-[#2429AF]'>Mehmet Akif Karasu ⏤ 2020
        </div>

        <div className='text-[18px] font-medium flex gap-4'>
            <div>Artstation</div>
            <div>Linkedin</div>
            <div>Twitter</div>
        </div>
    </div>
  )
}

export default Footer