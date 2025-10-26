import { FaSearch } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { FaDownload } from "react-icons/fa6";
import { IoStarHalf } from "react-icons/io5";
import { useState } from "react";
import AppErrorImg from "../assets/App-Error.png";
import Loading from "../../src/Loading/Loading";

const Products = () => {
  // data fetch from routes.jsx
  const products = useLoaderData();
  // console.log(products)
  {
    products ? <Loading></Loading> : products;
  }
  // input > search's title find and emplement by "searchedProducts.map"
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const term = search.trim().toLocaleLowerCase();
  const searchedProducts = term
    ? products.filter((product) =>
        product.title.toLocaleLowerCase().includes(term)
      )
    : products;
  // console.log(searchedProducts)

  const handleSearch = (e) => {
    setIsLoading(true);
    setSearch(e.target.value);
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // 500ms delay
  };

  

  return (
    <div>
      {/* title and search bar */}
      <div className="mt-[80px] mx-5 md:mx-10 lg:mx-20 flex flex-col gap-5 mb-10">
        <h1 className="text-[48px] font-bold text-center">
          Our All Applications
        </h1>
        <p className="text-[#627382] font-bold text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <h1 className="text-[24px] font-bold text-center">
            ({searchedProducts.length}) Apps Found
          </h1>
          <label className="input border border-gray-950">
            <FaSearch />
            <input
              value={search}
              onChange={handleSearch}
              type="search"
              placeholder="search Apps"
            />
          </label>
        </div>
      </div>

      {/* all cart section of products */}
      {isLoading ? (
        <Loading />
      ) : searchedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-8">
          {searchedProducts.map((product) => (
            <Link to={`/product/${product.id}`} className="group">
              <div className="card bg-base-100 w-full shadow-sm  group-hover:scale-105 transition ease-in border-2 mx-auto">
                <figure className="h-68 w-full overflow-hidden rounded-t-xl px-5 py-5">
                  <img src={product.image} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <div className="card-actions justify-between">
                    <div className="badge badge-outline p-5 rounded-sm bg-[rgba(241,245,232,1)] text-[#00d390] font-bold">
                      <FaDownload />
                      {product.downloads}
                    </div>
                    <div className="badge badge-outline p-5 rounded-sm bg-[#ffe0e1] text-[#ff8811] font-bold">
                      <IoStarHalf />
                      {product.ratingAvg}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // NOT FOUND div should be OUTSIDE the grid
        <div className="flex flex-col justify-center items-center h-[70vh] gap-5 min-h-screen">
          <img src={AppErrorImg} alt="AppErrorImg" />
          <h1 className="text-[48px] font-bold text-center">
            ❌ OPPS!! APP NOT FOUND
          </h1>
          <p className="text-gray-500 text-lg text-center">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
