import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './Pages/HomePage/Home';
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Home" element={<Home/>} />
    <Route path="*" element={<div>
      <h1>404 PAGE NOT FOUND</h1>
    </div>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
