import React from 'react'

function Sign() {
  return (
    <div className='h-200 w-full bg-black'>
    <div className="flex h-200  w-atuo mx-70 my-12">
     <div className="flex flex-col h-190 w-150 bg-yellow-400 justify-center font-semibold ">  
           <h2 className="text-center"><u><i>APPLICATION FORM</i></u></h2>
           <br />
        <label className='text-center' for="name">FULL NAME</label>
        <input className='text-center w-60 text-red-900 bg-white w-40 mx-47' type="text" id="name" placeholder="Enter your surname" required autofocus="on" />
        <br />
        <br />
        <label className='text-center' for="mail">EMAIL-ID</label>
        <input className='text-center bg-white w-60 mx-47' type="text " id="mail" placeholder=" Enter your @email-id" required autofocus="on" /><br /><br />
        <label className='text-center' for="pass">PASSWORD</label>
        <input className='text-center w-60  bg-white mx-47' type="text" id="pass" placeholder=" Enter your character" required autofocus="on" /><br /><br />
        <label className='text-center' for="num">PHONE NUMBER</label>
        <input className='text-center bg-white w-60 mx-47' type="text" id="num" placeholder=" Enter your num" required autofocus="on" /><br /><br />
        <label className='text-center mx-35 w-80 bg-white' for="name">Gender</label>
        <br />
        <br />
        <label className='text-center mx-55' for="age">Age</label>
        <input className='text-center mx-55  w-50 border-xl-800 bg-white' type="date" required mandatory /><br />
        <br />
        <br />
        <button className='w-30 h-10 bg-black text-white mx-62'>SUBMIT</button>
        <br />
     </div>
        
    </div>
    </div>
  )
}

export default Sign;