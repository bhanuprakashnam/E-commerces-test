import React from 'react'
import {motion} from "framer-motion";

function Shoes() {
  return (
    <motion.div 
    
    animate={{ rotate: 360 }}
    transition={{ repeat: 1, duration: 0.3, ease: "linear" }}
    
    className='grid grid-cols-2 sm:grid-cols-3 h-300 w-full bg-purple-100 gap-5 px-15 py-7 my-20 '>
    <div className="h-80 w-90 bg-lime-100">
     <img className="h-80 w-90" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyMU9QUiI8ZJX3YLh4aNFSKyI0fcUUJkgzNQ&s" />
    </div>
    <div className="h-80 w-90 bg-lime-100">
           <img className="h-80 w-90" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BNYZL_okpNvUlgn0ffqpAk8uprgumy9PzWYZybhwn3lRFmU0_vsWqzP8lyE7mg1CvJw&usqp=CAU" />
    </div>
    <div className="h-80 w-90 bg-lime-100">
          <img className="h-80 w-90"  src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCw3apfLIhbiiP0K2_Ebdc5KQ8h8aTsdinR9n2xsVA5k8lof04XrTe-NOuonWLfIpve_4&usqp=CAU" />
    </div>
    <div className="h-80 w-90 bg-lime-100">
        <img className="h-80 w-90" src ="https://www.superkicks.in/cdn/shop/files/2_c3484c23-6f9e-45b7-9fb6-d6ad6f7396a8.jpg?v=1695808831&width=1946" />

    </div>
    <div className="h-80 w-90 bg-lime-100">
          <img className="h-80 w-90" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQuKdvV2MpQMNqXoWIRuObalwvWuKgkzvLu0PNed1bQn_fW7WODemxXL1WzgyvKlmD-qM&usqp=CAU" />
    </div>
    <div className="h-80 w-90 bg-lime-100">
          <img className="h-80 w-90" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8-SNUwNWN1xQk2YjBkMNMr76cHJQVYKXgImjJONHnXGlSb1ETo2qngWJKX2NpxeZjEM&usqp=CAU" />
    </div>
    <div className="h-80 w-90 bg-lime-100">

         <img  className="h-80 w-90" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh1ZTLxqMTw4qpg1Jw-mEV5_1U_tp9YcMrLw&s" />
    </div>
    <div className="h-80 w-90 bg-lime-100">
            <img className="h-80 w-90" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wsx_w5qb1u71Q25DnFu_PK-0RCBGp1nBxQ&s" />
    </div>
    <div className="h-80 w-90 bg-lime-100">
            <img className="h-80 w-90" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQd8xhs2yTdMnSI5OmOn6nzxod5QglLDXAUgDFOgkFRYVYfJpT3tBvyHpdPwC2Iu18ijE&usqp=CAU" />
    </div>



    </motion.div>
  )
}

export default Shoes