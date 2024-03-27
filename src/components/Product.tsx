import React, { MouseEventHandler, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Footer, Navbar } from '.';
import { Reveal } from './framer reveal/Reveal';
import { AppDispatch, useAppSelector } from '../state/store';
import { product } from '../Data/products';
import { useDispatch } from 'react-redux';
import { MdOutlineShop } from 'react-icons/md';
import { addToCart } from '../state/CartSlice';


export const Product: React.FC = () => {

    let [checkCart , setCheckCart] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<number>();
    const  {id} = useParams(); 
    const productsContainer = useAppSelector((state) => state.products);
    const dispatch = useDispatch<AppDispatch>()
    const matchProducts = productsContainer.productsBag.filter((product:product) => product.id === Number(id))
   
    const handleChange = useCallback((event:React.ChangeEvent<HTMLSelectElement>,product:product)=>{
         if(product.calc){
           setSelectedOption(()=>  Number(event.target.value))
         }else{
            if(event.target.value ===  '0'){
                alert('please choose your pack')
                return

            }else{
                setSelectedOption(()=> 1)
            }
         }
       
         console.log(selectedOption)
        
    },[selectedOption])

    let timeout:any
    let handleBuy:MouseEventHandler<HTMLElement> = useCallback(() => {
            clearTimeout(timeout);
        if (selectedOption !== undefined) {
            matchProducts.map((product:product) => {
                dispatch(addToCart({ quantity: selectedOption, product}));
            });
        }else{
            alert('please select your pack')
            return
        }
       
             setCheckCart((prev)=>!prev);
             timeout = setTimeout(() => {
             setCheckCart((prev)=>!prev);
            },1500 );

        
         
           
     }, [dispatch, selectedOption, matchProducts]);
    

    

    return (
        <>
            <Navbar bg='white' text='#000' anime={true}/>
            <section>
                <h1 className='text-sm font-light pl-16 mt-20 '>store &gt; {matchProducts.map((product:product) => product.productName)}</h1>
                {
                     
                    
                     matchProducts.map((product:product,) => (
                        <article key={product.id} className='flex flex-col-reverse md:flex-row mx-14 mt-16 justify-center items-start pb-10 gap-10'>
                            <Reveal>
                                <div>
                                    <div className='flex flex-col gap-7'>
                                        <div >     
                                            <h1 className='md:text-4xl  text-2xl tracking-tighter font-extrabold'>{product.productName}</h1>
                                            <h2 className='text-xl md:text-2xl tracking-tight font-bold'>{product.price}</h2>
                                        </div>
                                        <div className=' flex md:flex-col flex-col-reverse gap-6 w-full'>
                                            <ul className=' text-sm font-semibold mt-10 pl-5 '>
                                                {product.features.map((ft, i) => (
                                                    <li key={i}>{ft}</li>
                                                ))}
                                            </ul>
                                            <div className='flex-col flex  md:w-5/12 w-7/12 '>
                                                <label htmlFor='' className='text-sm '>pack:</label>
                                                <select value={selectedOption} 
                                                onChange={(event)=>handleChange(event ,product)}
                                                name='' id='' className='border-black border-2 py-2  select-inner-border px-4'>
                                                    <option value="0">choose Pack</option>
                                                    {product.pack.map((pk, i) => (
                                                        <option key={i} value={pk} className=''>
                                                            {pk}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <span className={checkCart ? 'text-white bg-green-400 flex rounded-xl  justify-center items-center gap-4  sticky px-2 md:w-1/2 w-full py-1 animate-bounce transform  left-10' : 'hidden'}>Check the Cart <MdOutlineShop/> </span>
                                        <button
                                          onClick={handleBuy} 
                                        className='border-2 border-black md:w-5/12 w-7/12 py-2 font-semibold text-sm hover:bg-black hover:text-white rounded-3xl mt-5'>
                                            BUY
                                        </button>
                                    </div>
                                </div>
                            </Reveal>
                            <Reveal>
                                <div className='h-full'>
                                    <img src={product.productImg} alt='' className='h-[95%]'/>
                                </div>
                            </Reveal>
                        </article>
                    ))}
            </section>
            <Footer/>
        </>
    );
};
