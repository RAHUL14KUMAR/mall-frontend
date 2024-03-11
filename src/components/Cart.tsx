import React,{useEffect} from 'react'
import { useCart } from './../hooks/useCart';

interface product{
  id:string,
  title:string,
  price:number,
  image:string,
  description:string
}

function Cart({id,title,price,image,description}:product) {
    const {handleAddProductToCart}=useCart();
    const item={
      id,
      title,
      price,
      image,
      description
    }

    // useEffect(()=>{
    //   const a=JSON.parse(localStorage.getItem('eshopCartItems') as string);

    // },[item])
  return (
    <div className="w-[100%] h-[100%] flex flex-col z-1 m-[8px] overflow-hidden">
      <div className='border-4 border-slate-900 m-[8px] h-[400px] p-[5px] bg-white'>
        <div className='m-[5px] w-[90%] flex flex-col justify-center items-center mt-[20px]'>
          <img src={image} alt={title} className="w-[180px] h-[250px]"/>
        </div>

        <div className="w-[90%] m-auto flex flex-col justify-space-evenly flex-0.7">
          <h3 className='text-center'>{title}</h3>
          <p className='text-center'>₹ {price}</p>

          <div className='flex justify-center overflow-hidden'>
            <button className='m-2 bg-slate-900 font-mono text-white p-2 rounded-sm' onClick={()=>handleAddProductToCart(item)}>
              AddToCart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
