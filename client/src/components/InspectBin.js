import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import binService from '../services/bins'
import Request from './Request'

const InspectBin = () => {
  const [ binRequests, setBinRequests ] = useState([]);
  const binId = useParams().id;

  useEffect(() => {
    binService
      .getBinRequests(binId)
      .then(requests => {
        setBinRequests(requests);
      })
  }, [])

  return (
    <div>
      {binRequests.map(request => 
          <Request key={request.date} request={request} />
      )}
    </div>
  )
}

export default InspectBin