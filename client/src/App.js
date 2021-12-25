import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BinUrl from './components/BinUrl'
import Navbar from './components/Navbar'
import CreateBinButton from './components/CreateBinButton'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/create-bin" element={<BinUrl />} />
        <Route path="/" element= {<CreateBinButton />} />
      </Routes>
    </>  
  )
}

export default App