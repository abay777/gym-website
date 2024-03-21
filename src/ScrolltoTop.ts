
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrolltoTop:React.FC = () => {
    const pathName = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathName])
  return (
    null
  )
}
