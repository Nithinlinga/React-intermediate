import { useState } from 'react'
import './App.css'
import Register from './Register'
import { Route, Routes } from 'react-router-dom'


function App() {
  return(
    <>
    <Routes>
      <Route path='/' element={<div>Hello</div>}/>
      <Route path='register' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
