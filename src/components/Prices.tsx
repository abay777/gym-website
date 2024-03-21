import React from 'react'
import { Reveal } from './framer reveal/Reveal'
import { Footer, Navbar, ScrolltoTop } from '.'

export const Prices:React.FC = () => {
  return (
    <>
    <ScrolltoTop/>
    <Navbar bg='white' text='black' anime={true} />
    <section>
       ` <article className='grid md:grid-cols-2 grid-cols-1 justify-evenly items-center mx-10'>
        <div className=' flex md:flex-col flex-row h-full gap-5  items-center md:items-start md:justify-between justify-center'>
           <Reveal>
                <div className='flex-col flex gap-3 mt-16'>
                        <h1 className='text-5xl font-extrabold tracking-tighter'>$50</h1>
                        <p className='text-sm font-light'>/monthly</p>
                </div>
           </Reveal>
           <Reveal >
             <button className='w-[90%] md:w-7/12 hover:bg-black hover:text-white   py-4 border-2 border-black rounded-3xl text-xs mt-10 md:mt-0'>BUY NOW</button>
           </Reveal>
        </div>
        <div className='flex flex-col gap-3 justify-center md:pt-20 pt-5'>
           <Reveal>
                <p className='text-xs text-balance'>
                    It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest
                </p>
           </Reveal>
            <Reveal>
                <ul className='list-disc text-[.7rem] ml-3'>
                    <li className='de'>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                </ul>
            </Reveal>
        </div>    
        </article>

        <hr className='bg-black h-[0.1rem] md:mt-16 mt-8 w-[95%] mx-auto'/>

        <article className='grid md:grid-cols-2 grid-cols-1 justify-evenly items-center mx-10'>
        <div className=' flex md:flex-col flex-row h-full gap-5  items-center md:items-start md:justify-between justify-center'>
           <Reveal>
                <div className='flex-col flex gap-3 mt-16'>
                        <h1 className='text-5xl font-extrabold tracking-tighter'>$70</h1>
                        <p className='text-sm font-light'>/monthly</p>
                </div>
           </Reveal>
           <Reveal>
             <button className='md:w-7/12 w-[90%] hover:bg-black hover:text-white  py-4 border-2 border-black rounded-3xl text-xs mt-10 md:mt-0'>BUY NOW</button>
           </Reveal>
        </div>
        <div className='flex flex-col gap-3 justify-center md:pt-20 pt-5'>
           <Reveal>
                <p className='text-xs text-balance'>
                    It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest
                </p>
           </Reveal>
            <Reveal>
                <ul className='list-disc text-[.7rem] ml-3'>
                    <li className='de'>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                </ul>
            </Reveal>
        </div>
     
        </article>
        <hr className='bg-black h-[0.1rem] md:mt-16 mt-8 w-[95%] mx-auto'/>

        <article className='grid md:grid-cols-2 grid-cols-1 justify-evenly items-center mx-10'>
        <div className=' flex md:flex-col flex-row h-full gap-5  items-center md:items-start md:justify-between justify-center'>
           <Reveal>
                <div className='flex-col flex gap-3 mt-16'>
                        <h1 className='text-5xl font-extrabold tracking-tighter'>$100</h1>
                        <p className='text-sm font-light'>/monthly</p>
                </div>
           </Reveal>
           <Reveal>
             <button className='md:w-7/12 w-[90%] hover:bg-black hover:text-white  py-4 border-2 border-black rounded-3xl text-xs mt-10 md:mt-0'>BUY NOW</button>
           </Reveal>
        </div>
        <div className='flex flex-col gap-3 justify-center md:pt-20 pt-5'>
           <Reveal>
                <p className='text-xs text-balance'>
                It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. 
                </p>
           </Reveal>
            <Reveal>
                <ul className='list-disc text-[.7rem] ml-3'>
                    <li className='de'>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                </ul>
            </Reveal>
        </div>
     
        </article>
        <hr className='bg-black h-[0.1rem] md:mt-16 mt-8 w-[95%] mx-auto'/>
    </section>
    <Footer/>
    </>
  )
}
