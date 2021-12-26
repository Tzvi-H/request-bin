import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Request from './Request'

const InspectBin = () => {
  const [ binRequests, setBinRequests ] = useState([]);
  const [ listening, setListening ] = useState(false);

  const binId = useParams().id;

  useEffect(() => {
    if (!listening) {
      const events = new EventSource(`http://localhost:3001/api/bins/${binId}/inspect`);

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        setBinRequests((binRequests) => binRequests.concat(parsedData));
      };

      setListening(true);
    }
  }, [binRequests, listening, binId])

  return (
    <div>
      {binRequests.reverse().map(request => 
          <Request key={request.date} request={request} />
      )}
    </div>
  )
}

export default InspectBin