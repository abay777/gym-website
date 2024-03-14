import { inView, useInView } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { FaFacebook, FaGripLines, FaInstagram, FaYoutube } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'
import { IoMdClose } from 'react-icons/io'

export const Navbar:React.FC = () => {
     const [burger,setBurger] = useState<boolean>(false)
     const  viewRef = useRef<HTMLDivElement>(null)
     const isInView =useInView(viewRef)
     console.log(isInView)
  return (
    <>
    <nav className='text-[#1470af] fixed left-0 right-0 z-50' ref={viewRef}>
        <section className='hidden md:flex items-center justify-between px-4 '>
            <div className='text-3xl font-bold pl-5 '>Gmyic </div>
            <div className='flex  items-center gap-10 lg:gap-[13rem]  '>
                <ul className='flex justify-center items-center gap-7 font-semibold '>
                    <li>About</li>
                    <li>Schedule</li>
                    <li>Contact</li>
                    <li>Store</li>
                </ul>

                <div className='flex gap-4 lg:gap-12'>
                    <div className='flex justify-around items-center gap-2 lg:gap-5'>
                        <FaInstagram size={18}/>
                        <FaYoutube size={18}/>
                        <FaFacebook size={18}/>
                    </div>
                    <div className='flex items-center  gap-2 lg:gap-3'>
                        <GrCart size={20}/>
                        <span>0</span>

                    </div>
                </div>
            </div>
        </section>
        <section className='flex md:hidden items-center  justify-between px-4'>
            <div className='text-3xl font-bold pl-5 flex justify-between'>Gmyic 
            </div>
            <div className='flex gap-[8rem]'>
            <div className='flex items-center gap-3'>
                <GrCart size={25}/>
                <span>0</span>
            </div>
            <div className='flex z-10 justify-center items-center'
            onClick={()=>setBurger(!burger)}>
               {!burger? <FaGripLines/>:<IoMdClose/>} 
            </div>
            </div>
            <div className={burger?' ease-in-out duration-200 flex-col shadow-black shadow-2xl text-center fixed left-1/2 bottom-0 right-0 top-0 pt-[3rem] tracking-wider   ' : 'hidden'}>
                <ul className='flex-col  font-semibold text-xl'>
                    <li className='py-3'>About</li>
                    <li className='py-3'>Schedule</li>
                    <li className='py-3'>Contact</li>
                    <li className='py-3'>Store</li>
                </ul>

                <div className='flex-col gap-12 pt-10'>
                    <div className='flex mt-3 justify-center items-center gap-20'>
                        <FaInstagram  size={20}/>
                        <FaYoutube  size={20}/>
                        <FaFacebook  size={20}/>
                    </div>
                   
                </div>
            </div>
        </section>



    </nav>

    </>
  )
}