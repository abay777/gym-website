
import React from 'react'


import { Reveal } from './framer reveal/Reveal'

export const Footer:React.FC = () => {
  return (
          <footer className='bg-black py-5'>
            <section className='md:px-16 px-8 justify-center  pb-14 text-[#1470af] flex flex-col md:flex-row gap-5 mt-6 md:mt-14'>
                <div className=' flex-col justify-center items-center'>
                    <Reveal>
                        <h1 className='text-[#1470af] text-3xl lg:text-5xl tracking-tighter  font-bold' >STAY UPDATED</h1>

                    </Reveal>
                    <Reveal>
                        <p className='text-white text-sm w-12/12 md:w-9/12 text-balance font-light mt-8 '>Sign up to be the first to find out when we add new classes, amenities, and more. We respect your privacy and will never share your information with any third-party vendors.  </p>
                    </Reveal>    
                </div>
                <div className=' flex-col justify-center items-center mt-14'>
                    <Reveal>
                        <label htmlFor="email"></label>
                    <input type="email" name='email' id='email' autoComplete='on' placeholder='Email' className='px-10 md:px-14 py-4'  />

                    </Reveal>
                    <Reveal>
                    <button className='border-2 border-[#1470af] px-7 mt-8 rounded-3xl hover:bg-[#1470af] hover:text-white py-3 '>Sign up</button>            
                    </Reveal>
                </div>
            </section>
            
            <hr  className='h-[.1rem] bg-[#1470af] w-[95%] mx-auto  mt-2 '/>
            
            <section className='grid grid-cols-1 text-[#1470af]'>
                <div className='flex justify-center gap-10 md:gap-[18rem] mt-10'>
                    <div className='flex flex-col justify-center items-center'>
                        <Reveal>
                            <h1 className='text-4xl font-extrabold tracking-tighter mb-10 '>SUPPORT</h1>
                        </Reveal>
                        <Reveal>
                            <a className='text-center underline' href="">
                                Terms and Conditions
                                <br />
                                Private Policy
                                <br /> 
                                FAQs
                            </a>
                        </Reveal>          
                    </div>
                    <div className='flex flex-col justify-stretch items-center'> 
                        <Reveal>
                         <h1 className='text-4xl font-extrabold tracking-tighter mb-10 '>CONTACT</h1>
                        </Reveal>
                        <Reveal>
                            <a className='text-center text-white' href="">
                                email@example.com
                                <br />
                                1+(555)-555-5555
                            </a>
                        </Reveal>       
                    </div>
                </div>
                <div className='flex justify-end items-center pr-10 md:pr-24 md:mt-0 mt-20' >
                      <p className='text-3xl font-extrabold tracking-tighter'>Gymic</p>  
                </div>
            </section>
          </footer>
  )
}
