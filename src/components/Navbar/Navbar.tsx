import React from 'react'
import { MdOutlineDensityMedium } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
// import {motion} from 'framer-motion'
import {IoMdClose} from 'react-icons/io'

function Navbar() {
  return (
    <div className="bg-slate-900 w-screen h-fit p-2 flex justify-between items-center text-white fixed absolute">
      <div className="font-mono text-white text-2xl">
        <h1>MALL MANAGEMENT</h1>
      </div>

      <div className="flex">
        <button className="hover:bg-white hover:text-black p-2 m-2 font-mono text-xl rounded-lg">Home</button>
        <button className="hover:bg-white hover:text-black p-2 m-2 font-mono text-xl rounded-lg">All</button>
        <button className="hover:bg-white hover:text-black p-2 m-2 font-mono text-xl rounded-lg">Order-1</button>
        <button className="hover:bg-white hover:text-black p-2 m-2 font-mono text-xl rounded-lg">Admin</button>
      </div>

      <div className="flex">
        <button className="hover:bg-white hover:text-black p-2 font-mono text-xl">Login</button>
      </div>
  </div>
  )
}

export default Navbar
