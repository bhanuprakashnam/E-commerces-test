import React from 'react';
import {motion} from "framer-motion";

function Mobiles() {
  return (
    
    <motion.div
    initial={{ x: -200, opacity: 0 }}
     animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.4, ease: "easeOut" }}
    


    
    className="grid h-150 w-full ">
     <div className="flex h-80 w-full  px-10 py-28 gap-4 ">
      <div className='h-45 w-59 bg-red-900'>
        <img className='h-45 w-59' src="https://e1.pxfuel.com/desktop-wallpaper/809/841/desktop-wallpaper-the-iphone-12-pro-max-could-be-apple-s-biggest-camera-jump-in-years-thumbnail.jpg" />
      </div>
       <div className='h-45 w-59 bg-red-900'>
         <img className='h-45 w-59' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq24sjL1ULNnnxXY_qnpEC1BnVGZLhly5Qeg&s" />
       </div>
        <div className='h-45 w-59 bg-red-900'>
         <img className='h-45 w-59' src="https://c1.wallpaperflare.com/preview/168/178/436/android-mobile-mobile-phone-screen-saver.jpg" />
        </div>
         <div className='h-45 w-59 bg-red-900'>
          <img  className='h-45 w-59' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehYKiyHvaGVvxNxfiYJD_kp__uKseXby9PA&s" />
         </div>
          <div className='h-45 w-59 bg-red-900'>
           <img className='h-45 w-59' src="https://img.freepik.com/premium-photo/cell-phone-hd-8k-wallpaper-stock-photographic-image_853645-41686.jpg" />
          </div>
     </div>
     <div className="flex h-60 w-full px-45 py-5 gap-4 ">
      <div className='h-50 w-120 '>
        <img className='h-50 w-120' src="https://c4.wallpaperflare.com/wallpaper/535/789/206/new-smartphones-wallpaper-preview.jpg" />
      </div>
      <div className='h-50 w-120 '>
        <img className='h-50 w-120' src="https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg" />
      </div>
     </div>
    </motion.div>
  )
}

export default Mobiles;