import React from 'react'
import { AppDispatch, useAppSelector } from '../state/store'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from '../state/CartSlice'





export const Cart:React.FC = () => {
   const dispatch = useDispatch<AppDispatch>()
   const cart = useAppSelector(state=>state.cart)
   const {cartList} = cart

   const handleDelete:(id: number) => void = (id) => {
    dispatch(deleteFromCart(id))
   }
   console.log(cartList)

  return (
    <>
    <h1 className='text-xl font-bold tracking-tighter pl-16 my-5'>Shopping cart</h1>
    <section className='flex flex-col-reverse lg:flex-row gap-10 justify-evenly items-end py-10 '>
            <section className='md:w-full mx-auto md:mx-2 '>     
                {cartList.map(( cart , index)=>(
                    <article key={index} className='lg:mx-auto mx-0 flex flex-col md:flex-row md:h-[8rem] md:px-0 h-full mt-4  gap-1 border-2 rounded-lg border-gray-300 justify-center md:max-w-[40rem] md:mx-auto lg:w-full '>
                    <div className='w-full  flex justify-center items-center'>
                        <img src={cart.productImg} alt=""  className='object-cover md:h-full h-[10rem] md:object-cover w-full md:max-w-[7.5rem] aspect-square min-w-[3.5rem] '/>
                    </div>
                        <div className='flex flex-col justify-center md:justify-between md:items-start items-center py-2 gap-5'>
                            <h2 className='font-bold md:text-base text-xs '>{cart.productName}</h2>
                            <div className='flex flex-col md:flex-row md:justify-between justify-center md:items-center gap-2 '>
                                <div className='flex gap-1 md:justify-center md:items-center justify-around'>
                                    <label className='text-gray-600 md:text-base text-xs' htmlFor="qnty">Quantity: </label>
                                    <input type="number" value={cart.quantity} disabled name='qty' min={1}  className='border-2
                                    border-black py-1 rounded-xl text-center md:text-base text-sm max-w-[30%]' />
                                </div>
                                <div className='flex flex-col md:flex-row gap-2 px-3   md:gap-2'>
                                    <button className='md:text-base text-xs hover:bg-black hover:text-white border-2 rounded-xl border-black py-1 px-3 '>Update</button>
                                    <button className='md:text-base text-xs hover:bg-black hover:text-white border-2 rounded-xl border-black py-1 px-3 ' 
                                    onClick={()=>handleDelete(cart.id)}>delete</button>
                                </div>
                                

                            </div> 
                        </div>
                            <div className='border-l-2 border-gray-300 px-2 flex flex-col justify-center items-center'>
                                <p className='text-gray-500'>price:</p>
                                <p className='font-bold'>${cart.totalCost}</p>
                            </div>
                    </article>
                ))}         
            </section>
            <section className='md:w-full px-2 py-1 mx-auto max-w-[25rem] '>
                <article className='border-2 lg:fixed static top-[20.5%] right-5 bg-white border-gray-300 rounded-lg px-2 py-2 min-h-[9.5rem] flex flex-col justify-between items-start gap-5 '>
                    <div className='flex items-center justify-start'>
                        <ul className='list-inside'>
                            {cartList.map(cart=>{
                                return(
                                 <li key={cart.id}>{cart.productName}  <span className='text-blue-400 font-bold'>({cart.quantity})</span></li>
                                )    
                            })}
                            
                        </ul>
                    </div>
                    <div className='flex gap-5'>
                        <button className='hover:bg-black hover:text-white border-2 rounded-lg border-black px-3 py-1'>Checkout Orders</button>
                        <button className='hover:bg-black hover:text-white border-2 rounded-lg border-black px-3 py-1' >Continue Shopping</button>
                    </div>

                </article>
            </section>
    </section>
    </>
  )
}
