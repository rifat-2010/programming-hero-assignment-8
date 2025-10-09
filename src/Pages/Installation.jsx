// import { useLoaderData } from 'react-router';
import { FaDownload } from "react-icons/fa6";
import { IoStarHalf } from "react-icons/io5";
import { useEffect, useState } from "react";
import AppErrorImg from '../assets/App-Error.png'
import { toast } from "react-toastify";

const Installation = () => {


const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');

useEffect(() => {
  const savedList = JSON.parse(localStorage.getItem('wishlist'))
setWishlist(savedList)

}, [])
console.log(setWishlist)

// if there is no any Installation  cart, this problem for masage
if (!wishlist.length) return (<div className="flex flex-col justify-center items-center h-[70vh] gap-5 min-h-screen">
      <img src={AppErrorImg} alt="AppErrorImg" />
      <h1 className="text-[48px] font-bold text-center">No Apps Installed Yet</h1>
      <p className="text-gray-500 text-lg text-center">You haven't installed any apps yet. Please browse our apps and install one to see it here.</p>
    </div>)

  const sortedItem = (() => {
    if (sortOrder === 'price-asc') {
      return [...wishlist].sort((a, b) => a.downloads - b.downloads)
    } else if (sortOrder === 'price-desc') {
      return [...wishlist].sort((a, b) => b.downloads - a.downloads)
    } else {
      return wishlist
    }
  })()

  const handleRemove = id => {
     toast('😢😢😢App unstalled successfully!');
    // remove from localstorage
    const existingList = JSON.parse(localStorage.getItem('wishlist'))
    let updatedList = existingList.filter(p => p.id !== id);
    // for ui instant update
    setWishlist(updatedList)
    localStorage.setItem('wishlist', JSON.stringify(updatedList))
  }

return (
 <div className="space-y-4 p-8">
  <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold ml-10'>
         
            ({sortedItem.length}) Apps Found
          
        </h1>

        <label className='form-control w-full max-w-xs'>
          <select
            className='select select-bordered'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='none'>Sort by price</option>
            <option value='price-asc'>Low-High</option>
            <option value='price-desc'>High-Low</option>
          </select>
        </label>
      </div>
  
 {sortedItem.map((p) => ( 
   <div
  key={p.id}
  className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 bg-white shadow-md rounded-xl border hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 ease-out"
>

      {/* Left: Image and text */}
      <div className="flex items-center gap-5">
        <img
          src={p.image}
          alt={p.title}
          className="w-28 h-20 object-cover rounded-lg border"
        />
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-gray-800">{p.description}</h3>
          <div className="card-actions gap-5">
                       <div className="badge badge-outline p-3 rounded-sm  text-[#00d390] font-bold"><FaDownload />{p.downloads}</div>
                      <div className="badge badge-outline p-3 rounded-sm  text-[#ff8811] font-bold"><IoStarHalf />{p.ratingAvg}</div>
                      <div className="flex items-center">
                      <p className=" font-bold text-gray-400">{p.size} MB</p>
                      </div>
                    </div>
        </div>
      </div>

      {/* Right: price + remove button */}
      <div className="flex items-center gap-4">
      
        <div className="flex justify-center">
         <button  onClick={() => handleRemove(p.id)} className='w-[100px] h-12 flex justify-center items-center gap-2.5 py-3 px-4 rounded-[4px] bg-[#00d390] text-white font-bold cursor-pointer'>Unstall</button>
      </div>
      </div>
    </div>
  ))}
</div>

)

};

export default Installation;