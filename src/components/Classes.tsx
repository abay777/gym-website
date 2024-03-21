import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Footer, Form, Navbar, ScrolltoTop } from '.';
import { LastBanner } from './LastBanner';
import cardio from '../assets/footer1.jpg';
import yoga from '../assets/yoga cover.jpeg';
import boxing from '../assets/footer2.jpg';
import pilates from '../assets/pilates cover.jpeg';
import strength from '../assets/strength cover.jpeg';


const variants = {
  initial:{
    opacity:0
  },
  animate:{
    opacity:1
  }
}

export const Classes: React.FC = () => {
  const [hoverX, setHoverX] = useState(0);
 
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setHoverX(event.clientX);
  };

 

  return (
    <>
    <ScrolltoTop/>
      <Navbar bg='white' text='#000' anime={false} />
      <section>
        <div className='flex relative gap-5 tracking-tighter cursor-pointer flex-col justify-center items-center text-4xl font-extrabold pt-10 mt-20 mb-20 z-0'>
          <h1 className='z-10 cardio hover:bg-opacity-50' onMouseMove={handleMouseMove}>CARDIO</h1>
          <h1 className='z-10 yoga  hover:bg-opacity-50' onMouseMove={handleMouseMove}>YOGA</h1>
          <h1 className='z-10 boxing hover:bg-opacity-50' onMouseMove={handleMouseMove}>BOXING</h1>
          <h1 className='z-10 pilates hover:bg-opacity-50' onMouseMove={handleMouseMove}>PILATES</h1>
          <h1 className='z-10 strength hover:bg-opacity-50' onMouseMove={handleMouseMove}>STRENGTH</h1>
          <div className='absolute w-full h-[21rem] top-0 bottom-0 right-0 left-0  flex items-center justify-center '>
            {hoverX > 0 && (
              <>
                <motion.img src={cardio} alt="" className='cardioPic -z-10 h-[21rem]' style={{ x: hoverX -700 }} 
                initial="initial" 
                whileInView="animate"
                variants={variants}
                transition={{duration:1, ease:'easeInOut'}}
                 />
                <motion.img src={yoga} alt="" className='yogaPic -z-10 h-[21rem]' style={{ x: hoverX -700 }} 
                initial="initial" 
                whileInView="animate"
                variants={variants}
                transition={{duration:1,ease:'easeInOut'}}
                />
                <motion.img src={boxing} alt="" className='boxingPic -z-10 h-[21rem]' style={{ x: hoverX  -700}} 
                initial="initial" 
                whileInView="animate"
                variants={variants}
                transition={{duration:1,ease:'easeInOut'}}
                />
                <motion.img src={pilates} alt="" className='pilatesPic -z-10 h-[21rem]' style={{ x: hoverX  -700}} 
                initial="initial" 
                whileInView="animate"
                variants={variants}
                transition={{duration:1,ease:'easeInOut'}}
                />
                <motion.img src={strength} alt="" className='strengthPic -z-10 h-[21rem]' style={{ x: hoverX -700}} 
                initial="initial" 
                whileInView="animate"
                variants={variants}
                transition={{duration:1,ease:'easeInOut'}}
                />
              </>
            )}
          </div>
        </div>
      </section>
      <Form text='white' bg='black' />
      <div className='w-11/12'>
      <div className='flex justify-center items-center w-10/12'>
        <hr className='bg-white h-[.07] ' />
      </div>
      </div>
      <LastBanner />
      <Footer />
    </>
  );
};


