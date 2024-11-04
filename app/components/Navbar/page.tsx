import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between h-[137px] pt-[102px] px-[120px] bg-white text-black'>
        <div>
            <p className='text-[35px] font-sans font-bold'>ma.</p>
        </div>

        <div className='flex font-sans text-[21px] gap-4'>
            <Link href="/"><div>Work</div></Link>
            <Link href="/about"><div>About</div></Link>
            <div>Playground</div>
            <div>Contact</div>
        </div>
        
    </div>
  )
}

export default Navbar