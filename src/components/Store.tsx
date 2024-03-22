import React from 'react'
import storecover from '../assets/store-cover.png'
import { Footer, Navbar, ScrolltoTop } from '.'
import { products } from '../Data/products'
import { Reveal } from './framer reveal/Reveal'

export const Store:React.FC = () => {
  return (
    <>
    <ScrolltoTop/>
    <Navbar text={'#000'} bg={'white'} anime={true}/>
    <div className='mt-0 relative'>
        <img loading='lazy' src={storecover} className='object-cover h-[34rem] w-full  ' alt="" />
         <Reveal>
             <button className='w-[50%] md:w-[25%] px-18 md:px-10 py-2 text-[#1470af] left-[50%] transform -translate-x-1/2 hover:bg-[#1470af] hover:text-white absolute bottom-[3%] border-2 border-[#1470af] rounded-3xl'>BUY NOW</button>
         </Reveal>
    </div>
    <section className='mt-8 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 justify-center items-center gap-2 mx-2  lg:gap-2 lg:mx-10'>
        {products.map((product , index )=>
            <article key={index} className='flex   w-full my-8  justify-center items-center'>
            <a href="#" className='flex flex-col justify-center items-center gap-4 w-full'>
                <Reveal>
                    <div className="image-container relative w-full h-[13rem] md:w-full md:h-[13rem] lg:h-[16rem] " >
                         <img loading='lazy' src={product.productImg} className='absolute h-full w-full  object-cover align-middle top-0 bottom-0 left-0 right-0' alt="Fresh Pressed Juices" />
                    </div>
                </Reveal>
                <Reveal>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-bold tracking-tighter text-base lg:text-xl md:text-xl text-center'>{product.productName}</h1>
                        <p className='font-semibold text-xs text-center'>{product.price}</p>
                    </div>
                </Reveal>
            </a>
        </article>

            )}
        
       
    </section>
    <Footer/>
    </>
  )
}
