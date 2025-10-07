import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import hero from '../assets/hero.png'

const Home = () => {
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
            <div className="w-50 h-14 flex justify-center items-center gap-2.5 py-3 px-6 box-border border border-gray-300 rounded-sm cursor-pointer"><FaGooglePlay />Google Play</div>
            <div className="w-50 h-14 flex justify-center items-center gap-2.5 py-3 px-6 box-border border border-gray-300 rounded-sm cursor-pointer"><FaAppStoreIos />App Store</div>
        </div>
        <img src={hero} alt="hero-img" className="w-[580px] mx-auto mt-15" />
      </div>


      {/* banner */}
      <div className="w-full p-[80px] flex flex-col justify-start items-center gap-10"  style={{
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
        <p className="text-white font-semibold">Total Total Reviews</p>
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




     <div className="mt-[80px] mx-20 flex flex-col gap-5">
            <h1 className="text-[48px] font-bold text-center">
             Trending Apps
            </h1>
            <p
              class="text-[#627382]
     font-bold text-center"
            >
            Explore All Trending Apps on the Market developed by us
            </p>
           
          </div>





    </div>
  );
};

export default Home;
