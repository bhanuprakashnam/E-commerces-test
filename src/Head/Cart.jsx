import React from 'react'
import {motion} from "framer-motion";


function Cart() {
  return (
  <motion.div 
    animate={{ y: [0, -20, 0] }} 
     transition={{
    repeat: 3,
    duration: 1.4,
    ease: "easeInOut"
     }}
    className=" h-145 w-full bg-black">
    <div className='h-90 w-57 bg-white text-white  mx-234 my-17 text-center '>
      <details className='py-6 '>
        <summary className='text-semibold text-black'>My Profile</summary>
        <summary className='text-small bg-black h-7 w-20 rounded mx-20 my-3'>Details</summary>
        <summary className='text-small bg-black h-7 w-20 rounded mx-20'>Place</summary>
      </details>
      <details className='py-4'>
        <summary className='text-semibold text-black'>Home</summary>
        <summary className='text-small bg-black h-7 w-20 rounded mx-20 my-3'>Location</summary>
        <summary className='text-small bg-black h-7 w-20 rounded mx-20'>Beside</summary>
      </details>
      <details className='py-4'>
        <summary className="text-semibold text-black">Services</summary>
        <summary className='text-small bg-black h-7 w-20 rounded mx-20 my-3'>Data</summary>
        <summary className='text-small bg-black h-7 w-20 rounded mx-20'>Order List</summary>
      </details>
    </div>
    </motion.div>
  )
}

export default Cart