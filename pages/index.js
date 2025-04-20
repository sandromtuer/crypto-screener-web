
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/mock-data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Crypto Screener (MA20, MA200, RSI, Volume)</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>MA20</th>
            <th>MA200</th>
            <th>RSI</th>
            <th>Volume</th>
            <th>Tendência</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin, idx) => (
            <tr key={idx} style={{ backgroundColor: coin.trend === 'up' ? '#d4fcd4' : coin.trend === 'down' ? '#fcd4d4' : '#f9f9f9' }}>
              <td>{coin.symbol}</td>
              <td>{coin.price}</td>
              <td>{coin.ma20}</td>
              <td>{coin.ma200}</td>
              <td>{coin.rsi}</td>
              <td>{coin.volume}</td>
              <td>{coin.trend === 'up' ? '🔼' : coin.trend === 'down' ? '🔽' : '🔁'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
