import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './pages/blog_site/Home'
import About from './pages/blog_site/About';
import FormPractice from './pages/blog_site/PracticeForm';
import Error from './pages/blog_site/Error'
function App() {


  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}> </Route>
          <Route path='/contact' element={<FormPractice/>}> </Route>
          <Route path='*' element={<Error/>}> </Route>
          
       </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
