import React from 'react';

const Request = ({ request }) => {
  const date = new Date(request.date).toLocaleString()

  return (
    <div className="m-8 border-solid border border-gray-100">
      <div className="flex justify-between p-8 bg-gray-100" >
        <div><b>{request.method}</b> {request.url}</div>
        <div>{date}</div>
        <div>{request.body.length - 2} bytes</div>
        <div>From Ip {request.ip}</div>
      </div>
      <div className="p-8">
        <h1 className="text-gray-400 font-bold text-lg pb-2">Headers</h1>
        {Object.entries(request.headers).map(([key, value]) => (
          <p className="text-sm" key={`${key}${value}`}>
            <b>{key}</b> {value}
          </p>
        ))}
      </div>
      {
        request.body.length > 2 &&
        <div className="p-8">
          <h1 className="text-gray-400 font-bold text-lg pb-2">Raw Body</h1>
          <div>
            {request.body}
          </div>
        </div>
      }
    </div>
  )
}

export default Request