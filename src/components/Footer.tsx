import React from 'react'
import footer1 from '../assets/footer1.jpg'
import footer2 from '../assets/footer2.jpg'
import footer3 from '../assets/footer3.jpg'
import footer4 from '../assets/footer4.jpg'
import footer5 from '../assets/footer5.jpg'
import footer6 from '../assets/footer6.jpg'

export const Footer:React.FC = () => {
  return (
          <footer className='bg-black py-5'>
            <section className='text-white flex justify-evenly items-center pt-10'>
                <div >
                    <h1 className='md:text-3xl text-2xl tracking-tighter font-extrabold'>BROOKLYN</h1>
                    <p className='pt-10 text-center text-sm md:text-xl font-light'>12834 Fitness Ln.
                        <br />
                        Brooklyn, NY
                        <br />
                        11385
                    </p>
                </div>
                <div>
                    <h1 className='md:text-3xl text-2xl tracking-tighter font-extrabold'>LOS ANGELES</h1>
                    <p className='pt-10 text-center text-sm md:text-xl font-light'>12834 Fitness Ln.
                        <br />
                        Los Angeles, LA
                        <br />
                        11385                     
                    </p>
                </div>

            </section>
            <section className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-0 mt-10 '>
                <img src={footer1} className='m-0 object-contain w-full'  alt="athlete image" />
                <img src={footer2} className='m-0 object-contain w-full '  alt="athlete image" />
                <img src={footer3} className='m-0 object-contain w-full'  alt="athlete image" />
                <img src={footer4} className='m-0 object-contain w-full'  alt="athlete" />
                <img src={footer5} className='m-0 object-contain w-full'  alt="athlete image" />
                <img src={footer6} className='m-0 object-contain w-full'  alt="athlete image" />
            </section> 
            <section className='md:px-16 px-8 justify-center  pb-14 text-[#1470af] flex flex-col md:flex-row gap-5 mt-6 md:mt-14'>
                <div className=' flex-col justify-center items-center'>
                    <h1 className='text-[#1470af] text-3xl lg:text-5xl tracking-tighter  font-bold' >STAY UPDATED</h1>
                    <p className='text-white text-sm w-12/12 md:w-9/12 text-balance font-light mt-8 '>Sign up to be the first to find out when we add new classes, amenities, and more. We respect your privacy and will never share your information with any third-party vendors.  </p>
                </div>
                <div className=' flex-col justify-center items-center mt-14'>
                    <input type="email" placeholder='Email' className='px-10 md:px-14 py-4'  />
                    <button className='border-2 border-[#1470af] px-7 mt-8 rounded-3xl hover:bg-[#1470af] hover:text-white py-3 '>Sign up</button>
                </div>
                
            </section>
            
            <hr color='#1470af'  className='h-[.18rem] font-bold mt-2 '/>
            
            <section className='grid grid-cols-1 text-[#1470af]'>
                <div className='flex justify-center gap-10 md:gap-[18rem] mt-10'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-extrabold tracking-tighter mb-10 '>SUPPORT</h1>
                        <a className='text-center underline' href="">
                            Terms and Conditions
                            <br />
                            Private Policy
                            <br /> 
                            FAQs
                        </a>
                    </div>
                    <div className='flex flex-col justify-stretch items-center'> 
                        <h1 className='text-4xl font-extrabold tracking-tighter mb-10 '>CONTACT</h1>
                        <a className='text-center text-white' href="">
                            email@example.com
                            <br />
                            1+(555)-555-5555
                        </a>
                    </div>
                </div>
                <div className='flex justify-end items-center pr-10 md:pr-24 md:mt-0 mt-20' >
                    <p className='text-3xl font-extrabold tracking-tighter'>Gymic</p>
                </div>
            </section>

          </footer>
  )
}
