import React,{useEffect,useState} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import axios from 'axios';
import Carting from '../Cart';
import { useCart } from '../../hooks/useCart';

let data = JSON.stringify({
    query: `query GetAllToys {
        getAllToy {
            title
            price
            image
            id
            description
        }
    }`,
    variables: {}
});

let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:4000/graphql',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
};

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

interface item{
    id:string
    title:string
    price:number
    image:string
    description:string
}


function ToyCart() {

    const[item,setItem]=useState([]);
    const {handleAddProductToCart}=useCart();

    useEffect(()=>{
         getAll()
    },[])

    async function getAll(){
        const res=await axios.request(config);
        setItem(res.data.data.getAllToy)
    }

  return (
    <div>
        <h1 className='text-white text-center bg-slate-900 mt-5 p-4 text-2xl font-mono'>TOY STORES</h1>

        <Carousel swipeable={false} infinite={true}
        draggable={false} showDots={false} autoPlay={true}
        responsive={responsive} autoPlaySpeed={7000}
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container" className='mr-2'>
        {
            item.map((item: item)=>{
                return(
                    <div className='overflow-hidden' key={item.id}>
                        <Carting id={item.id} title={item.title} price={item.price} image={item.image} description={item.description}/>
                    </div>
                )
            })
        }
        </Carousel>  
    </div>
  )
}

export default ToyCart
