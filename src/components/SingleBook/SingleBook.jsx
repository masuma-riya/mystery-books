/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";

const SingleBook = () => {

    const books = useLoaderData();
    const {id, image, name, author, category, rating, tags, total_pages, review, publisher, yearOf_publishing} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt);
    console.log(book);
   
    return (
        <div className="flex gap-20 w-11/12 m-auto">
            <img className="w-[400px] h-[450px] bg-[#1313130D] p-8 rounded-2xl" src={book.image} alt="" />
             
             <div>
             <h1 className="text-3xl font-bold text-black">{book.name}</h1>
             <p className="text-[#131313CC] text-xl font-semibold border-b-2 p-2">By : {book.author}</p>
             <p className=" text-[#131313CC] text-xl font-semibold border-b-2 p-2">{book.category}</p>
<p className='p-2 text-lg text-[#131313B3] font-medium'><span className='font-bold text-xl text-black'>Review :</span> {book.review}</p>

      <div className="flex gap-2 border-b-2 pb-3 p-2">
           <p className="text-lg font-bold">Tags : </p>
       <div className='flex'>
    {
book.tags.map((tag, idx) => <div className='px-5 py-2 text-base font-medium bg-[#23BE0A0D] rounded-2xl text-[#23BE0A] mr-4' key={idx}># {tag}</div>)
   }

</div>
</div>

<div className="space-y-3 mt-2">
<p className='text-lg text-black font-medium'><span className='mr-10 font-medium text-lg text-[#131313B3]'>Number Of Pages :</span>  {book.total_pages}</p>
<p className='text-lg text-black font-medium'><span className='mr-28 font-medium text-lg text-[#131313B3]'>Publisher :</span>  {book.publisher}</p>
<p className='text-lg text-black font-medium'><span className='mr-12 font-medium text-lg text-[#131313B3]'>Year of Publishing :</span>  {book.yearOf_publishing}</p>
<p className='text-lg text-black font-medium'><span className='mr-36 font-medium text-lg text-[#131313B3]'>Rating :</span>  {book.rating}</p>
</div>

<div className="flex gap-7">
        <button className="btn bg-white text-lg border px-8 border-gray-300 text-black">Read</button>
        <button className="btn bg-[#59C6D2] px-8 text-lg text-white">Wishlist</button>
        
      </div>

             </div>
        </div>
    );
};

export default SingleBook;