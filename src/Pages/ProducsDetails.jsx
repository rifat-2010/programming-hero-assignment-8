import { useLoaderData, useParams } from 'react-router';



const ProducsDetails = () => {

const handleAddToWishList = () => {
      const existingList = JSON.parse(localStorage.getItem('wishlist'))
      let updatedList = []
      if (existingList) {
        const isDuplicate = existingList.some(p => p.id === product.id)
        if (isDuplicate) return alert('Sorry vai')
        updatedList = [...existingList, product]
      } else {
        updatedList.push(product)
      }
      localStorage.setItem('wishlist', JSON.stringify(updatedList))
    }

      const {id} = useParams()
    // console.log(params)


    // data fetch from routes.jsx
          const products = useLoaderData();
     const product = products.find(p => p.id === Number(id));
  
    return (
        
       <div class="card lg:card-side bg-base-100 shadow-sm flex gap-5">
  <figure className='mx-8 my-5'>
    <img
      src={product.image}
      alt="Album" className='w-80 h-80'/>
  </figure>
  <div class="card-body flex flex-col gap-5">
    <h2 class="card-title text-black font-bold text-[32px]">{product.description}</h2>
    <p className='text-[#627382] text-[20px] font-bold'>Devloperd by  : <span className='text-[#9F62F2]'>{product.companyName}</span></p>
    <hr />

      <div className="flex gap-5 md:gap-40 flex-col lg:flex-row md:felx-row">
        {/* total downloads */}
        <div className="flex flex-col justify-center items-center ">
        <p className="font-semibold">Downloads</p>
        <h1 className=" text-4xl font-extrabold">{product.downloads}</h1>
         
        </div>
        {/* total Total Reviews */}
        <div className="flex flex-col justify-center items-center ">
        <p className=" font-semibold">Average Ratings</p>
        <h1 className=" text-5xl font-extrabold">{product.ratingAvg}</h1>
        
        </div>
        {/* Active Apps */}
        <div className="flex flex-col justify-center items-center ">
        <p className="font-semibold">Total reviews</p>
        <h1 className=" text-5xl font-extrabold">{product.ratings.length}+</h1>
      
        </div>
        </div>
         <button onClick={() => handleAddToWishList()}  to='/products' className='w-[200px] h-12 flex justify-center items-center gap-2.5 py-3 px-4 rounded-[4px] bg-[#00d390] text-white font-bold text-xl cursor-pointer mx-auto md:mx-0'>Install Now ({product.size})</button>
  </div>
</div>
    );
};

export default ProducsDetails;