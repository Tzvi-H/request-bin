import React, { useState, useEffect } from 'react'
import binService from '../services/bins'

const BinUrl = () => {
  const [ url, setUrl ] = useState('');

  useEffect(() => {
    binService
      .create()
      .then(returnedBin => {
        setUrl(returnedBin.url);
      })
  }, [])

  return (
    <>
      <div className="w-2/3 mx-auto text-center my-16">
        <p className="text-lg font-bold">Bin Url</p>
        <p className="mb-6 text-3xl border-solid border-2 border-gray-400">{url}</p>

        <p className="text-lg font-bold">Inspect Bin</p>
        <p className="mb-6 text-3xl border-solid border-2 border-gray-400">{`${url}/inspect`}</p>
      </div>
      <hr className="w-5/6 mx-auto"/>

      <div className="ml-64 mt-8">
        <h4 className="font-bold text-lg mb-2">Make a request to get started.</h4>

        <h5 className="font-bold my-3">cURL</h5>
        <p className="my-3 border-solid border border-neutral-300 bg-neutral-100 p-2 w-3/4">curl -X POST -d "fizz=buzz" {url}</p>

        <h5 className="my-3 font-bold">PowerShell</h5>
        <p className="my-3 border-solid border border-neutral-300 bg-neutral-100 p-2 w-3/4">powershell -NoLogo -Command "(New-Object System.Net.WebClient).DownloadFile('{url}', 'C:\Windows\Temp\dlp744gr.txt')"</p>

        <h5  className="my-3 font-bold">Python (with Requests)</h5>
        <p className="whitespace-pre-line my-3 border-solid border border-neutral-300 bg-neutral-100 p-2 w-3/4">
          import requests, time{"\n"}
          r = requests.post('{url}', data=\&#123;"ts":time.time()&#125;){"\n"}
          print r.status_code{"\n"}
          print r.content{"\n"}
        </p>

        <h5  className="my-3 font-bold">Node.js (with request)</h5>
        <p className="whitespace-pre-line my-3 border-solid border border-neutral-300 bg-neutral-100 p-2 w-3/4">
          var request = require('request');{"\n"}
          var url ='{url}'{"\n"}
          request(url, function (error, response, body) &#123;{"\n"}
            if (!error) &#123;{"\n"}
              console.log(body);{"\n"}
            &#125;{"\n"}
          &#125;);{"\n"}
        </p>

      <h5  className="my-3 font-bold">Ruby</h5>
      <p className="whitespace-pre-line my-3 border-solid border border-neutral-300 bg-neutral-100 p-2 w-3/4">
        require 'open-uri'{"\n"}
        result = open('{url}'){"\n"}
        result.lines &#123; |f| f.each_line &#123;|line| p line&#125; &#125;
      </p>

      <h5  className="my-3 font-bold">C# / .NET</h5>
      <p className="whitespace-pre-line my-3 border-solid border border-neutral-300 bg-neutral-100 p-2 w-3/4">
      using System;{"\n"}
      using System.Net.Http;{"\n"}
      using System.Threading.Tasks;{"\n"}
      {"\n"}
      namespace RequestBinExample{"\n"}
      &#123;{"\n"}
        class Program{"\n"}
        &#123;{"\n"}
          static void Main(string[] args){"\n"}
          &#123;{"\n"}
            MakeRequest();{"\n"}
          &#125;{"\n"}
          {"\n"}
          private static async Task MakeRequest(){"\n"}
          &#123;{"\n"}
            var httpClient = new HttpClient();{"\n"}
            var response = await httpClient.GetAsync(new Uri("{url}"));{"\n"}
            var body = await response.Content.ReadAsStringAsync();{"\n"}
            Console.WriteLine(body);{"\n"}
          &#125;{"\n"}
        &#125;{"\n"}
      &#125;{"\n"}
</p>

      <h5  className="my-3 font-bold">Java</h5>
      <p className="whitespace-pre my-3 border-solid border border-neutral-300 bg-neutral-100 p-2 w-3/4">
      import org.apache.commons.httpclient.*;{"\n"}
      import org.apache.commons.httpclient.methods.*;{"\n"}
      import org.apache.commons.httpclient.params.HttpMethodParams;{"\n"}
      {"\n"}
      import java.io.*;{"\n"}
      {"\n"}
      public class RequestBinTutorial &#123;{"\n"}
        public static void main(String[] args) &#123;{"\n"}
          HttpClient client = new HttpClient();{"\n"}
          GetMethod method = new GetMethod("{url}");{"\n"}
          try &#123;{"\n"}
            int statusCode = client.executeMethod(method);{"\n"}
            byte[] responseBody = method.getResponseBody();{"\n"}
            System.out.println(new String(responseBody));{"\n"}
          &#125; catch (Exception e) &#123;{"\n"}&#125;
            System.err.println("Fatal error: " + e.getMessage());{"\n"}
            e.printStackTrace();{"\n"}
          &#125; finally &#123;{"\n"}
            method.releaseConnection();{"\n"}
          &#125;{"\n"}
        &#125;{"\n"}
      &#125;{"\n"}
    </p>

      <h5  className="my-3 font-bold">PHP</h5>
      <p className="whitespace-pre-wrap my-3 border-solid border border-neutral-300 bg-neutral-100 p-2 w-3/4">
        &lt;?php{"\n"}
        $result = file_get_contents('{url}');{"\n"}
        echo $result;{"\n"}
        ?&gt;{"\n"}
      </p>
      </div>
    </>
  )
}

export default BinUrl


{/* 

      <h5  className="my-3 font-bold">PowerShell</h5>
      <p></p>

      

        </div>
      </div> */}