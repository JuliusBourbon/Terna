import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./navbar";
import Home from "./home";
import './index.css'

export default function App() {
  return (
    <div className="bg-green-800 rounded-lg shadow-lg w-7xl h-7xl flex flex-col">
      <Navbar />
      <Home />
    </div>
  );
}