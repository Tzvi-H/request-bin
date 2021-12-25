import React from 'react'
import { Link } from 'react-router-dom'

const CreateBinButton = () => {

  return (
    <div className="text-center">
      <h1 className="w-96 text-center font-bold my-16 mx-auto p-4 text-3xl bg-red-500 text-white">Inspect HTTP Requests</h1>
      <p className="w-2/3 mx-auto my-12">RequestBin gives you a URL that will collect requests made to it and let you inspect them in a human-friendly way.<br/>
Use RequestBin to see what your HTTP client is sending or to inspect and debug webhook requests.</p>
      <Link to="/create-bin" className="bg-green-400 p-4 ml-44% rounded-md" >Create a RequestBin</Link>
    </div>
  )
}

export default CreateBinButton