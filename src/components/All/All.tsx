import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar';
import { get } from 'http';
import Footer from '../Footer/Footer';
import { BsSearch } from 'react-icons/bs';

let Productdata = JSON.stringify({
  query: `query GetAllProduct {
      getAllProduct {
          title
          price
          image
          id
          description
      }
  }`,
  variables: {}
});

let Productconfig = {
  method: 'post',
  maxBodyLength: Infinity,
  url: process.env.REACT_APP_API_URL,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : Productdata
};

let Fashiondata = JSON.stringify({
  query: `query GetAllFashion {
      getAllFashion {
          title
          price
          image
          id
          description
      }
  }`,
  variables: {}
});

let Fashionconfig = {
  method: 'post',
  maxBodyLength: Infinity,
  url: process.env.REACT_APP_API_URL,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : Fashiondata
};

let Toydata = JSON.stringify({
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

let Toyconfig = {
  method: 'post',
  maxBodyLength: Infinity,
  url: process.env.REACT_APP_API_URL,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : Toydata
};

function All() {

  const [array, setArray] = useState<any[]>([]);
  const [array1, setArray1] = useState<any[]>([]);
  const [array2, setArray2] = useState<any[]>([]);
  const [query,setQuery]=useState("");

  useEffect(() => { 
    getProductAll()
    getFashionAll()
    getAllToy()
  }, [])

  async function getProductAll() {
    const res = await axios.request(Productconfig);
    setArray(res.data.data.getAllProduct);
  }

  async function getFashionAll() {
    const res = await axios.request(Fashionconfig);

    setArray1(res.data.data.getAllFashion);
  }

  async function getAllToy() {
    const res = await axios.request(Toyconfig);
    setArray2(res.data.data.getAllToy);
  }

  return (
    <div>
      <Navbar/>

      <div className='flex flex-row-reverse m-2'>
        <input type="text" placeholder="Search" className="w-54 h-12 p-4 rounded-lg border-4 border-slate-950 text-lg font-mono" onChange={(e)=>setQuery(e.target.value)}/>
        <div> <BsSearch className='m-2 font-bold text-black text-3xl'/> </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {array.filter((item)=>{            
          return (query === ''
            ? item
            : item.title.includes(query));
          }).map((item) => {
          return (
            <div key={item.id} className="bg-white p-4 rounded-lg border-4 border-slate-950 flex flex-col items-center justify-center">
              <img src={item.image} alt="product" className="w-40 h-40"/>
              <h1 className="text-black font-mono font-bold tracking-widest text-center">{item.title}</h1>
              <h1 className="text-black font-mono font-bold tracking-widest text-center">{item.price}</h1>

              <p className='text-center font-mono font-bold tracking-widest bg-slate-700 text-white p-4 rounded-sm'>{item.description}</p>

              <button className="bg-slate-800 text-white text-center font-mono p-2 rounded-sm mt-3 w-full h-[3em] cursor-pointer">Add To Cart</button>
            </div>
          )
        })}

        {array1.filter((item)=>{            
          return (query === ''
            ? item
            : item.title.includes(query));
          }).map((item) => {
          return (
            <div key={item.id} className="bg-white p-4 rounded-lg border-4 border-slate-950 flex flex-col items-center justify-center">
              <img src={item.image} alt="product" className="w-40 h-40"/>
              <h1 className="text-black font-mono font-bold tracking-widest text-center">{item.title}</h1>
              <h1 className="text-black font-mono font-bold tracking-widest text-center">{item.price}</h1>

              <p className='text-center font-mono font-bold tracking-widest bg-slate-700 text-white p-4 rounded-sm'>{item.description}</p>

              <button className="bg-slate-800 text-white text-center font-mono p-2 rounded-sm mt-3 w-full h-[3em] cursor-pointer">Add To Cart</button>
            </div>
          )
        })}

        {array2.filter((item)=>{            
          return (query === ''
            ? item
            : item.title.includes(query));
          }).map((item) => {
          return (
            <div key={item.id} className="bg-white p-4 rounded-lg border-4 border-slate-950 flex flex-col items-center justify-center">
              <img src={item.image} alt="product" className="w-40 h-40"/>
              <h1 className="text-black font-mono font-bold tracking-widest text-center">{item.title}</h1>
              <h1 className="text-black font-mono font-bold tracking-widest text-center">{item.price}</h1>

              <p className='text-center font-mono font-bold tracking-widest bg-slate-700 text-white p-4 rounded-sm'>{item.description}</p>

              <button className="bg-slate-800 text-white text-center font-mono p-2 rounded-sm mt-3 w-full h-[3em] cursor-pointer">Add To Cart</button>
            </div>
          )
        })}
      </div>

      <Footer/>
    </div>
  )
}

export default All
