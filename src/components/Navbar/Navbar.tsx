import React,{useEffect, useState} from 'react'
import { MdOutlineDensityMedium } from "react-icons/md";
import {IoMdClose} from 'react-icons/io'
import {useNavigate} from 'react-router-dom'
import { useCart } from '../../hooks/useCart';
import './style.css'

function Navbar() { 
  const {cartTotalQty} = useCart();

  const navigate = useNavigate();

  const [Log,setLog]=useState('');
  const [role,setRole]=useState('');
  const [toggle,setToogle]=useState(false);

  

  useEffect(()=>{
    const a = JSON.parse(localStorage.getItem("user") as string);

    if(!a){
      navigate('/login');
      return;
    }else{
      setLog(a.name);
    }

    if(a){
      setRole(a.role)
    }
   
  },[Log])

  const loginRoute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/login');
  };

  const signOut = () => {
    localStorage.removeItem("user");
  }
  return (
    <div className="bg-slate-900 w-screen h-fit p-2 flex justify-between items-center text-white pos">
      <div className="font-mono text-white text-2xl">
        <h1>MALL MANAGEMENT</h1>
      </div>

      <div className="flex hidden lg:inline-block">
        <button className="hover:bg-white hover:text-black p-2 m-2 font-mono text-xl rounded-lg cursor-pointer" onClick={()=>navigate('/')}>Home</button>
        <button className="hover:bg-white hover:text-black p-2 m-2 font-mono text-xl rounded-lg cursor-pointer" onClick={()=>navigate('/all')}>All</button>
        <button className="hover:bg-white hover:text-black p-2 m-2 font-mono text-xl rounded-lg cursor-pointer" onClick={()=>navigate('/details')}>MyOrder</button>
        {role=='ADMIN'&&<button className="hover:bg-white hover:text-black p-2 m-2 font-mono text-xl rounded-lg cursor-pointer">Admin</button>}
      </div>

        <div className="flex">
          <button className="hover:bg-white hover:text-black p-2 font-mono text-xl mr-3 rounded-lg" onClick={(e: React.MouseEvent<HTMLButtonElement>) => loginRoute(e)}>{Log==''?<div>Login</div>:<div onClick={signOut}>{Log}</div>}</button>

          <button className="hover:bg-white hover:text-black p-2 font-mono text-xl mr-3 sm:inline-block lg:hidden md:px-6 rounded-lg"onClick={()=>setToogle((prev)=>!prev)}><MdOutlineDensityMedium className='text-white'/></button>

          {
            toggle&&
            <div className='modal bg-slate-800'>
              <div>
                <button className='rounded-lg p-2 text-lg font-medium text-white m-4'>
                  <IoMdClose onClick={()=>setToogle((prev)=>!prev)} className='icon'/>
                </button>
              </div>
              <div>
                <button className="rounded-lg p-2 text-lg font-medium hover:bg-white hover:text-black text-white m-4" onClick={()=>navigate('/')}>Home</button>
              </div> 

              <div>
                <button className="rounded-lg p-2 text-lg font-medium hover:bg-white hover:text-black text-white m-4" onClick={()=>navigate('/all')}>All</button>
              </div>

              <div>
                <button className="rounded-lg p-2 text-lg font-medium hover:bg-white hover:text-black text-white m-4" onClick={()=>navigate('/order')}>MyOrder</button>
              </div>

              <div>
                <button className="rounded-lg p-2 text-lg font-medium hover:bg-white hover:text-black text-white m-4" onClick={()=>navigate('/admin')}>Admin</button>
              </div>


            </div>
          }
        </div>
  </div>
  )
}

export default Navbar
