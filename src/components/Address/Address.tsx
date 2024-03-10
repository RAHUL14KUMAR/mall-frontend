import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import { BsBox2 } from 'react-icons/bs'
import { MdAreaChart, MdLandscape, MdLocalParking, MdPhone } from 'react-icons/md'
import Footer from '../Footer/Footer'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

function Address() {

    const {addAddress,addr}=useCart()
    const [locality,setLocality]=useState('')
    const [area,setArea]=useState('');
    const [landmark,setLandmark]=useState('')
    const [phone,setPhone]=useState('');

    const navigate=useNavigate();


    const address={
        locality,
        landmark,
        phone,
        area
    }

    const next=(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();

        if(locality==''|| area==''|| landmark==''|| phone==''){
            toast.info("add all the information")
            return;
        }else{
            addAddress(address);
            navigate('/order');
        }
    }
    console.log(addr)

  return (
    <div>
      <Navbar/>

      <div className='flex h-screen w-screen items-center justify-center bg-white mt-[10em] mb-[2em] overflow-hidden'>
        <div className="flex-col rounded-lg bg-white text-center drop-shadow-2xl border-4 border-slate-900">
            <div className="flex-col p-2">
                <div className="mx-auto my-auto flex items-center justify-center h-24 w-24 rounded-full bg-slate-900">
                    <BsBox2 className="text-4xl text-white" />
                </div>
                <h1 className="font-sans font-bold text-slate-900">MY_MALL</h1>
            </div>

            <div className="mb-5 text-2xl font-bold">
                <h1>Dispatch To Address</h1>
                <p className="text-base font-normal text-slate-950">Add Address</p>
            </div>

            <div className="m-2 flex-col">

                <div className="border-r-none m-5 flex rounded-lg white p-3 text-justify">
                    <div className="h-16 w-14 bg-slate-900 flex items-center justify-center">
                        <MdLocalParking className="text-4xl text-white"/>
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-black" htmlFor="locality">Locality</label>
                    <div><input type="text" placeholder="enter your locality" className="mx-2 w-fit bg-white p-2 font-mono text-black placeholder-black focus:outline-none" id="locality" name={locality} value={locality} onChange={(e)=>setLocality(e.target.value)} /></div>
                    </form>
                </div>

                <div className="border-r-none m-5 flex rounded-lg white p-3 text-justify">
                    <div className="h-16 w-14 bg-slate-900 flex items-center justify-center">
                        <MdAreaChart className="text-4xl text-white"/>
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-black" htmlFor="area">Area</label>
                    <div><input type="text" placeholder="enter your area" className="mx-2 w-fit bg-white p-2 font-mono text-black placeholder-black focus:outline-none" id="area" name={area} value={area} onChange={(e)=>setArea(e.target.value)} /></div>
                    </form>
                </div>

                <div className="border-r-none m-5 flex rounded-lg white p-3 text-justify">
                    <div className="h-16 w-14 bg-slate-900 flex items-center justify-center">
                        <MdLandscape className="text-4xl text-white"/>
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-black" htmlFor="landmark">Lamdmark</label>
                    <div><input type="text" placeholder="enter your landmark" className="mx-2 w-fit bg-white p-2 font-mono text-black placeholder-black focus:outline-none" id="landmark" name={landmark} value={landmark} onChange={(e)=>setLandmark(e.target.value)} /></div>
                    </form>
                </div>

                <div className="border-r-none m-5 flex rounded-lg white p-3 text-justify">
                    <div className="h-16 w-14 bg-slate-900 flex items-center justify-center">
                        <MdPhone className="text-4xl text-white"/>
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-black" htmlFor="phone">PhoneNumber</label>
                    <div><input type="text" placeholder="enter your phone" className="mx-2 w-fit bg-white p-2 font-mono text-black placeholder-black focus:outline-none" id="phone" name={phone} value={phone} onChange={(e)=>setPhone(e.target.value)} /></div>
                    </form>
                </div>

                

                <div className="m-3 mb-2">
                    <button className="w-full rounded-lg bg-slate-950 p-3 font-sans text-xl font-medium text-white" onClick={(e)=>next(e)}>NEXT</button>
                </div>
            </div>
        </div>
        
        </div>
        <Footer/>
    </div>
  )
}

export default Address
