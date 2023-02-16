import axios from "axios"
import * as select from "./select";
import React, { useState } from "react";
import { Table } from "./table";
import './main.scss'
import { bodyRequest } from "./utils";

export const Main = () => {
  const [info, setInfo] = useState([])
  const [rpc, setRpc] = useState('registerByMonthRpc')

  const executeQuery = () => {
    const url = `http://127.0.0.1:7350/v2/rpc/${rpc}?http_key=lovemonster&unwrap`
    axios
      .post(url, bodyRequest(rpc))
      .then((response) => {
        const {data} = response
        setInfo(data)
      })
  }
  
  return (
    <div>
      <div className="container">
        <select.default setPath={setRpc}/>
        <button onClick={(() => executeQuery())}>SUBMIT</button>
        <div className='table-container'>
          {info.length ? Table(info) : ''}
        </div>
      </div>
    </div>
  )
}
