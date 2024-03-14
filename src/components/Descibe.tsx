import React from 'react'
import describe1 from '../assets/describe1.jpg'
import describe2 from '../assets/describe2.jpg'

export const Descibe:React.FC = () => {
  return ( 
    <section className='bg-black  text-white '>
        <div className='flex justify-around pt-16 px-10'>
            <span className=' text-5xl font-extrabold w-[70%] tracking-tighter  text-balance'>WE’RE A HIGH QUALITY GYM DEDICATED TO AFFORDABLE HEALTH AND WELLNESS.  </span>
            <p className=' text-pretty w-[40%] font-extralight'>Klipsan Fitness is a gym where you come as you are, and do your best. Our membership offers both digital and in-club programming aimed at helping you achieve your fitness goals. Discover all of our club’s offerings below. </p>
        </div>
        <div className='relative flex justify-around justify-items-center items-center mt-[14rem] '>
          <img src={describe1} loading='lazy' className='w-[24%] object-cover' alt="trainer picture" />
          <img src={describe2} loading='lazy' className='w-[24%] absolute right-[16%] object-contain mb-[10%] ' alt="second trainer picture" />
        </div>
        <div className=' mt-24 text-center'>
          <h1 className='text-4xl font-extrabold text-center'>AMENITIES</h1>
          <p className=' w-[40%] text-balance mx-auto mt-10'>At Klipsan Fitness, we’re always expanding our amenities to meet the needs of our community. Something you’d like to see added to our list? Submit a request.</p>
          <div className='flex justify-center gap-24 mt-24 font-bold text-sm'>
            <div >
              Modern Facilities
              <br />
              •
              <br />
              Premium Classes
              <br />
              •
              <br />
              Personal Trainers
              <br />
              •
              <br />
              Rockwall
              <br />
              •
              <br />
              Boxing Ring
            </div>
            <div>
              Juice Bar
              <br />
              •
              <br />
              Personal Nutritiousness
              <br />
              • 
              <br />
              Monthly Guest Passes
              <br />
              •
              <br />
              Basketball Courts
              <br />
              •
              <br />
              Lockers
            </div>
          </div>
        </div>


    </section>
  )
}
