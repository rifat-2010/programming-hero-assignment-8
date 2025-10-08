// import { useLoaderData } from 'react-router';

import { useEffect, useState } from "react";

const Installation = () => {
    // data fetch from routes.jsx
        //   const products = useLoaderData();
        //   console.log(products)

const [wishlist, setWishlist] = useState([])
useEffect(() => {
  const savedList = JSON.parse(localStorage.getItem('wishlist'))
  if (savedList) setWishlist(savedList)
}, [])

return (
 <div className="space-y-4">
  {wishlist.map((p) => (
    <div
      key={p.id}
      className="flex items-center justify-between bg-white shadow-md rounded-xl border hover:shadow-lg transition-all duration-300 p-4"
    >
      {/* Left: Image and text */}
      <div className="flex items-center gap-5">
        <img
          src={p.image}
          alt={p.title}
          className="w-28 h-20 object-cover rounded-lg border"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
          <p className="text-sm text-gray-500">{p.companyName}</p>
        </div>
      </div>

      {/* Right: price + remove button */}
      <div className="flex items-center gap-4">
        <span className="text-lg font-bold text-gray-700">${p.reviews}</span>
        <button className="px-5 py-2 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition">
          Remove
        </button>
      </div>
    </div>
  ))}
</div>

)

};

export default Installation;