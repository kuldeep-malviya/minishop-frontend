import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"


import Home from './pages/Home'
import Carts from './pages/Carts'
import About from './pages/About'
import Contact from './pages/Contact'
import Navigation from './component/Navigation'
import Admin from './adminpanel/Admin'
import ProductContextProvider from './store/productStore'
import ProductDetails from './pages/ProductDetails'
import Footer from './component/Footer'
const App = () => {
  return (
    <BrowserRouter>

    <Navigation/>
   <ProductContextProvider>
      <Routes>
      <Route path={"/"} element={<Home/>} ></Route>
      <Route path={"/carts"} element={<Carts/>} ></Route>
      <Route path={"/about"} element={<About/>} ></Route>
      <Route path={"/contact"} element={<Contact/>}></Route>
     <Route path={"/admin"} element={<Admin/>} />
     <Route path={"/details/:id"} element={<ProductDetails/>} />
     </Routes>

    </ProductContextProvider>
    <Footer/>
    </BrowserRouter>
  )
}

export default App