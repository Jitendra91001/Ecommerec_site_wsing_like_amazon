import React from 'react';
import './App.css';
import {Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Layout from './component/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route  index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
   </Routes>
   </>
  );
}

export default App;
