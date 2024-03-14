import React from 'react'

export const TopBanner:React.FC = () => {
  return (
    <section className='bg-bannerMain  w-full h-[35rem] relative bg bg-center bg-contain' >
        <span className='absolute bottom-11 md:bottom-[3rem] left-10 md:left-10 md:text-6xl text-5xl font-extrabold tracking-tight leading-tight text-balance text-[#1470af] w-[24rem] md:w-[36rem] texts'>TRAIN ON YOUR OWN TIME.</span>
        <button 
          className='border-2 px-8 py-3 hover:bg-[#1470af] hover:text-white text-[#1470af] rounded-3xl border-[#1470af] absolute bottom-0 md:bottom-[3rem]'
          style={{
            right: '9rem',
            transform: 'translateX(50%)', 
          }}
          >
          Join Our Gym
        </button>
    </section>
  )
}
