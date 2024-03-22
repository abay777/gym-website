import React from "react";
import { Reveal } from "./framer reveal/Reveal";
import footer1 from '../assets/footer1.jpg'
import footer2 from '../assets/footer2.jpg'
import footer3 from '../assets/footer3.jpg'
import footer4 from '../assets/footer4.jpg'
import footer5 from '../assets/footer5.jpg'
import footer6 from '../assets/footer6.jpg'

export  const LastBanner:React.FC = ()=>{
  return <section className="bg-black">
            <section className='text-white  flex justify-evenly items-center pt-10'>
                <div>
                    <Reveal>
                        <h1 className='md:text-3xl text-2xl tracking-tighter font-extrabold'>BROOKLYN</h1>
                    </Reveal>
                    <Reveal>
                        <p className='pt-10 text-center text-sm md:text-xl font-light'>12834 Fitness Ln.
                            <br />
                            Brooklyn, NY
                            <br />
                            11385
                        </p>
                    </Reveal>  
                </div>
                <div>
                <Reveal>
                    <h1 className='md:text-3xl text-2xl tracking-tighter font-extrabold'>LOS ANGELES</h1>
                </Reveal>
                <Reveal>
                    <p className='pt-10 text-center text-sm md:text-xl font-light'>12834 Fitness Ln.
                            <br />
                            Los Angeles, LA
                            <br />
                            11385                     
                    </p>
                </Reveal>
                </div>

            </section>
            <Reveal>
                <section className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-0 mt-10 '>
                    <img loading="lazy" src={footer1} className='m-0 object-contain w-full' alt="athlete image" />
                    <img loading="lazy" src={footer2} className='m-0 object-contain w-full ' alt="athlete image" />
                    <img loading="lazy" src={footer3} className='m-0 object-contain w-full' alt="athlete image" />
                    <img loading="lazy" src={footer4} className='m-0 object-contain w-full' alt="athlete" />
                    <img loading="lazy" src={footer5} className='m-0 object-contain w-full' alt="athlete image" />
                    <img loading="lazy" src={footer6} className='m-0 object-contain w-full' alt="athlete image" />
                </section> 
            </Reveal>
            </section>;
}
  