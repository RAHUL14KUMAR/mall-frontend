import {createContext,useCallback,useContext,useState} from 'react'
import { useEffect } from 'react';

type addressType={
    locality:string,
    landmark:string,
    phone:string,
    area:string
}

type cartProductType={
    id: string;
    title: string;
    price: number;
    image: string;
    description: string;
}

type CartContextType = {
    cartTotalQty: number;
    cartProducts: cartProductType[] | null;
    handleAddProductToCart: (product: cartProductType) => void;
    handleRemoveProductFromCart: (product: cartProductType) => void;
    handleClearCart: () => void;
    cartTotalAmount: number;

    addAddress:(address:addressType)=>void;
    addr:addressType | null
}

interface props{
    [propName:string]:any
}

export const CartContext= createContext<CartContextType|null>(null);

export const CartContextProvider=(props:props)=>{
    const[cartTotalQty,setCartTotalQty]=useState(0);
    const[cartProducts,setCartProducts]=useState<cartProductType[]|null>(null);
    const[cartTotalAmount,setCartTotalAmount]=useState(0)

    const [addr,setAddr]=useState<addressType | null>(null)

    useEffect(()=>{
        const cartItems:any=localStorage.getItem('eshopCartItems')
        const cProducts:cartProductType[]|null=JSON.parse(cartItems);

        setCartProducts(cProducts)
        if(cProducts){
            setCartTotalQty(cProducts.length)
        }
        
        
    },[])

   useEffect(()=>{
    const getTotal=()=>{
        if(cartProducts){
            const {total}=cartProducts?.reduce((acc,item)=>{
    
                acc.total+=item.price;
                return acc;
            },{
                total:0,  
                
            })
            setCartTotalAmount(total)
            setCartTotalQty(cartTotalQty+1)
        }
    }
    getTotal();

   },[cartProducts])

    const handleAddProductToCart=useCallback((product:cartProductType)=>{
        setCartProducts((prev)=>{
            let updatedCart;
            if(prev){
                updatedCart=[...prev,product];
            }else{
                updatedCart=[product];
            }
            localStorage.setItem('eshopCartItems',JSON.stringify(updatedCart))
            return updatedCart;
        })
    },[])

    const addAddress=useCallback((address:addressType)=>{
        setAddr((prev)=>{
            let update;
            if(prev){
                update=address
            }else{
                update=address
            }
            return update
        })
    },[])

    const handleRemoveProductFromCart=useCallback((product:cartProductType)=>{
        if(cartProducts){
            const filter=cartProducts.filter((item)=>{
                return item.id!== product.id
            })
            setCartProducts(filter);
            localStorage.setItem("eshopCartItems",JSON.stringify(filter))
        }
    },[cartProducts])

 
    const handleClearCart=useCallback(()=>{
        let updatedCart;
        setCartProducts(null)
        setCartTotalQty(0)
        localStorage.setItem("eshopCartItems",JSON.stringify(null))
    },[cartProducts])

    const value={cartTotalQty,cartTotalAmount,cartProducts,handleAddProductToCart,handleRemoveProductFromCart,handleClearCart,addAddress,addr}

    return <CartContext.Provider value={value} {...props}/>
}

export  const useCart=()=>{
    const context=useContext(CartContext)

    if(context===null){
        throw new Error("use cart must be used within cartcontext provider")
    }
    return context
}