import React from 'react'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/Homepage"
import About from './pages/About/About';
import ProductDetail from './components/ProductCard/ProductDetail';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/product-detail' element={<ProductDetail/>}></Route>
    <Route path='*' element={<p>Not Found</p>}></Route>

    </Routes>
    
    </BrowserRouter>
    
    
    </>
  )
}



export default App;