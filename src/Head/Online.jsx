import React from 'react'
import Scroll from './Scroll.jsx';
import {motion} from "framer-motion";


function Online() {
  return (
     
    
   <div className="grid h-1000 w-full bg-zinc-300 ">

        

         <motion.div 
         initial={{opacity:0, scale:0}}
         whileInView={{opacity:1, scale: 1}}
         transition={{duration: 2}}
         className=" flex h-150  w-full bg-[url('https://www.desktophut.com/images/thumb_1652617730_479702.jpg')] bg-no-repeat  bg-cover bg-center my-11">
          
          <div className="h-150 w-111 my-20 "> 
            

           <h1 className="text-center text-3xl my-10 font-semibold text-amber-400"></h1>
           <p className="text-white text-center "></p>
           <br />
           <br />
           <div className="text-center bg-red-900 h-8 w-30 text-white mx-40 my-30"></div>
          </div>
          <div className="h-150 w-200 "></div>
      
          <div className="h-150 w-27 "> </div> 
  

      
            
    
         </motion.div>
    
     


        
      
         <div className= "h-120 w-full bg-yellow-300 ">
        
           
             <Scroll />
        

         </div>
       
         
         <motion.div
            initial={{opacity:0, translateX: "-100%"}}
            whileInView={{opacity:1, translateX: 0}}
            viewport={{once: true}}
            transition={{duration: 2}}
           className="grid h-110 w-full">
            <div className=" flex h-80  w-full  gap-4 px-10">
            <div className="h-60 w-60"><img className="cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 " src='https://cdn.lookastic.com/looks/overcoat-turtleneck-chinos-large-108268.jpg' /></div>
            < div className="h-60 w-60"><img className="cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 " src=" https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2024/DECEMBER/31/VeZU76mB_e8ecfe223a2b4a62bf4340b56d8c4fb9.jpg" /></div>
            <div className="h-60 w-60"><img className=" transform transition-transform duration-700 hover:scale-110" src="https://i.pinimg.com/736x/aa/e0/fc/aae0fc8644b95a76a6d52a9e8c771e7b.jpg" /></div>
            <div className="h-60 w-60"><img className=" cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 " src="https://i.pinimg.com/736x/fd/c6/ea/fdc6ea67ec6b319bd339e9e770f33432.jpg" /></div>
            <div className="h-60 w-60"><img className=" cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 " src="https://i.pinimg.com/236x/7f/a0/d8/7fa0d8dcf8a3b3b482bf00de193252c9.jpg" /></div>
            </div>
         <div className="w-full "><h1 className='text-center font-semibold text-4xl text-yellow-900 '><u><i>MEN COLLECTION</i></u></h1></div>
         </motion.div>
       
         <motion.div
           initial={{opacity:0, translateX: "-100%"}}
           whileInView={{opacity:1, translateX: 0}}
           viewport={{once: true}}
           transition={{duration: 2}}
         
         
           className="h-240  w-full ">
           <div><img className="h-100 w-200 px-10 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jbsQ5ccYsDOGj5OZRdo-hRu0Z7oXjfAFkg&s" /></div>
          <div className="flex h-80  w-full  w-30 gap-4 px-10 py-20">
            <div className="h-40 w-50  "><img className='h-50 rounded-xl' src="https://lh3.googleusercontent.com/PwnSEJ2nxk_ZL2EqwKGE8imatOrWMycLmUNQYV0LIKa4_j_4Cx60TSN8xrJ1uowliytjl2w9RHGxdq7pQyq1KpHBMK8wJdniU6S90qPFCQsrXhMwrw=w0-rwa-e366-v1" /></div>
            <div className="h-40 w-50  "><img className='h-50 rounded-xl' src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?cs=srgb&dl=pexels-jessbaileydesign-788946.jpg&fm=jpg" /></div>
            <div className="h-40 w-50 "><img className='h-50 rounded-xl' src="https://media.wired.com/photos/65af0355a73d6dedff595b7d/master/pass/Gear-OnePlus-12-SOURCE-Julian-Chokkattu.jpg" /></div>
            <div className="h-40 w-50 "><img className='h-50 rounded-xl' src="https://images.financialexpressdigital.com/2024/09/iphone16-main.jpg?w=374" /></div>
            <div className="h-40 w-50 "><img className='h-50 rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbbH4eomAkCTW4QiOm5dOClhZqxGhvABI-Q&s" /></div>
            <div className="h-40 w-50 "><img className='h-50 rounded-xl' src="https://cdn.dxomark.com/wp-content/uploads/medias/post-64146/DXOMARk-iphone-12-pro-max-1-1024x768.jpg" /></div>
          </div>
          <div className=' flex h-60 px-10 gap-4'>
            <div className="h-50 w-50  text-center"><button className='text-semibold'><u>Motorla</u> <br /><p className="text-teal-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, obcaecati.</p></button></div>
            <div className="h-50 w-50 text-center"><button className='text-semibold '>Iphone User <br /><p className="text-yellow-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, obcaecati.</p></button></div>
            <div className="h-50 w-50 text-center"><button className='text-semibold '>One Plus <br /><p className="text-cyan-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, obcaecati.</p></button></div>
            <div className="h-50 w-50 text-center"><button className='text-semibold '>Samsung <br /><p className="text-red-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, obcaecati.</p></button></div>
            <div className="h-50 w-50 text-center"><button className='text-semibold '>Google Pixel <br /><p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, obcaecati.</p></button></div>
            <div className="h-50 w-50 text-center"><button className='text-semibold '>Oppo <br /><p className="text-amber-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, obcaecati.</p></button></div>
          </div>
         </motion.div>
        
         
         <motion.div
           initial={{opacity:0, rotateX: "90deg"}}
           whileInView={{opacity:1, rotateX: 0}}
           transition={{duration: 2}}
           className="flex h-150 w-full grig-cols gap-10 px-10 py-15">
          <div className="grid h-130 w-90">
           <img src="https://www.littlesweetbaker.com/wp-content/uploads/2020/02/chocolate-cupcakes-1.jpg"/>
          </div>
           <div class="relative w-90 h-130">
           <img src="https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?semt=ais_hybrid&w=740&q=80" class="absolute top-0 left-0 w-90 h-110 object-cover z-10" />

             <img src="https://recipesblob.oetker.in/assets/c8f69e58cfc5442e856f28d1f197de4f/1272x764/maharaja-burger.webp" class="relative top-20 left-50 w-90 h-110 object-cover z-20" />
            </div>

            <div class="grid grid-cols-3 gap-8">
           <div class="relative hover:z-20 hover:scale-140 transition h-7 w-20 bg-yellow-400 text-white text-semibold text-center">Buy Now</div>
           <div class="relative hover:z-20 hover:scale-125 transition h-7 w-20 bg-lime-500 text-white text-semibold text-center">Card 2</div>
           <div class="relative hover:z-20 hover:scale-120 transition h-7 w-20 bg-teal-500 text-white text-semibold text-center">Card 3</div>
         </div>

        
         </motion.div>
         
        
         <div className=" flex h-79 w-full px-20 gap-4 py-4">
          <div className="h-70 w-70 bg-yellow-400 rounded-xl">
            <h1 className="text-center text-cyan-800"><u>Home</u></h1>
            <br />
            <p className="text-center">Blog</p>
            <p className="text-center">Gallery</p>
            <p className="text-center">Features</p>
            <p className="text-center">Privacy</p>
          </div>
          <div className="h-70 w-70 bg-teal-500 rounded-xl">
            <h1 className="text-center text-cyan-800"><u>Services</u></h1>
            <br />
            <h1 className="text-center">Features </h1>
            <h1 className="text-center">Docs </h1>
            <h1 className="text-center ">Agency</h1>
          </div>
          <div className="h-70 w-70 bg-pink-100 rounded-xl">
            <h1 className="text-center text-cyan-800"><u>About Us</u></h1>
            <br />
            <p className="text-center">EMAIL.COM</p>
            <p className="text-center">3-1/9 nhddg melborn NEW YORK</p>
            <p className="text-center">Online</p>
          </div>
          <div className="h-70 w-70 bg-cyan-400 rounded-xl">
            <h1 className="text-center text-cyan-800"><u>Contact Us</u></h1>
            <br />
            <p className="text-center">Testing Working Robots at the canadian Agency</p>
            <p className="text-center"> Jan 15, 2022</p>
            <p className="text-center">how yo start a new bussiness with limited Budget</p>
          </div>
         </div>
        
  
    
    </div>
  )
}

export default Online;