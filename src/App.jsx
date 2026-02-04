import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'
import Navbar from './Head/Navbar.jsx';
import Men from './Head/Men.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Women from './Head/Women.jsx';
import Mobiles from './Head/Mobiles.jsx';
import Shoes from './Shoes.jsx';
import Sign from './Sign.jsx';
import Online from './Head/Online.jsx';
import Cart from './Head/Cart.jsx';
import Search from './Head/Search.jsx';


function App() {
  

  return (
    <>
    
    <BrowserRouter>
  
    
    
      
        <Navbar />
        
        <Routes >
      
          <Route path="/online" element={<Online />} />
        
        

          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sign" element={<Sign />} />
        

        </Routes>
        
      
      </BrowserRouter>
    </>
  );
}

export default App;
