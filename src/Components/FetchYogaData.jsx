import React from 'react'
import UseFetch from './UseFetch'

export default function FetchYogaData() {
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log (data);
    return (
        <ul>
            <h1>Yoga Data</h1>
            {data && data.map((e) =>(
          <>
          <li className='list_data'>
            <h3>{e.name}</h3>
            <p><strong>Benefits: </strong>{e.benefits6}</p>
            <p><strong>Duration: </strong>{e.time_duration}</p>
            </li>
          </>
        ))}
        </ul>
    )
}
