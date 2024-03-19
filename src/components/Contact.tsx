import React from 'react'
import { Reveal } from './framer reveal/Reveal'
import { Footer, Navbar } from '.'

export const Contact:React.FC = () => {
  return (
    <>
        <Navbar text='#000' bg={'white'}/>
        <section className='mt-14 py-4'>
            <article className='flex flex-col lg:flex-row  pl-7 md:pl-10 gap-20 md:gap-40 items-start '  >
                <div className='flex flex-col justify-center gap-10'>
                    <div className='flex flex-col justify-center gap-8'>
                        <Reveal>
                            <h1 className='text-4xl font-extrabold tracking-tighter  '>BROOKLYN</h1>
                        </Reveal>
                        <Reveal>
                            <p className='text-start text-sm font-medium tracking-tighter '>123 Demo St.
                                <br />
                                Brooklyn, NY
                                <br />
                                12345    
                            </p>      
                        </Reveal>
                            
                    </div>
                    <Reveal>        
                        <div className='flex flex-col justify-center gap-4'>
                            <h2 className='text-3xl font-extrabold tracking-tighter'>CONTACT</h2>
                            <p className='text-start text-sm font-medium tracking-tighter'>email@example.com
                                <br />
                                (555)-555-5555
                            </p>
                        </div>
                    </Reveal>
                </div>
                <Reveal>            
                    <div className='w-full  flex md:justify-end pr-0 md:pr-10 '>
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96825.94648139033!2d-74.02861509873047!3d40.6781369313744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1710739974946!5m2!1sen!2sin`}
                        className= 'w-[90%] md:w-[75%] h-[350px] md:max-h-max  '
                        style={{ border: 0 , filter:'grayscale(100%) invert(100%) contrast(100%)  '}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Brooklyn Map"
                    ></iframe>
                    </div>
                </Reveal>
            </article>
            <hr className='h-[.15rem] bg-black mt-14 mx-auto w-10/12' />
            <article className='flex flex-col lg:flex-row  pl-7 md:pl-10 gap-20 md:gap-40 items-start mt-20'  >
                <div className='flex flex-col justify-center gap-10'>
                    <div className='flex flex-col justify-center gap-8'>
                        <Reveal>
                            <h1 className='text-4xl font-extrabold tracking-tighter w-max  '>LOS ANGELES</h1>
                        </Reveal>
                        <Reveal>
                            <p className='text-start text-sm font-medium tracking-tighter '>123 Demo St.
                                <br />
                                Los Angeles, CA
                                <br />
                                12345    
                            </p>      
                        </Reveal>
                            
                    </div>
                    <Reveal>        
                        <div className='flex flex-col justify-center gap-4'>
                            <h2 className='text-3xl font-extrabold tracking-tighter'>CONTACT</h2>
                            <p className='text-start text-sm font-medium tracking-tighter'>email@example.com
                                <br />
                                (555)-555-5555
                            </p>
                        </div>
                    </Reveal>
                </div>
                <Reveal>            
                    <div className='w-full  flex md:justify-end pr-0 md:pr-10 '>
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d422704.59083454346!2d-118.41867103870732!3d34.13662882674505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1710745765386!5m2!1sen!2sin`}
                        className= 'w-[90%] md:w-[75%] h-[350px] md:max-h-max  '
                        style={{ border: 0 , filter:'grayscale(100%) invert(100%) contrast(100%)  '}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Brooklyn Map"
                    ></iframe>
                    </div>
                </Reveal>
            </article>
            
        </section>
        <Footer/>
    </>
  )
}
