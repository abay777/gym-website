import React from 'react'
import { Footer, Navbar, ScrolltoTop } from '.'
import nichola from '../assets/Nicole+Winter-instructor.jpg'
import aaron from '../assets/aron-instructor.jpg'
import derrick from '../assets/Derrick+Sawyers.+Cardio-instructor.jpg'
import aliyah from '../assets/Aliyah-instructor.jpg'
import omar from '../assets/Omar+Harris-instructor.jpeg'
import teshia from '../assets/Teshia+Harris-instructor.jpeg'
import { motion } from 'framer-motion'

const variantz:any = {
    initial : {
        opacity:0,
        y:70

    },
    animate:{
        opacity:1,
        y:0
    },
   
}

export const Instructors:React.FC = () => {
  return (
    <>
        <ScrolltoTop/>
        <Navbar text={'#000'} bg={'white'} anime={true} />
        <section className='grid grid-cols-2 md:grid-cols-3 mt-14 gap-4 mx-4  justify-evenly'>
        <article className='relative text-white w-full'>
            <img loading='lazy' src={nichola} className='w-full max-h-[28rem] h-auto ' alt="nichola instructor" /> 
            <motion.div 
            variants={variantz}
            initial='initial'
            whileInView='animate'
            transition={{delay:.5}}
            className='absolute inset-0 flex flex-col md:justify-center justify-end gap-20 items-center md:gap-0'>
                <h1 className='md:text-2xl text-base font-extrabold tracking-tighter'>NICOLE WINTER</h1> 
                <p className='md:text-sm font-light text-xs text-center md:text-balance'>PILATES, YOGA</p>
            </motion.div>
        </article>
        <article className='relative text-white w-full'>
            <img loading='lazy' src={aaron} className='w-full max-h-[28rem] h-auto ' alt="nichola instructor" /> 
            <motion.div 
            variants={variantz}
            initial='initial'
            whileInView='animate'
            transition={{delay:.5}}
            className='absolute inset-0 flex flex-col md:justify-center justify-end gap-20 items-center md:gap-0'>
                <h1 className='md:text-2xl text-base font-extrabold tracking-tighter'>AARON HUGHES</h1> 
                <p className='md:text-sm font-light text-xs text-center md:text-balance '>STRENGTH TRAINING, BOXING</p>
            </motion.div>
        </article>
        <article className='relative text-white w-full'>
            <img loading='lazy' src={derrick} className='w-full max-h-[28rem] h-auto ' alt="nichola instructor" /> 
            <motion.div 
            variants={variantz}
            initial='initial'
            whileInView='animate'
            transition={{delay:.5}}
            className='absolute inset-0 flex flex-col md:justify-center justify-end gap-20 items-center md:gap-0'>
                <h1 className='md:text-2xl text-base font-extrabold tracking-tighter'>DERRICK SAWYERS</h1> 
                <p className='md:text-sm font-light text-xs text-center md:text-balance '>CARDIO, CORE</p>
            </motion.div>
        </article>
        <article className='relative text-white w-full'>
            <img loading='lazy' src={aliyah} className='w-full max-h-[28rem] h-auto ' alt="nichola instructor" /> 
            <motion.div 
            variants={variantz}
            initial='initial'
            whileInView='animate'
            transition={{delay:.5}}
            className='absolute inset-0 flex flex-col md:justify-center justify-end gap-20 items-center md:gap-0'>
                <h1 className='md:text-2xl text-base font-extrabold tracking-tighter'>ALIYAH WILLIAMS</h1> 
                <p className='md:text-sm font-light text-xs text-center md:text-balance '>CORE, CARDIO</p>
            </motion.div>
        </article>
        <article className='relative text-white w-full'>
            <img loading='lazy' src={omar} className='w-full max-h-[28rem] h-auto ' alt="nichola instructor" /> 
            <motion.div 
            variants={variantz}
            initial='initial'
            whileInView='animate'
            transition={{delay:.5}}
            className='absolute inset-0 flex flex-col md:justify-center justify-end gap-20 items-center md:gap-0'>
                <h1 className='md:text-2xl text-base font-extrabold tracking-tighter'>OMAR HARRI</h1> 
                <p className='md:text-sm font-light text-xs text-center md:text-balance '>CARDIO, YOGA</p>
            </motion.div>
        </article>
        <article className='relative text-white w-full'>
            <img loading='lazy' src={teshia} className='w-full max-h-[28rem] h-auto ' alt="nichola instructor" /> 
            <motion.div 
            variants={variantz}
            initial='initial'
            whileInView='animate'
            transition={{delay:.5}}
            className='absolute inset-0 flex flex-col md:justify-center justify-end gap-20 items-center md:gap-0'>
                <h1 className='md:text-2xl text-base font-extrabold tracking-tighter'>ATESHIA MILLER</h1> 
                <p className='md:text-sm font-light text-xs text-center md:text-balance '>OXING, STRENGTH TRAINING</p>
            </motion.div>
        </article>
        </section>
        <Footer/>
    </>
  )
}
