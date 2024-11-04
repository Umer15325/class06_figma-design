import React from 'react'
import pic from './pic.jpeg'
import Image from 'next/image'

const about = () => {
  return (
    <div className='bg-white text-black px-[120px]'>

    <div className='flex gap-44'>

    <div className='flex flex-col'>
    <br /><br /><br /><br /><br /><br />

      <div className='font-sans font-medium text-[50px]'>Hi I’m Mehmet <br /> Akif Karasu, 3D <br /> artist & sculptor.</div>
      <br /><br />

      <div className='font-sans font-normal text-[22px] text-[#606060]'>My work is mainly focused on <br /> third-dimension modeling, texturing and <br /> rendering. I like exploring the creatures <br /> with a touch of dark surrealism for <br /> characters and production.
        <br /><br />
      Now I’m an interactive media design <br /> student in Istanbul ⏤ currently <br /> freelancing and seeking internship <br /> opportunities.</div>
      <br /><br /><br />

      <div className='flex gap-16 text-[12px]'>
        <div className='font-sans font-medium underline'>Main Software </div>
        <div className='font-sans font-normal '>Pixologic ZBrush, Autodesk Maya, The Foundry Mari,<br /> Arnold Renderer, Blender, Forger
        <br /> <br />
        Adobe CC, Figma, Ableton
        </div>
      </div>

      <br /> <br /><br /> <br />

      <div className='flex gap-[82px] text-[12px]'>
        <div className='font-sans font-medium underline'>Main Skills</div>
        <div className='font-sans font-normal'>Organic and Polygonal Modeling, UV Layout,<br />Texturing, Retopology, Ilustration, Sound Design</div>
      </div>

    </div>


    <div className='flex justify-end content-start h-max'>
      <Image src={pic} alt='picture' width={421} height={590}/>
    </div>

    </div>

      <br /><br /><br /><br />
      <hr className='border border-black'/>
      <br /><br />

    <div className='flex justify-between'>
      <div className='font-sans font-normal text-[26px]'>I am thrilled to answer to <br /> your next project →</div>

      <div className='font-sans font-normal text-[26px]'>makifkarasu@outlook.com
        <br /><br />
        <p className='font-sans font-normal text-[16px]'>View Resume</p>
      </div>
    </div>

    <br /><br /><br /><br /><br /><br />
  </div>

  )
}

export default about