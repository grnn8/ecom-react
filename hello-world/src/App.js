import { useState } from "react";
import Subheader from "./components/Layout/Subheader";
import Header from "./components/Layout/header";
import Products from "./components/Products/products";
import { Routes ,Route , Navigate} from 'react-router-dom';
import React, {Fragment} from "react";


const App = () => {


  
  return (
    <div> 
    
    <Header />
    <Subheader/>
    <Routes>
      <Route path="/404" element={<h1>Not Found</h1>}/>
      <Route path="/:category?" element={<Products />}/>
      
      <Route path="/" element={<Navigate to="/404"/>} />
    
       </Routes>
  
    
    </div>
  );
}

export default App;
