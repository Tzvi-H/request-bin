import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="p-4 bg-slate-200">
        <Link to="/">
          <img className="inline-block" src="logo.png" alt="logo" height="38" width="44"/>
          <h1 className="inline-block ml-6 text-xl">Request-Bin</h1>
        </Link>
    </header>
  )
}

export default Navbar