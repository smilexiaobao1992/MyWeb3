import { useState, useEffect } from 'react';
export default function Stat() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function fetchCategories() {
          try {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/categories');
            const data = await response.json();
            // Sort the categories based on the market_cap_change_24h property
            data.sort((a, b) => b.market_cap_change_24h - a.market_cap_change_24h);
            setCategories(data);
          } catch (error) {
            console.error(error);
          }
        }

        fetchCategories();
      }, []);

    return (
    <div>
    <div class="hero bg-base-200 bg-gradient-to-r from-sky-500 to-indigo-500">
  <div class="hero-content flex-col lg:flex-row ">
    {/* <img src="/images/chatgpt.jpeg" class="max-w-sm rounded-lg shadow-2xl" /> */}
    <div class="mt-14">
      <h1 class="text-5xl font-bold text-white">Categories Data Rank!</h1>
      <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      {/* <button class="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
 <div class="justify-center overflow-x-auto">
    <table class="table table-zebra w-full mt-20 mb-20">
      <thead>
        <tr>
          <th class="px-4 py-2">Rank</th>
          <th class="px-4 py-2">Name</th>
          {/* <th>market_cap(USD)</th>  */}
          <th class="px-4 py-2">market_cap_change_24h</th>
          <th class="px-4 py-2">volume_24h</th>
          <th class="px-4 py-2">top_3_coins</th>
          <th class="px-4 py-2">updated_at</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) =>(
        <tr key={category.id}>
          <td class="border px-4 py-2">{index+1}</td>
          <td class="border px-4 py-2">{category.name}</td>
          {/* <td>{category.market_cap.toFixed(2)}</td>  */}
          <td class="border px-4 py-2">{category.market_cap_change_24h.toFixed(2)}%</td>
          <td class="border px-4 py-2">{category.volume_24h.toFixed(2)}</td>
          <td class="flex border px-4 py-2">
            <img src={category.top_3_coins[0]} width='30' height='30' />
            <img src={category.top_3_coins[1]} width='30' height='30' />
            <img src={category.top_3_coins[2]} width='30' height='30' />
            </td>
          <td class="border px-4 py-2">{category.updated_at}</td>
        </tr>)
        )}
      </tbody>
    </table>
  </div></div>)
}
