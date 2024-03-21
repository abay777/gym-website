
import React from 'react'
import { Reveal } from './framer reveal/Reveal'


interface props {
    bg:string;
    text:string;
}

export const Form:React.FC<props> = ({bg,text}) => {
  return (
   <>
     <section className={`bg-${bg} text-${text} pl-5 md:pl-10 py-14 flex flex-col md:flex-row`}>
        <div className='w-full md:w-[40%]'>
            <Reveal>
                <h1 className='font-extrabold text-3xl tracking-tighter '>SCHEDULE A VISIT</h1>
            </Reveal>
            <Reveal>
                <p className='font-light w-[90%] text-balance py-5'>Take a free 30-minute tour of either of our locations to help you decide if Klipsan is the right gym for you. You’ll have the opportunity to try equipment, observe classes, and get direct answers to all of your questions.</p>
            </Reveal> 
        </div>
        <form action="" className='px-0 md:px-10 py-10 md:py-0 w-full md:w-[60%]' >
            <div>Name<span className='text-gray-600 '>(required)</span></div>
           <article className='flex py-5 gap-4'>
                <div className=''>
                    <label htmlFor="firstName">First Name</label>
                    <input className='py-2 px-5 w-[90%] border-2 border-gray-500' type="text" id='firstName' name='firstName'/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className='py-2 px-5 w-[90%] border-2 border-gray-500' id='LastName' name='LastName' />
                </div>
           </article>
           <article>
            <label htmlFor="email">Email <span className='text-gray-600 '>(required)</span></label>
            <input type="email" name='email'className='py-2 px-5 w-[95%] border-2 border-gray-500' id='email' required />
           </article>
           <article className='pt-5'>
            <label htmlFor="date">Date <span className='text-gray-600 '>(required)</span></label>
            <input type="date"  className='py-2 px-5 w-[12rem] border-2 border-gray-500 block' name='date' id='date' />
           </article>
           <button className={`mt-5 border-2 border-${bg} py-3 text-${bg} px-7 bg-${text}  rounded-3xl hover:bg-${bg} hover:border-[#1470af] hover:text-${text}`}>submit</button>
        </form>
    </section>
  
   </>
  )
}


Form.defaultProps = {
    bg:'black',
    text:'red',
    
}