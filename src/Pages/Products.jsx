import React from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router";
const Products = () => {

const products = useLoaderData();
console.log(products)

  return (
    <div>
      <div className="mt-[80px] mx-20 flex flex-col gap-5">
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
            (132) Apps Found
          </h1>
          <label className="input">
            <FaSearch />
            <input type="search" placeholder="Search Products" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Products;
