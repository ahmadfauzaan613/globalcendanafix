import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Template from './components/Catalog/Template'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/1" element={<Template />} />
    </Routes>
  )
}

export default App
