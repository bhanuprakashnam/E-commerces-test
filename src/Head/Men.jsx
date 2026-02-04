import React from 'react'
import {motion} from "framer-motion";
import {useState} from "react";

function Men() {
  const[number,setNumber]=useState(0);

  function Incre(){
    setNumber(number+1)

  }
  function Reset(){
    setNumber(0)

  }
function Decre(){
    setNumber(number-1)

  }


  return (
    <motion.div
     initial={{opacity:0, rotateX: "90deg"}}
     whileInView={{opacity:1, rotateX: 0}}
     transition={{duration: 2}}



    className="grid grid-cols-2 sm:grid-cols-3  my-10 gap-3 py-20 px-40 h-240 w-full bg-green-200 ">
      <div className=" grid h-80 w-60  bg-white ">
        <img  className="h-60 w-60" src="https://i.pinimg.com/564x/89/1d/37/891d37e806bf4c1fcfe7b31e8404af85.jpg" />
        <p>{number}</p>
        <button className='bg-black text-white h-5 w-15 text-center' onClick={Incre}>Inre</button>
        <button className='bg-yellow-300 text-white h-5 w-15 text-center' onClick={Reset}>Reset</button>
        <button  className='bg-black text-white h-5 w-15 text-center' onClick={Decre}>Decre</button>
      </div>
      <div className="grid h-60 w-60 ">
        <img src="https://i.pinimg.com/736x/38/cb/f1/38cbf1908e4c6503a165cba29ff49cca.jpg" />
      </div>
      <div className="grid h-60 w-60  ">
       <img src="https://i.pinimg.com/564x/89/1d/37/891d37e806bf4c1fcfe7b31e8404af85.jpg" />
      </div>
      <div className="grid h-60 w-60 ">
      <img src="https://i.pinimg.com/originals/43/a0/0f/43a00f900ccfcc5975c0680535448da5.jpg" />
      </div>
      <div className="grid h-60 w-60  ">
      <img src="https://cdn.lookastic.com/looks/short-sleeve-shirt-chinos-tassel-loafers-large-103847.jpg" />
      </div>
      <div className="grid h-60 w-60   ">
      <img className="h-70 w-60" src="https://i.pinimg.com/564x/a3/23/e1/a323e122001c5605b1ba8613402c3eca.jpg" />
      </div>


    </motion.div>
  )
}

export default Men;