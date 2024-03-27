import React, { useState } from 'react'

export const useLocalStorage = (key:string,defaultvalue:any) => {
        const [localStorageValue, setLocalStorageValue] = useState(()=>{
            try {
                let value = localStorage.getItem(key)
            
                if(value){
                    return JSON.parse(value)
                }else{
                    localStorage.setItem(key,JSON.stringify(defaultvalue));
                    return defaultvalue
                }
                
            } catch (error) {
                localStorage.setItem(key,JSON.stringify(defaultvalue))
                return defaultvalue  
        }
    })

   const setLocalStorageStateValue = (valueOrFn:any) =>{
        let newValue;
        if(typeof valueOrFn === 'function'){
            const fn = valueOrFn;
            newValue = fn(localStorageValue)

        }else{
            newValue = valueOrFn
        }
        localStorage.setItem(key,JSON.stringify(newValue))
        setLocalStorageValue(newValue)

   }


   return [localStorageValue,setLocalStorageStateValue]


}
  
export default useLocalStorage
