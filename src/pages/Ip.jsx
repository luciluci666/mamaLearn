import React, { useState } from 'react'
import { getMyIp } from '../api/myIp';

const Ip = () => {
    const [ip, setIp] = useState('');

    const getIp = () => {
      getMyIp().then(data =>{
        setIp(data.ip);
      } );
    }
  return (
    <div className="App">
    <div>{ip}</div>
    <button onClick={getIp}>Get my ip</button>
  </div>
  )
}

export default Ip