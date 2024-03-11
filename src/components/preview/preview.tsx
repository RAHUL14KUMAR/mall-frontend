import React,{useEffect} from 'react'
import {useCart} from '../../hooks/useCart'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './style.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface USER{
    name:string,
    email:string,
    id:string,
    role:string
}
interface addressType{
    locality:string,
    landmark:string,
    area:string,
    phone:string
}
interface item{
    id:string,
    title:string,
    description:string,
    image:string,
    price:number
}

function Preview() {
    const navigate=useNavigate();
    const {addr,cartProducts,cartTotalAmount}=useCart();
    let length=0;
    const a=JSON.parse(localStorage.getItem("Address") as string);
    const user:USER=JSON.parse(localStorage.getItem("user") as string);

    if(cartProducts){
        length=cartProducts.length;
    }

    function  Pay(e:React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        localStorage.removeItem('eshopCartItems');
        localStorage.removeItem('Address');
        toast.success('order placed successfully');
        navigate('/');
        return;    
    }

    const online=async(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        localStorage.removeItem('eshopCartItems');
        localStorage.removeItem('Address');
        navigate('/');
        return;
    }

    
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col justify-center items-center mt-2'>
        <div className="grid grid-cols sm:grid-cols-1 lg:grid-cols-5 gap-4 p-4 m-2 mt-[5em] md:border-4 md:border-slate-900">
            <div className='w-[12em] h-[10em] border-4 border-slate-900 overflow-hidden p-2'>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/002/934/620/small_2x/salary-payment-isometric-color-illustration-accounting-and-audit-saving-money-revenue-increase-banking-annual-bonus-payout-payday-people-receiving-wage-3d-concept-isolated-on-white-vector.jpg'/>
            </div>
            <div className=''>
                <div className='font-mono font-bold text-black mx-1'>
                <h1 className='text-lg underline'>USER DETAILS</h1>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.role}</p>
                    <p>{user.id}</p>
                </div>
            </div>

            <div className=''>
                <div className='font-mono font-bold text-black mx-1'>
                    <h1 className='text-lg underline'>ADDRESS DETAILS</h1>
                    <p>{a.locality}</p>
                    <p>{a.landmark}</p>
                    <p>{a.area}</p>
                    <p>{a.phone}</p>
                </div>
            </div>

            <div className=' flex flex-col'>
                <div className='font-mono font-bold text-black mx-1'>
                    <h1 className='text-lg underline'>TOTAL AMOUNT</h1>
                    <p>{cartTotalAmount} RS</p>
                    <p className='mb-[3em]'> quantity-{length}</p>
                </div>
            </div>

            <div className=''>
                <div className='font-mono font-bold text-black mx-1'>
                    <h1 className='text-lg underline'>PAYMENT MODES</h1>

                    <button className='bg-slate-800 hover:bg-slate-950 text-white font-mono text-lg p-2 mt-2 w-[10em]' onClick={(e)=>Pay(e)}>cash on delivery</button> 
                    <br/>

                    <button className='bg-slate-800 hover:bg-slate-950 text-white font-mono text-lg p-2 mt-2 w-[10em]' onClick={(e)=>online(e)}>pay online</button> 
                </div>
            </div>
        </div>
        </div>

        <div>
            <div className='text-center text-2xl underline font-mono font-bold tracking-widest'>MY PRODUCTS</div>
        </div>

        <div>
        <div className='grid grid-cols sm:geid-cols-1 md:grid-cols-2 gap-4 mb-[5em]'>
            {cartProducts?.map((item:item)=>{
                return(
                    <div key={item.id}>
                        <div className="flex p-4">
                            <div className='w-[7em] h-full'>
                                <img src={item.image} alt={item.image}/>
                            </div>
                            <div className='h-full
                            w-[28em] border-4 border-slate-900 flex-cols mx-2'>
                                <p className='font-mono text-black tracking-widest font-bold m-2'>{item.title}</p>

                                <p className='font-mono text-black tracking-widest font-bold mx-2'>{item.price} RS</p>

                                
                                <p className='font-mono text-black tracking-widest m-2'>{item.description}</p>
                            </div>
                        </div>
                        
                    </div>
                )
            })}
        </div>

        </div>


        <div className='foot'>
            <Footer/>
        </div>
    </div>
  )
}

export default Preview
