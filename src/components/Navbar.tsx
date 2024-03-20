import { useInView ,motion} from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { FaFacebook, FaGripLines, FaInstagram, FaYoutube } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'
import { IoMdClose } from 'react-icons/io'
import { MdOpacity } from 'react-icons/md'
import { Link } from 'react-router-dom'
interface props{
    text:string;
    bg:string;
}



export const Navbar:React.FC<props> = ({text,bg}) => {
     const [burger,setBurger] = useState<boolean>(false)
     const [about, setAbout] = useState<boolean>(false)
      const  viewRef = useRef<HTMLDivElement>(null)
     const isInView =useInView(viewRef)
     console.log(bg)
     

       
     
  return (
    <>
    <motion.nav className={`text-[${text}]  z-50'`}  ref={viewRef}
    initial={{translateY:100}}
    animate={{ translateY:0 }}
    viewport={{once:true}}
    transition={{duration:.5}}>
        <section className={isInView?`hidden z-20 fixed top-0 right-0 left-0 md:flex  items-center justify-between px-4 py-2 bg-[#4c858200]`:`bg-${bg}  hidden py-2  z-10 md:flex items-center justify-between px-4 fixed top-0 left-0 right-0`}>
            <div className='text-3xl font-bold pl-5 '><Link to={'/'}>Gmyic</Link>  </div>
            <div className='flex  items-center gap-10 lg:gap-[13rem]  '>
                <ul className='flex justify-center items-center gap-7 font-semibold '>
                    <li className='relative about cursor-pointer'>About</li>
                    <div className='bg-black text-white absolute top-9 -translate-x-10 text-start pl-5  hidden py-3 w-[17rem] capitalize i'>
                       <Link to={'/Instructors'}> <span className='cursor-pointer'>instructors</span></Link>
                        <span className='cursor-pointer'> Classes</span>
                        <span className='cursor-pointer'>Pricing</span>
                    </div>
                    <Link to={'/Schedule'}>
                    <li className='cursor-pointer'>Schedule</li>
                    </Link>
                    <Link to={'/Contact'}>
                        <li className='cursor-pointer'>Contact</li>
                    </Link>
                    <Link to={'/store'}>
                        <li className='cursor-pointer'>Store</li>
                    </Link>
                </ul>
               
                <div className='flex gap-4 lg:gap-12'>
                    <div className='flex justify-around items-center gap-2 lg:gap-5'>
                        <FaInstagram size={18}/>
                        <FaYoutube size={18}/>
                        <FaFacebook size={18}/>
                    </div>
                    <div className='flex items-center  gap-2 lg:gap-3'>
                        <GrCart size={20}/>
                        <span>0</span>

                    </div>
                </div>
            </div>
        </section>
        <section className={isInView?'flex md:hidden items-center py-2 justify-between px-4 fixed top-0 left-0 right-0 z-40':`flex md:hidden bg-${bg} z-40 py-2 items-center  justify-between px-4 fixed top-0 left-0 right-0`}>
            <div className='text-3xl font-bold pl-5 flex justify-between'><Link to={'/'}>Gmyic</Link>
            </div>
            <div className='flex gap-[5rem]'>
            <div className='flex items-center gap-3 cursor-pointer'>
                <GrCart size={25}/>
                <span>0</span>
            </div>
            <div className='flex z-20 justify-center items-center cursor-pointer'
            onClick={()=>{
            setBurger(!burger) 
            setAbout(false)}}>
               {!burger? <FaGripLines size={30}/>:<IoMdClose size={30}/>} 
            </div>
            </div>
            <motion.div 
            className={burger?' ease-in-out duration-200 flex-col  bg-white shadow-2xl text-start fixed left-0 bottom-0 right-0 top-0 pt-[3rem] tracking-wider   ' : 'hidden'}
            initial={{opacity:0,translateX:300}}
            whileInView={{opacity:1, translateX:0 }}
            transition={{duration:.05}}>
    
                <ul className={ `flex-col  font-semibold text-4xl text-[${text}]`}>
                    <li className='py-3 pl-14  cursor-pointer '>About <span className='font-extralight' onClick={()=>setAbout(!about)}> &gt;</span></li>
                   <Link to={'/schedule'}><li className='py-3 pl-14 cursor-pointer '>Schedule</li></Link>
                        <li className='py-3 pl-14  cursor-pointer'>Contact</li>
                    <Link to={'/store'}>
                        <li className='py-3 pl-14  cursor-pointer'>Store</li>
                    </Link>
                    <motion.div className={about?`bg-[#ffffff] text-black' fixed top-0  left-0 right-0 bottom-0 flex-col flex pt-[3rem] tracking-wider items-start`:`hidden`}
                     initial={{opacity:0,translateX:300}}
                     whileInView={{opacity:1, translateX:0 }}
                     transition={{duration:.1}}>
                        <p className='text-gray-500  pl-14 py-3'> <span className='font-extralight' onClick={()=>setAbout(!about)}>&lt;</span> Back</p>
                        <p className=' pl-14 py-3 cursor-pointer'>instructors</p>
                        <p className=' pl-14 py-3 cursor-pointer'>Classes</p>
                        <p className=' pl-14 py-3 cursor-pointer'>Pricing</p>   
                    </motion.div>
                </ul>

                <div className='flex-col gap-4 pt-10'>
                    <div className='flex mt-3 justify-start items-center gap-4 pl-14'>
                        <FaInstagram size={20}/>
                        <FaYoutube  size={20}/>
                        <FaFacebook size={20}/>
                    </div>
                   
                </div>
            </motion.div>
        </section>



    </motion.nav>

    </>
  )
}

Navbar.defaultProps = {
    text:'#1470af',
    bg:'green'
}