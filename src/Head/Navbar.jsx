import React from 'react'

function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between h-12   border-b-3  rounded-b-xl text-center text-black'>
    

            <div className=" flex flex-1 mx-10 my-2 "><a href="/online">Online</a></div>
                        <div className="inline-flex gap-7 my-2 flex-2 font-semibold">
                          <a href='/men'><h2>Men</h2></a>
                          <a href='/women'><h2>women</h2></a>
                          <a href='/mobiles'><h2>mobiles</h2></a>
                          <a href='/shoes'><h2>Shoes</h2></a>


                          </div>




                       <div className="flex-1 my-2    "><a href="/search"><input className='  rounded-xl  border-slate-200 text-center text-yellow-900' type="text" placeholder='Search ......' /></a></div>
                        <div className="flex-1 my-2 list-none gap-row-6 font-semibold ">
                         <a href="/cart">Cart</a>
                        </div>
                        <div className="flex-1 my-2 "><a href="/sign">Login</a></div>
       

    </div>
  );
}

export default Navbar