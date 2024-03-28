import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";


const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBook] = useState([]);
    const [sort, setSort] = useState("");
    

    useEffect(() => {
   const getData = JSON.parse(localStorage.getItem("books")) || [];
   setReadBooks(getData);
    },[]);


  useEffect(() => {
    const wishListData = JSON.parse(localStorage.getItem("wishlistBooks")) || [];
    setWishlistBook(wishListData);
  },[]);

  const handleSortBy = (sorting) => {
      setSort(sorting)
  }

const sortBooks = (data) => {
   if(sort === "rating"){
     return data.sort((a, b) => b.rating - a.rating);
   }
   else if(sort === "pages"){
    return data.sort((a, b) => b.pages - a.pages);
   }
   else if(sort === "year"){
    return data.sort((a, b) => b.yearOf_publishing - a.yearOf_publishing);
   }
   else{
    return data;
   }
};

    return ( <div>
        
<div className="text-center lg:mb-0 mb-5">
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-success border-none px-10 text-white font-bold text-lg m-1 bg-[#23BE0A]">Sort By
  <MdKeyboardArrowDown className="text-3xl"></MdKeyboardArrowDown>
  
  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={() => handleSortBy("rating")} className="text-base font-normal"><a>Ratings</a></li>
    <li onClick={() => handleSortBy("pages")} className="text-base font-normal"><a>Number Of Pages</a></li>
    <li onClick={() => handleSortBy("year")} className="text-base font-normal"><a>Publish Year</a></li>
  </ul>
</div>
</div>

      <div role="tablist" className="tabs tabs-lifted w-10/12 m-auto">
      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" defaultChecked />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box lg:p-6">
      
      {sortBooks(readBooks).map((data) => (
      <div key={data.id} className="flex flex-col lg:flex-row items-center space-x-4 mt-5 border-2 rounded-xl p-5">
      <img src={data.image} alt={data.name} className="bg-base-200 w-56 h-56" />

      <div className="mt-6">
      <h3 className="font-bold text-2xl mb-5">{data.name}</h3>
      <p className="text-[#131313CC] font-medium">By : {data.author}</p>

      <div className="flex flex-col lg:flex-row gap-5 mb-5">
      <div className="flex gap-2 mt-5">
      {data.tags.map((tag, index) => (
      <h2 key={index} className="px-5 flex ml-4 py-2 text-base font-medium bg-[#23BE0A0D] rounded-2xl text-[#23BE0A] mr-4 border-dashed shadow"># {tag}</h2>))}
    </div>
         <h2 className="lg:mt-6 text-[#131313] font-medium">Year of Publishing : {data.yearOf_publishing}</h2>
    </div>

      <div className="flex flex-col lg:flex-row lg:gap-16 ">
      <p className=" text-[#131313] font-medium">Publisher : {data.publisher}</p>
      <p className=" text-[#131313] font-medium">Total Pages : {data.pages}</p>
    </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
      <p className="font-medium py-1 px-5 border-0 rounded-full bg-[#328EFF26] text-[#0274ffe7]">Category : {data.category}</p>
      <p className="ml-2 py-1 text-center px-3 w-32 lg:mt-0 mt-4 border-0 rounded-full bg-[#FFAC3326] font-medium text-[#ff9900de]">Rating : {data.rating}</p>
                                        
<Link to={`/book/${data.id}`}><button className="rounded-full py-1 px-5 text-center lg:mt-0 mt-4 text-lg bg-[#23BE0A] text-white  duration-300 hover:scale-90">View Details</button></Link>
                                      
    </div>
   </div>
  </div>))}

</div>
    
    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

  {sortBooks(wishlistBooks).map((data) => (
       <div key={data.id} className="flex flex-col md:flex-row items-center space-x-4 mt-5 border-2 rounded-xl p-5">
       <img src={data.image} alt={data.name} className="bg-base-200 w-56 h-56" />

      <div>
      <h3 className="font-bold text-2xl mb-5">{data.name}</h3>
      <p className="text-[#131313CC] font-medium">By : {data.author}</p>

      <div className="flex flex-col md:flex-row gap-5 mb-5">
      <div className="flex gap-2 mt-5">
      {data.tags.map((tag, index) => (
    <h2 key={index} className="px-5 flex ml-4 py-2 text-base font-medium bg-[#23BE0A0D] rounded-2xl text-[#23BE0A] mr-4 border-dashed shadow"># {tag}</h2>))}
  </div>
      <h2 className="lg:mt-6 text-[#131313] font-medium">Year of Publishing : {data.yearOf_publishing}</h2>
  </div>

      <div className="flex flex-col lg:flex-row lg:gap-16 ">
      <p className="text-[#131313] font-medium">Publisher : {data.publisher}</p>
      <p className="text-[#131313] font-medium">Total Pages : {data.pages}</p>
  </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
      <p className=" py-1 px-5 border-0 rounded-full bg-[#328EFF26] text-[#0274ffe7] font-medium">Category : {data.category}</p>
      <p className="ml-2 py-1 text-center px-3 w-32 border-0 rounded-full bg-[#FFAC3326] text-[#ff9900de] font-medium">Rating : {data.rating}</p>
                                      
<button className="rounded-full px-5 text-center text-lg bg-[#23BE0A] text-white  duration-300 hover:scale-90">View Details</button>
        </div>
      </div>
    </div>))}

</div>

</div>
</div>
    );
};


export default ListedBooks;