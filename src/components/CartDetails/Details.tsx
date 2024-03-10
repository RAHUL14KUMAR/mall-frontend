import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

import {useCart} from '../../hooks/useCart'
import './style.css'


interface item{
    id:string,
    title:string,
    description:string,
    image:string,
    price:number
}

function Details() {
    const {cartProducts,cartTotalAmount,handleRemoveProductFromCart}=useCart();

    const navigate=useNavigate()
  return (
    <div>
        <Navbar/>
        <div className='grid grid-cols sm:geid-cols-1 md:grid-cols-2 gap-4 nav'>
            {cartProducts?.map((item:item)=>{
                return(
                    <div id={item.id}>
                        <div className="flex p-4">
                            <div className='w-[7em] h-full'>
                                <img src={item.image} alt={item.image}/>
                            </div>
                            <div className='h-full
                            w-[28em] border-4 border-slate-900 flex-cols mx-2'>
                                <p className='font-mono text-black tracking-widest font-bold m-2'>{item.title}</p>

                                <p className='font-mono text-black tracking-widest font-bold mx-2'>{item.price} RS</p>

                                
                                <p className='font-mono text-black tracking-widest m-2'>{item.description}</p>

                                <button className=' text-center font-mono text-white bg-slate-800 hover:bg-slate-900 cursor-pointer p-4 rounded-sm m-2' >Remove</button>
                            </div>
                        </div>
                        
                    </div>
                )
            })}
        </div>

        <div className='position'>

        <div className='flex border-4 border-slate-900 p-4 flex-col w-[15em] h-full m-2 p-2'>
            <div className='font-mono text-black
            text-center font-bold'>CART TOTAL AMOUNT</div>
            <div className='text-black text-center font-mono'>{cartTotalAmount} RS</div>
            <button className='text-white font-mono p-2 bg-slate-900' onClick={()=>navigate('/address')}>Next</button>
        </div>   

        </div>
    </div>
  )
}

export default Details