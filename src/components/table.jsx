import React from 'react'
import './table.scss'

export const Table = (payload) => {
  return (
    <table className='content-table'>
      <thead key={"header"}>
        <tr>
          {Object.keys(payload[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {payload.map((item) => (
          <tr key={item}>
            {Object.values(item).map((val) => (
              <td key={val}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
