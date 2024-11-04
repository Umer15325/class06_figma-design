import React from 'react'
import Link from 'next/link'

const Section = ({_link_,description,nmbr,subtext}:{_link_:string,description:string,nmbr:number,subtext:string}) => {
  return (
<div className='flex flex-col gap-[100px]'>
   <div className='flex bg-white text-black px-[120px] justify-between'>

        <div className='w-[356px] flex flex-col'>

            <h1 className='text-[18px] font-medium'>{nmbr} / PROJECT NAME</h1>
            <br />
            <p className='text-[18px] font-normal'>{description}</p>
            <br />
            <br />
            <div className='flex flex-col h-44 justify-between'>
            <p className='text-[14px] font-normal text-[#606060]'>{subtext}</p>
            <Link href='#' className='text-[18px] font-medium underline'>{_link_}</Link>
            </div>

        </div>

        <div className='w-[520px] h-[364.68px] bg-[#606060]'>
        </div>

    </div>

    <div>
    <hr className='border border-black mx-[120px]'/>
    </div>

</div>
  )
}

export default Section