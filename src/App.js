import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import LoginRegister from "./pages/LoginRegister";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/404";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import "./App.css";
import Blog from "./pages/blog";
import CheckContext from "./utils/CheckOutContext";
import CheckOut from "./pages/CheckOut";
export default function App() {
  const [TotalPrice,setTotalPrice]=useState(0)
  const handlePrice=(e)=>{
    setTotalPrice(e)
  }
  const { token } = useSelector((state) => state.auth);
    return (
    <>
    <CheckContext.Provider value={{TotalPrice,handlePrice}} >
      <Navbar />{" "}
      <Box
        sx={{
          height: "max-content",
        }}
        marginTop={10}
      >
        <Routes>
          {" "}
          <Route element={<Home />} path="/" exact />
          <Route element={<Products />} path="/products/categories/:id/:name" />
          <Route
            element={<ProductDetails />}
            path="/product-details/:id/:name"
          />
          <Route element={token?<Navigate to={'/'} />:<LoginRegister/>} path="/login-register" />
          <Route element={<Category />} path="/category" />
          <Route path="/cart"  element={token?<Cart/>:<Navigate to={'/login-register'}/>}/>
          <Route element={<Blog />} path="/blog" />
          <Route element={<PageNotFound />} path="*" />
          <Route path="/check-out" element={token?<CheckOut />:<Navigate to={'/login-register'}/>} />
        </Routes>{" "}
      </Box>
      <Footer />
      </CheckContext.Provider>
    </>
  );
}
