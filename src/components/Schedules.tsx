import React from 'react'
import { Footer, Navbar } from '.'

export const Schedules:React.FC = () => {
  return (
    <>
        <Navbar text={'black'} bg={'white'}/>
         <section className='bg-white pt-10'>
        <article className='flex flex-col md:flex-row pt-5 justify-start items-start gap-10 md:gap-40 md:px-10 pl-10 '>
            <div className=''>
                <h1 className='text-5xl md:text-7xl font-extrabold tracking-tighter'>MONDAY</h1>
            </div>
            <div className='w-full  '>
                <div className='flex-col justify-start items-center '>
                    <h2 className='text-2xl md:text-4xl font-bold tracking-tighter'>BOXING 4—5PM </h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>: LOS ANGELES</p>
                        <p className=' tracking-wide text-sm md:text-base'><span  className='font-bold '>INSTRUCTOR</span>: AARON HUGHES</p>
                    </div>
                </div>
                <div className='flex-col justify-start items-center mt-8 md:mt-16'>
                    <h2  className='text-2xl md:text-4xl font-bold tracking-tighter'>YOGA 6—7PM</h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>: BROOKLYN</p>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>INSTRUCTOR</span>: NICOLE WINTER</p>
                    </div>
                    <button className='text-xl rounded-3xl w-[90%] mx py-3 md:w-[15rem]  md:py-2 border-2 mt-10 border-black hover:bg-black hover:text-white'>Book class</button>
                </div>
               
            </div>
           
        </article>
        <hr className='h-[.1rem] bg-black mx-auto mt-20  w-[90%] px-6'/>
        <article className='flex flex-col md:flex-row pt-5 justify-start items-start gap-10 md:gap-40 md:px-10 pl-10  mt-16'>
            <div className=''>
                <h1 className='text-5xl md:text-7xl font-extrabold tracking-tighter'>TUESDAY</h1>
            </div>
            <div className='w-full  '>
                <div className='flex-col justify-start items-center '>
                    <h2 className='text-2xl md:text-4xl font-bold tracking-tighter'>CARDIO 4PM-5PM  </h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>: LOS ANGELES</p>
                        <p className=' tracking-wide text-sm md:text-base'><span  className='font-bold '>INSTRUCTOR</span>: AARON HUGHES</p>
                    </div>
                </div>
                <div className='flex-col justify-start items-center mt-8 md:mt-16'>
                    <h2  className='text-2xl md:text-4xl font-bold tracking-tighter'>PILATES 6PM-7PM</h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>: BROOKLYN</p>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>INSTRUCTOR</span>: NICOLE WINTER</p>
                    </div>
                    <button className='text-xl rounded-3xl w-[90%] mx py-3 md:w-[15rem]  md:py-2 border-2 mt-10 border-black hover:bg-black hover:text-white'>Book class</button>
                </div>
               
            </div>
           
        </article>
        <hr className='h-[.1rem] bg-black mx-auto mt-20  w-[90%] px-6'/>
        <article className='flex flex-col md:flex-row pt-5 justify-start items-start gap-10 md:gap-40 md:px-10 pl-10  mt-16'>
            <div className=''>
                <h1 className='text-5xl md:text-7xl font-extrabold tracking-tighter'>WEDNESDAY</h1>
            </div>
            <div className='w-full  '>
                <div className='flex-col justify-start items-center '>
                    <h2 className='text-2xl md:text-4xl font-bold tracking-tighter'>BOXING 4PM-5PM </h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>: LOS ANGELES</p>
                        <p className=' tracking-wide text-sm md:text-base'><span  className='font-bold '>INSTRUCTOR</span>: AARON HUGHES</p>
                    </div>
                </div>
                <div className='flex-col justify-start items-center mt-8 md:mt-16'>
                    <h2  className='text-2xl md:text-4xl font-bold tracking-tighter'>YOGA 6PM-7PM</h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>: BROOKLYN</p>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>INSTRUCTOR</span>: NICOLE WINTER</p>
                    </div>
                    <button className='text-xl rounded-3xl w-[90%] mx py-3 md:w-[15rem]  md:py-2 border-2 mt-10 border-black hover:bg-black hover:text-white'>Book class</button>
                </div>
               
            </div>
           
        </article>
        <hr className='h-[.1rem] bg-black mx-auto mt-20  w-[90%] px-6'/>
        <article className='flex flex-col md:flex-row pt-5 justify-start items-start gap-10 md:gap-40 md:px-10 pl-10  mt-16'>
            <div className=''>
                <h1 className='text-5xl md:text-7xl font-extrabold tracking-tighter'>THURSDAY</h1>
            </div>
            <div className='w-full  '>
                <div className='flex-col justify-start items-center '>
                    <h2 className='text-2xl md:text-4xl font-bold tracking-tighter'>CARDIO 4PM-5PM  </h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>: LOS ANGELES</p>
                        <p className=' tracking-wide text-sm md:text-base'><span  className='font-bold '>INSTRUCTOR</span>: AARON HUGHES</p>
                    </div>
                </div>
                <div className='flex-col justify-start items-center mt-8 md:mt-16'>
                    <h2  className='text-2xl md:text-4xl font-bold tracking-tighter'>YOGA 6PM-7PM</h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>: BROOKLYN</p>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>INSTRUCTOR</span>: NICOLE WINTER</p>
                    </div>
                    <button className='text-xl rounded-3xl w-[90%] mx py-3 md:w-[15rem]  md:py-2 border-2 mt-10 border-black hover:bg-black hover:text-white'>Book class</button>
                </div>
               
            </div>
           
        </article>
        <hr className='h-[.1rem] bg-black mx-auto mt-20  w-[90%] px-6'/>
        <article className='flex flex-col md:flex-row pt-5 justify-start items-start gap-10 md:gap-40 md:px-10 pl-10  mt-16'>
            <div className=''>
                <h1 className='text-5xl md:text-7xl font-extrabold tracking-tighter'>FRIDAY</h1>
            </div>
            <div className='w-full  '>
                <div className='flex-col justify-start items-center '>
                    <h2 className='text-2xl md:text-4xl font-bold tracking-tighter'>BOXING 4PM-5PM   </h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>: BROOKLYN</p>
                        <p className=' tracking-wide text-sm md:text-base'><span  className='font-bold '>INSTRUCTOR</span>: AARON HUGHES</p>
                    </div>
                </div>
                <div className='flex-col justify-start items-center mt-8 md:mt-16'>
                    <h2  className='text-2xl md:text-4xl font-bold tracking-tighter'>PILATES 6PM-7PM</h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>: BROOKLYN</p>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>INSTRUCTOR</span>: NICOLE WINTER</p>
                    </div>
                    <button className='text-xl rounded-3xl w-[90%] mx py-3 md:w-[15rem]  md:py-2 border-2 mt-10 border-black hover:bg-black hover:text-white'>Book class</button>
                </div>
               
            </div>
           
        </article>
        <hr className='h-[.1rem] bg-black mx-auto mt-20  w-[90%] px-6'/>
        <article className='flex flex-col md:flex-row pt-5 justify-start items-start gap-10 md:gap-40 md:px-10 pl-10  mt-16'>
            <div className=''>
                <h1 className='text-5xl md:text-7xl font-extrabold tracking-tighter'>SATURDAY</h1>
            </div>
            <div className='w-full  '>
                <div className='flex-col justify-start items-center '>
                    <h2 className='text-2xl md:text-4xl font-bold tracking-tighter'>CARDIO 4PM-5PM    </h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>: BROOKLYN</p>
                        <p className=' tracking-wide text-sm md:text-base'><span  className='font-bold '>INSTRUCTOR</span>: DERRICK SAWYERS</p>
                    </div>
                </div>
                <div className='flex-col justify-start items-center mt-8 md:mt-16'>
                    <h2  className='text-2xl md:text-4xl font-bold tracking-tighter'>STRENGTH 6PM-7PM</h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>:  LOS ANGELES</p>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>INSTRUCTOR</span>: ALIYAH WILLIAMS</p>
                    </div>
                    <button className='text-xl rounded-3xl w-[90%] mx py-3 md:w-[15rem]  md:py-2 border-2 mt-10 border-black hover:bg-black hover:text-white'>Book class</button>
                </div>
               
            </div>
           
        </article>
        <hr className='h-[.1rem] bg-black mx-auto mt-20  w-[90%] px-6'/>
        <article className='flex flex-col md:flex-row pt-5 justify-start items-start gap-10 md:gap-40 md:px-10 pl-10  mt-16'>
            <div className=''>
                <h1 className='text-5xl md:text-7xl font-extrabold tracking-tighter'>SUNDAY</h1>
            </div>
            <div className='w-full  '>
                <div className='flex-col justify-start items-center '>
                    <h2 className='text-2xl md:text-4xl font-bold tracking-tighter'>PILATES 4PM-5PM   </h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>: BROOKLYN</p>
                        <p className=' tracking-wide text-sm md:text-base'><span  className='font-bold '>INSTRUCTOR</span>: NICOLE WINTER</p>
                    </div>
                </div>
                <div className='flex-col justify-start items-center mt-8 md:mt-16'>
                    <h2  className='text-2xl md:text-4xl font-bold tracking-tighter'>BOXING 6PM-7PM</h2>
                    <div className='pt-5 md:pt-10'>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>LOCATION</span>: BROOKLYN</p>
                        <p className=' tracking-wide text-sm md:text-base'><span className='font-bold '>INSTRUCTOR</span>: NICOLE WINTER</p>
                    </div>
                    <button className='text-xl rounded-3xl w-[90%] mx py-3 md:w-[15rem]  md:py-2 border-2 mt-10 border-black hover:bg-black hover:text-white'>Book class</button>
                </div>
               
            </div>
           
        </article>
        <hr className='h-[.1rem] bg-black mx-auto mt-20  w-[90%] px-6'/>
        <Footer/>
   
   
     </section>
    </>
    
  )
}
