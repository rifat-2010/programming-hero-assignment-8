import { FaSearch } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { FaDownload } from "react-icons/fa6";
import { IoStarHalf } from "react-icons/io5";
import { useState } from "react";


const Products = () => {
// data fetch from routes.jsx
          const products = useLoaderData();
          // console.log(products)


// input > search's title find and emplement by "searchedProducts.map"
  const [search, setSearch] = useState('');
  
  const term = search.trim().toLocaleLowerCase()
  const searchedProducts = term
    ? products.filter(product =>
        product.title.toLocaleLowerCase().includes(term)
      )
    : products
    // console.log(searchedProducts)







  return (
    <div>
      {/* title and search bar */}
      <div className="mt-[80px] mx-20 flex flex-col gap-5 mb-10">
        <h1 className="text-[48px] font-bold text-center">
          Our All Applications
        </h1>
        <p
          class="text-[#627382]
 font-bold text-center"
        >
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <h1 className="text-[24px] font-bold text-center">
            ({searchedProducts.length}) Apps Found
          </h1>
          <label className="input border border-gray-950">
            <FaSearch />
            <input value={search}
            onChange={e => setSearch(e.target.value)} type="search" placeholder="search Apps" />
          </label>
        </div>
      </div>

 {/* all cart section of products */}
  {searchedProducts.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {searchedProducts.map((product) => (
         <Link to={`/product/${product.id}`} class="card bg-base-100 w-full  md:w-80 lg:w-90 shadow-sm  hover:scale-105 transition ease-in border-2 mx-auto">
         <figure className="h-68 w-full overflow-hidden rounded-t-xl px-5 py-5">
           <img
             src={product.image} />
         </figure >
         <div class="card-body">
           <h2 class="card-title">
             {product.title}
           </h2>
           <div class="card-actions justify-between">
              <div class="badge badge-outline p-5 rounded-sm bg-[rgba(241,245,232,1)] text-[#00d390] font-bold"><FaDownload />{product.downloads}</div>
             <div class="badge badge-outline p-5 rounded-sm bg-[#ffe0e1] text-[#ff8811] font-bold"><IoStarHalf />{product.ratingAvg}</div>
           </div>
         </div>
       </Link>
      ))}
    </div>
  ) : (
    // NOT FOUND div should be OUTSIDE the grid
    <div className="flex flex-col justify-center items-center h-[70vh] gap-10">
      <h1 className="text-[48px] font-bold text-center">❌ No Apps Found</h1>
      <p className="text-gray-500 text-lg text-center">Try searching for something else.</p>
    </div>
  )}
</div>
  )}

export default Products;