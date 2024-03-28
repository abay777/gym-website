import React, {useCallback,useRef, useState } from 'react'
import { AppDispatch, useAppSelector } from '../state/store'
import { useDispatch } from 'react-redux'
import { Carts, deleteFromCart, updateCartQuantity } from '../state/CartSlice'
import { Link } from 'react-router-dom';
import { ScrolltoTop } from '.';

export const Cart:React.FC = () => {
    const [quantity, setQuantity] = useState<number>(0)
    const inputRef = useRef<HTMLInputElement>(null); // Specify type as HTMLInputElement
    const qntyRef = useRef<HTMLParagraphElement>(null)
   const dispatch = useDispatch<AppDispatch>()
   const cart = useAppSelector(state=>state.cart)
   const {cartList} = cart

   const handleDelete:(id: number) => void = (id) => {
    dispatch(deleteFromCart(id))
   }


   const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
        const newQnty = Number(e.target.value)
       setQuantity (()=>newQnty)

   },[])

   const handleSave = useCallback((cart:Carts) => {
    dispatch(updateCartQuantity({product:cart,quantity}))
    qntyRef.current?.style.setProperty('display','block')
    inputRef.current?.style.setProperty('display','none')
      setQuantity(0)
   },[dispatch,quantity,qntyRef,inputRef])



   const handleUpdate = useCallback(()=>{
    if(inputRef.current){
        qntyRef.current?.style.setProperty('display','none')
        inputRef.current?.focus()
        inputRef.current?.style.setProperty('display', 'block')
    }
   },[inputRef,qntyRef])

  return (

    cart.cartList.length ===0 ?(
        <div className='text-xl font-bold tracking-tighter pl-16 my-5 flex-col flex  justify-center gap-10'>
            <p className='font-extrabold tracking-tight pr-20'>shopping cart</p>
        <span className='mx-auto'>😉👇</span>
        <Link to={'/Store'} className='mx-auto py-2 border-black border-2 rounded-3xl w-[14rem] text-center hover:bg-black hover:text-white'>continue shooping</Link>
        </div>

    ):(
        <>
        <ScrolltoTop/>
        <h1 className='text-xl font-bold tracking-tighter pl-16 my-5'>Shopping cart</h1>
        <section className='flex flex-col-reverse lg:flex-row gap-10 justify-evenly items-end py-10 '>
                <section className='md:w-full mx-auto md:mx-2 '>     
                    {cartList.map(( cart )=>(
                        <article key={cart.id} className='lg:mx-auto mx-0 flex flex-col md:flex-row md:h-[8rem] md:px-0 h-full mt-4  gap-1 border-2 rounded-lg border-gray-300 justify-center md:justify-normal flex-grow md:w-[40rem] w-[15rem]  md:mx-auto  '>
                            <div className='w-full  flex justify-center md:justify-start  '>
                                <img src={cart.productImg} alt=""  className='object-cover md:h-full h-[10rem] md:object-cover w-full md:max-w-[7.5rem] aspect-square min-w-[3.5rem] md:min-w-[5rem] '/>
                            </div>
                            <div className='flex flex-col justify-center md:justify-between md:items-s items-center py-2 gap-2'>
                                <h2 className='font-bold md:text-base text-xs '>{cart.productName}</h2>
                                <div className='flex flex-col md:flex-row md:justify-start justify-center md:items-center gap-2 '>
                                    <div className='flex gap-1 md:max-w-[40%] justify-center md:justify-normal '>
                                        <label className='text-gray-600 md:text-base text-xs' htmlFor="qnty">Quantity: </label>
                                        <p ref={qntyRef}>{cart.quantity}</p>
                                        <input type="number" onChange={(e)=>handleChange(e)} ref={inputRef} value={quantity} style={{display:'none'}} name='qty' id='qnty' min={1}  className='border-2
                                        border-black py-1 rounded-xl text-center md:text-base text-sm max-w-[30%]' />
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-2 px-3   md:gap-2'>
                                        <button 
                                        onClick={()=>handleUpdate()}
                                        className='z-10  md:text-base text-xs hover:bg-black hover:text-white border-2 rounded-xl border-black py-1 px-3 '>Update</button>
                                        <button className='md:text-base text-xs hover:bg-black hover:text-white border-2 rounded-xl border-black py-1 px-3 ' 
                                        onClick={()=>handleDelete(cart.id)}>delete</button>
                                        <button 
                                        onClick={()=>handleSave(cart)}
                                        className={quantity>0?'md:text-base text-xs hover:bg-black hover:text-white border-2 rounded-xl border-black py-1 px-3 md:fixed md:left-[77%] lg:left-[50%] md:-translate-x-1/2 bg-white' :'hidden'}>save</button>
                                    </div>
                                    

                                </div> 
                            </div>
                            <div className='border-t-2 md:border-l-2 border-gray-300 px-2 flex flex-col justify-center items-center w-full md:w-[50%]' >
                                <p className='text-gray-500'>price:</p>
                                <p className='font-bold'>${cart.totalCost}</p>
                            </div>
                        </article>
                    ))}         
                </section>
                <section className='md:w-full px-2 py-1 mx-auto max-w-[25rem] '>
                    <article className='border-2 lg:fixed static top-[20.5%] right-5 bg-white border-gray-300 rounded-lg px-2 py-2 min-h-[9.5rem] flex flex-col justify-between items-start gap-5 '>
                        <div className='flex-col gap-4 flex items-center justify-start'>
                            <ul className='list-inside'>
                                {cartList.map(cart=>{
                                    return(
                                    <li key={cart.id}>{cart.productName}  <span className='text-blue-400 font-bold'>({cart.quantity})</span></li>
                                    )    
                                })}
                            
                            </ul>
                        </div>
                        <p className='border-t-2 border-gray-300 w-full'>Total Amount : <span className='font-extrabold tracking-tighter'>${cart.totalAmount}</span></p>
                        <div className='flex gap-5'>
                            <button onClick={()=>{
                                localStorage.clear()
                                window.location.reload()
                            }} className='hover:bg-black hover:text-white border-2 rounded-lg border-black px-3 py-1'>Checkout Orders</button>
                            <Link to={'/Store'} className='hover:bg-black hover:text-white border-2 rounded-lg border-black px-3 py-1' >Continue Shopping</Link>
                        </div>

                    </article>
                </section>
        </section>
        </>
    )
  )
}

