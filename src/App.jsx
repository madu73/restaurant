import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import Pagenotfound from './Pages/Pagenotfound';



function App() {
   return (
    <div>
         
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="*" element={<Pagenotfound/>} />
          
          </Routes>
         </div>
          )
         };

export default App
