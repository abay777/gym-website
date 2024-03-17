import React, { ReactNode } from 'react'
import { motion ,stagger} from 'framer-motion'

interface props{
    children:ReactNode
}

const RevealVariants = {
    initial:{
        translateY:70,
        opacity:0
    },
    animate:{
        translateY:0,
        opacity:1
    }

}


export const Reveal:React.FC <props> = ({children}) => {
  return (
    <motion.div
    variants={RevealVariants}
    initial='initial'
    whileInView='animate'
    viewport={{once:true}}
    transition={{delay:.8}}
    >
        <div>
         {children}
        </div>
    </motion.div>
  )
}
