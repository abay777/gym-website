import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { Reveal } from "./framer reveal/Reveal";

export const QuotesBanner:React.FC = ()=>{
  return (<div className='h-max goldGradient w-full text-center flex-col justify-center items-center py-14 md:py-24'>
        <div className='flex-col justify-center items-center text-center'>
        <Reveal>
            <ImQuotesLeft size={40} color='white' className=' mx-auto ' />
        </Reveal> 
        <Reveal>
            <p className='font-extrabold md:text-center text-pretty tracking-tight md:text-5xl text-3xl w-full text-white md:pt-14 pt-8  leading-2 md:px-36 px-9'>KLIPSAN FITNESS WAS CENTRAL IN HELPING ME GAIN THE STAMINA FOR MY RECENT MARATHON.</p>
        </Reveal>
        <Reveal>
            <p className='mx-auto tracking-tight text-white md:pt-14 pt-8'>-Alejandro Jimenez</p>
        </Reveal>
        </div>
    </div>);
}
  