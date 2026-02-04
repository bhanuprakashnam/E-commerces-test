import React from 'react';
import {motion} from "framer-motion"


function Search() {
  return (
    <motion.div 
     initial={{ x: -200, opacity: 0 }}
     animate={{ x: 0, opacity: 1 }}
     transition={{ duration: 1, ease: "linear" }}
    
    
    className=" grid h-120 w-full  ">


      <div className="h-10 w-150  bg-teal-500  rounded-3xl  text-center my-20 mx-100"><input className='text-black w-146 rounded-3xl bg-white my-2 text-center' type="text" placeholder="search anything here........."  /></div>
      <div className='h-104 w-200  mx-80 py-10'>
        <p className="text-center">A bundle of question u can ask here and text here .im here to help you........!</p>
        <br/>
        <p className="text-center">Type here or text here  amet consectetur adipisicing elit. Sequi, placeat!</p>
        <br/>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, placeat!</p>
        <br/>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, placeat!</p>
        <br/>
      </div>
      

    </motion.div>
  )
}

export default Search;