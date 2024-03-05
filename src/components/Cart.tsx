import React from 'react'

interface product{
    id:string,
    title:string,
    price:number,
    image:string,
    description:string
}

const seeDetails=()=>{
  console.log("object")
}

function Cart({id,title,price,image,description}:product) {
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
            <button className='m-2 bg-slate-900 font-mono text-white p-2 rounded-sm'>
              AddToCart
            </button>
            <button className='m-2 bg-cyan-700 hover:bg-cyan-800 font-mono text-white rounded-sm p-2' onClick={seeDetails}>Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
