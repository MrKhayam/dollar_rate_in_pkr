import React, { useCallback, useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('Refresh');
  const runFunc = () => {
    importCurrency('usd');
  }
  const importCurrency = useCallback((currency) => {
    let api = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    fetch(api).then((res) => res.json()).then((res) => setData(res[currency]));
    return data
},[runFunc]) 
    
  return (
    <div className='w-full h-screen flex justify-center items-center bg-zinc-900 text-white'>
      
      <div className="w-96 h-60 rounded-md bg-slate-700 box">
        <h1 className='text-center text-xl font-bold py-3'>Dollar Rate in Pakistan</h1>
        <h1 className='text-4xl text-center py-12'>{data['pkr']} PKR</h1>
        <button onClick={runFunc} className='bg-slate-950 px-10 py-2 m-auto block rounded-md active:border-white border border-slate-950 transition-all'>Refresh</button>
      </div>


    </div>
  );
}

export default App;
