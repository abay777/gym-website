import React from 'react'
import storecover from '../assets/store-cover.png'
import { Footer, Navbar } from '.'
import freshJuice from '../assets/pressed juice.png'
import { products } from '../Data/products'
import { Reveal } from './framer reveal/Reveal'

export const Store:React.FC = () => {
  return (
    <>
    <Navbar text={'#000'} bg={'white'}/>
    <div className='mt-0 relative'>
        <img src={storecover} className='object-cover h-[34rem] w-full  ' alt="" />
         <Reveal>
             <button className='px-20 py-2 text-[#1470af] left-[50%] transform -translate-x-1/2 hover:bg-[#1470af] hover:text-white absolute bottom-[3%] border-2 border-[#1470af] rounded-3xl'>BUY NOW</button>
         </Reveal>
    </div>
    <section className='mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
        {products.map((product , index )=>
            <article key={index} className='flex  md:mx-0 lg:mx-2 w-full my-8'>
            <a href="#" className='flex flex-col justify-center items-center gap-4 w-full'>
                <Reveal>
                <img src={product.productImg} className='w-[90%]' alt="Fresh Pressed Juices" />
                </Reveal>
                <Reveal>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-bold tracking-tighter text-xl text-center'>{product.productName}</h1>
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
