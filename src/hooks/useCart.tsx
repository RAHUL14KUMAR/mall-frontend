import {createContext,useCallback,useContext,useState} from 'react'
import { useEffect } from 'react';

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
}

interface props{
    [propName:string]:any
}

export const CartContext= createContext<CartContextType|null>(null);

export const CartContextProvider=(props:props)=>{
    const[cartTotalQty,setCartTotalQty]=useState(0);
    const[cartProducts,setCartProducts]=useState<cartProductType[]|null>(null);
    const[cartTotalAmount,setCartTotalAmount]=useState(0)

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

            setCartTotalQty(cartTotalQty+1)
            setCartTotalAmount(total)
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

    const value={cartTotalQty,cartTotalAmount,cartProducts,handleAddProductToCart,handleRemoveProductFromCart,handleClearCart};

    return <CartContext.Provider value={value} {...props}/>
}

export  const useCart=()=>{
    const context=useContext(CartContext)

    if(context===null){
        throw new Error("use cart must be used within cartcontext provider")
    }
    return context
}