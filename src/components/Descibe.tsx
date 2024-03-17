import React from 'react'
import describe1 from '../assets/describe1.jpg'
import describe2 from '../assets/describe2.jpg'
import { Reveal } from './framer reveal/Reveal'
import { motion } from 'framer-motion'

export const Descibe:React.FC = () => {
  return ( 
    <section className='bg-black  text-white pb-36 '>
        <div className='flex flex-col md:flex-row justify-around items-center content-stretch pt-8 md:pt-16 px-10'>
          <Reveal>
            <span className='text-2xl md:text-4xl font-extrabold w-[100%] md:w-[60%] tracking-tighter md:text-balance'>
              WE’RE A HIGH QUALITY GYM DEDICATED TO AFFORDABLE HEALTH AND WELLNESS. 
            </span>
          </Reveal>
          <Reveal>
            <p className=' text-pretty w-[100%] md:w-[40%]  font-light mt-36 md:mt-0'>
              Klipsan Fitness is a gym where you come as you are, and do your best. Our membership offers both digital and in-club programming aimed at helping you achieve your fitness goals. Discover all of our club’s offerings below.
            </p>
          </Reveal>  
        </div>
        <div className='relative flex justify-center justify-items-center items-center mt-[14rem] '>
          <img src={describe1} loading='lazy' className='md:w-[24%] w-[40%] object-cover' alt="trainer picture" />
          <motion.img src={describe2} loading='lazy' className='w-[34%] md:w-[24%]  absolute right-[5%] md:right-[16%] object-contain mb-[10%] ' alt="second trainer picture"
          initial={{y:-70}}
          whileInView={{y:0}}
          viewport={{once:true}}
          transition={{delay:1, ease:'linear'}} />
        </div>
        <div className=' mt-24 text-center'>
          <h1 className='text-4xl font-extrabold text-center'>AMENITIES</h1>
          <Reveal>
            <p className=' md:w-[40%] w-[90%] text-balance mx-auto mt-10'>At Klipsan Fitness, we’re always expanding our amenities to meet the needs of our community. Something you’d like to see added to our list? Submit a request.</p>
          </Reveal> 
          <div className='flex justify-center gap-20 mt-24 font-bold text-sm px-28'>
            <Reveal>
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
            </Reveal>
            <Reveal>
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
            </Reveal>
          </div>
        </div>
    </section>
  )
}
