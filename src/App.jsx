import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import Navbar from "./navbar";
import Home from "./home";
import Simulation from "./simulation";
import Footer from "./footer";
import './index.css'

export default function App() {
  return (
    <div className="bg-slate-900 shadow-lg w-screen h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Simulation' element={<Simulation/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}