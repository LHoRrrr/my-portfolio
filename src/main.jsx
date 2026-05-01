import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index  element={<Home></Home>}></Route>
      <Route  path='/home' element={<Home></Home>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  </BrowserRouter>,
)
