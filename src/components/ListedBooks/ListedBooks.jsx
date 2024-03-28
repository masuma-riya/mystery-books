import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListedBooks = () => {
    const [appliedData, setAppliedData] = useState([]);
    const [wishlistBooks, setWishlistBook] = useState([]);

    useEffect(() => {
   const getData = JSON.parse(localStorage.getItem("books")) || [];
   setAppliedData(getData);
    },[]);


  useEffect(() => {
    const wishListData = JSON.parse(localStorage.getItem("wishlistBooks")) || [];
    setWishlistBook(wishListData);
  },[]);

    return (
      <div role="tablist" className="tabs tabs-lifted">
      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" defaultChecked />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box lg:p-6">
      
      {appliedData.map((data) => (
      <div key={data.id} className="flex flex-col lg:flex-row items-center space-x-4 mt-5 border-2 rounded-xl p-5">
      <img src={data.image} alt={data.name} className="bg-base-200 w-56 h-56" />

      <div>
      <h3 className="font-bold text-2xl mb-5">{data.name}</h3>
      <p className="text-[#131313CC] font-medium">By : {data.author}</p>

      <div className="flex flex-col lg:flex-row gap-5 mb-5">
      <div className="flex gap-2 mt-5">
      {data.tags.map((tag, index) => (
      <h2 key={index} className="border-2 bg-base-200 text-[#23BE0A] py-1 px-2 rounded-full font-medium">#{tag}</h2>))}
    </div>
         <h2 className="mt-5 text-[#131313CC] font-normal">Year of publishing : {data.yearOf_publishing}</h2>
    </div>

      <div className="flex flex-col lg:flex-row lg:gap-16 ">
      <p>Publisher : {data.publisher}</p>
      <p>Pages : {data.pages}</p>
    </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
      <p className=" py-1 px-5 border-0 rounded-full bg-[#328EFF26] text-[#0274ffe7]">Category : {data.category}</p>
      <p className="ml-2 py-1 text-center px-3 w-32 border-0 rounded-full bg-[#FFAC3326] text-[#ff9900de]">Rating : {data.rating}</p>
                                        
<Link to={`/book/${data.id}`}><button className="rounded-full py-1 px-5 text-center text-lg bg-[#23BE0A] text-white  duration-300 hover:scale-90">View Details</button></Link>
                                      
    </div>
   </div>
  </div>))}

</div>
    
    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

  {wishlistBooks.map((data) => (
       <div key={data.id} className="flex flex-col md:flex-row items-center space-x-4 mt-5 border-2 rounded-xl p-5">
       <img src={data.image} alt={data.name} className="bg-base-200 w-56 h-56" />

      <div>
      <h3 className="font-bold text-2xl mb-5">{data.bookName}</h3>
      <p className="text-[#131313CC] font-medium">By : {data.author}</p>

      <div className="flex flex-col md:flex-row gap-5 mb-5">
      <div className="flex gap-2 mt-5">
      {data.tags.map((tag, index) => (
      <h2 key={index} className="border-2 bg-base-200 text-[#23BE0A] py-1 px-2 rounded-full font-medium">#{tag}</h2>))}
  </div>
      <h2 className="mt-5 text-[#131313CC] font-normal">Year of publishing : {data.yearOf_publishing}</h2>
  </div>

      <div className="flex flex-col lg:flex-row lg:gap-16 ">
      <p>Publisher : {data.publisher}</p>
      <p>Pages : {data.pages}</p>
  </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
      <p className=" py-1 px-5 border-0 rounded-full bg-[#328EFF26] text-[#0274ffe7]">Category : {data.category}</p>
      <p className="ml-2 py-1 text-center px-3 w-32 border-0 rounded-full bg-[#FFAC3326] text-[#ff9900de]">Rating : {data.rating}</p>
                                      
<button className="rounded-full px-5 text-center text-lg bg-[#23BE0A] text-white  duration-300 hover:scale-90">View Details</button>
        </div>
      </div>
    </div>))}

</div>

</div>
    );
};


export default ListedBooks;