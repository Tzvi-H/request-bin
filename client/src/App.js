import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BinUrl from './components/BinUrl'
import Navbar from './components/Navbar'
import CreateBinButton from './components/CreateBinButton'
import InspectBin from './components/InspectBin'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<CreateBinButton />} />
        <Route path="/create-bin" element={<BinUrl />} />
        <Route path="/inspect/:id" element= {<InspectBin />} />
      </Routes>
    </>  
  )
}

export default App