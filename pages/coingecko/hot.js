import { useState, useEffect } from 'react';
export default function Hot() {
  const [hotCoin, setHotCoin] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    async function fetchHotCoin() {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const hotCoinData = await res.json();
        setHotCoin(hotCoinData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchHotCoin();
  }, []);

  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  useEffect(() => {
    async function fetchBitcoinPrice() {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const bitcoinPriceData = await res.json();
        setBitcoinPrice(bitcoinPriceData.bitcoin.usd);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBitcoinPrice();
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentDateTime(new Date());
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);
    return (
      <div class="">
          <div class="hero  bg-base-200 bg-gradient-to-r from-violet-500 to-fuchsia-500">
  <div class="hero-content flex-col lg:flex-row ">
    {/* <img src="/images/chatgpt.jpeg" class="max-w-sm rounded-lg shadow-2xl" /> */}
    <div class="mt-14">
      <h1 class="text-5xl font-bold text-white">Hot Data Rank!</h1>
      <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      {/* <button class="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
        <div class="flex justify-center overflow-x-auto">
  <table class="table table-zebra w-5/6 mt-20 mb-20">
    <thead>
      <tr>
        {/* <th>Hot</th> */}
        <th>Symbol</th>
        <th>Price (USD)</th>
        <th>Market Cap Rank</th>
      </tr>
    </thead>
    <tbody>
      {hotCoin.coins?.map((coin) =>(
            <tr key={coin.item.id}>
            {/* <th>{coin.item.id}</th> */}
            <td>{coin.item.symbol}</td>
            <td>{(bitcoinPrice * coin.item.price_btc).toFixed(2)}</td>
            <td>{coin.item.market_cap_rank}</td>
            </tr>
      ))}     
    </tbody>
  </table>
</div>
        
      </div> 
    )
}
