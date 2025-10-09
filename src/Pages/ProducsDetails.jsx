import { useLoaderData, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';



const ProducsDetails = () => {
    const [installed, setInstalled] = useState(false);

const handleAddToWishList = () => {
      const existingList = JSON.parse(localStorage.getItem('wishlist'))
      let updatedList = []
      if (existingList) {
        const isDuplicate = existingList.some(p => p.id === product.id)
        if (isDuplicate) return toast('🙂😊You’ve already installed this app!')
        updatedList = [...existingList, product]
      } else {
        updatedList.push(product)
      }
      localStorage.setItem('wishlist', JSON.stringify(updatedList))
      toast('🎉🎉🎉App installed successfully!');
      setInstalled(true);
    }

      const {id} = useParams()
    // console.log(params)


    // data fetch from routes.jsx
          const products = useLoaderData();
     const product = products.find(p => p.id === Number(id));

    useEffect(() => {
      const existingList = JSON.parse(localStorage.getItem('wishlist'))
      if (existingList) {
        const isInstalled = existingList.some(p => p.id === product.id)
        if (isInstalled) {
          setInstalled(true)
        }
      }
    }, [product.id]);
  
    return (
        <div className='flex flex-col gap-10'>
       <div class="card lg:card-side bg-base-100 shadow-sm flex gap-5">
  <figure className='mx-8 my-5 w-80 h-80'>
    <img
      src={product.image}
      alt="Album" className=''/>
  </figure>
  <div class="card-body flex flex-col  gap-5 md:gap-7">
    <h2 class="card-title text-black font-bold text-[32px]">{product.description}</h2>
    <p className='text-[#627382] text-[20px] font-bold'>Devloperd by  : <span className='text-[#9F62F2]'>{product.companyName}</span></p>
    <hr />

      <div className="flex gap-5 md:gap-40 flex-col lg:flex-row md:felx-row">
        {/* total downloads */}
        <div className="flex flex-col justify-center items-center ">
        <p className="font-semibold text-2xl">Downloads</p>
        <h1 className=" text-4xl font-extrabold">{product.downloads}</h1>
         
        </div>
        {/* total Total Reviews */}
        <div className="flex flex-col justify-center items-center ">
        <p className=" font-semibold text-2xl">Average Ratings</p>
        <h1 className=" text-5xl font-extrabold">{product.ratingAvg}</h1>
        
        </div>
        {/* Active Apps */}
        <div className="flex flex-col justify-center items-center ">
        <p className="font-semibold text-2xl">Total reviews</p>
        <h1 className=" text-5xl font-extrabold">{product.ratings.length}+</h1>
      
        </div>
        </div>
         <button onClick={() => handleAddToWishList()}  to='/products' className='w-[200px] h-12 flex justify-center items-center gap-2.5 py-3 px-4 rounded-[4px] bg-[#00d390] text-white font-bold text-xl cursor-pointer mx-auto md:mx-0'> {installed ? 'Installed' : `Install Now (${product.size})`}</button>
         <hr />
  </div>
 
</div>

{/* chart */}
<div>
<h1 className='text-5xl text-center'>chart</h1>
</div>


{/* description */}
<div className='mx-8 md:mx-20'>
<h1 className='text-[24px] font-bold '>Description</h1><br />
<p className='font-semibold md:text-[20px] text-gray-500'>{product.longDescription}</p>
</div>
</div>
    );
};

export default ProducsDetails;