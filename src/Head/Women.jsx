import React from 'react'
import {motion} from "framer-motion";


function Women() {
  return (
    <div>
    <motion.div
    initial={{opacity:0, rotateX: "90deg"}}
    whileInView={{opacity:1, rotateX: 0}}
    transition={{duration: 2}}
    
    
    
    className="grid grid-cols-2 sm:grid-cols-3 my-20 gap-5 py-10  px-40 h-250 w-full ">
      <div className="grid h-60 w-60">
        <img src="https://i.pinimg.com/736x/c2/95/a9/c295a90f9d7996734d7fcdd1d64f4a3e.jpg" />
      </div>
      <div className="grid h-60 w-60 ">
        <img src="https://i.pinimg.com/1200x/7d/c1/b8/7dc1b85ba1b58f4ba727a7cef66d7a8b.jpg" />
      </div>
      <div className="grid h-60 w-60  ">
       <img src="https://i.pinimg.com/474x/01/31/0f/01310f36211057af0d7101bbe57ea794.jpg" />
      </div>
      <div className="grid h-60 w-60 ">
      <img src="https://i.pinimg.com/236x/01/85/0f/01850fd0a2ff958a1762a50d061d00e6.jpg" />
      </div>
      <div className="grid h-60 w-60  ">
      <img src="https://i.pinimg.com/474x/b3/d6/53/b3d65331f34891d6a7ff5c5cc266e808.jpg" />
      </div>
      <div className="grid h-60 w-60   ">
      <img className='h-90 w-60' src="https://i.pinimg.com/474x/14/9a/bb/149abbf73cdf6b4a42ab3d3d43c78343.jpg" />
      </div>

    </motion.div>
    </div>
  )
}

export default Women;