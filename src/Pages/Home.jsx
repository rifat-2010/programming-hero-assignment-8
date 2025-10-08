import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import hero from '../assets/hero.png'
import { Link, useLoaderData } from "react-router";
import { FaDownload } from "react-icons/fa6";
import { IoStarHalf } from "react-icons/io5";
import { MdOutlineAutoGraph } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Home = () => {
    const products = useLoaderData();
    const firstEight = products.slice(0, 8);
  return (
    <div className="mt-[80px]">
        {/* header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-semibold text-center">We Build </h1>
        <h1 className="text-6xl font-semibold text-center">
          <span
            style={{
              backgroundImage:
                "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Productive
          </span>{" "}
          Apps
        </h1>

         <p
          class="text-[#627382]
 font-bold text-center mx-36"
        >
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex justify-center gap-8">
            <a href="https://play.google.com/store/games?hl=en" className="w-50 h-14 flex justify-center items-center gap-2.5 py-3 px-6 box-border border border-gray-300 rounded-sm cursor-pointer" target="_blank"><FaGooglePlay />Google Play</a>
            <a href="https://play.google.com/store/apps?hl=en" className="w-50 h-14 flex justify-center items-center gap-2.5 py-3 px-6 box-border border border-gray-300 rounded-sm cursor-pointer" target="_blank"><FaAppStoreIos />App Store</a>
        </div>
        <img src={hero} alt="hero-img" className="w-[580px] mx-auto mt-15" />
      </div>


      {/* banner */}
      <div className="w-full p-[80px] flex flex-col justify-start items-center gap-10 bg-[#627382]"  style={{
    background: "linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)"
  }}>
<h1 className="text-[48px] font-bold text-center text-white">
         Trusted by Millions, Built for You
        </h1>
        <div className="flex gap-40">
        {/* total downloads */}
        <div className="flex flex-col justify-center items-center ">
        <p className="text-white font-semibold">Total Downloads</p>
        <h1 className="text-white text-[64px] font-extrabold">29.6M</h1>
         <p className="text-white font-semibold">21% more than last month</p>
        </div>
        {/* total Total Reviews */}
        <div className="flex flex-col justify-center items-center ">
        <p className="text-white font-semibold">Total Reviews</p>
        <h1 className="text-white text-[64px] font-extrabold">906K</h1>
         <p className="text-white font-semibold">46% more than last month</p>
        </div>
        {/* Active Apps */}
        <div className="flex flex-col justify-center items-center ">
        <p className="text-white font-semibold">Active Apps</p>
        <h1 className="text-white text-[64px] font-extrabold">132+</h1>
         <p className="text-white font-semibold">31 more will Launch</p>
        </div>
        </div>
      </div>



{/* all box title */}
     <div className="mt-[80px] mx-20 flex flex-col gap-3 mb-5">
            <h1 className="text-[48px] font-bold text-center flex items-center justify-center">
             Trending Apps <MdOutlineAutoGraph className="ml-4"/>
            </h1>
            <p
              class="text-[#627382]
     font-bold text-center"
            >
            Explore All Trending Apps on the Market developed by us
            </p>
          </div>


{/* doing fetch and show all carts by json data */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {
        firstEight.map(product => 
            <Link id={product.id} to='/products'>
        <div class="card bg-base-100 w-full  md:w-80 lg:w-90 shadow-sm  hover:scale-105 transition ease-in border-2 mx-auto">
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
       </div>
    </Link>
        )
    }
    
</div>
 <div class="flex justify-center mt-[40px]">
         <NavLink to='/products' className='w-[250px] h-12 flex justify-center items-center gap-2.5 py-3 px-4 rounded-[4px] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white font-bold '>Show All</NavLink>
      </div>
    </div>
  );
};

export default Home;
