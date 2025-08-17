import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import Navbar from "./navbar";
import Home from "./home";
import Simulation from "./simulation";
import './index.css'

export default function App() {
  return (
    <div className="bg-green-800 rounded-lg shadow-lg w-auto flex flex-col">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Simulation' element={<Simulation/>}></Route>
      </Routes>
    </div>
  );
}