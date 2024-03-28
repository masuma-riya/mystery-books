/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveDataToLocalStorage} from "../../utility/localStorage";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SingleBook = () => {

    const books = useLoaderData();
    const {id, image, name, author, category, rating, tags, total_pages, review, publisher, yearOf_publishing} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt);
    console.log(book);

    // const wbook = books.find(wbook => wbook.id === idInt);
    // console.log(wbook);

    const [readList, setReadList]= useState(JSON.parse(localStorage.getItem('books')) || []);
    const [wishList, setWishList]= useState(JSON.parse(localStorage.getItem('wishlistBooks')) || []);

    const handleRead = () => {
        if(!readList.find(item => item.id === idInt)){
            setReadList([...readList, book]);
            saveDataToLocalStorage({data: book, listType: 'books'});
            toast.success("Added to Read List")
        } else{
            toast.error("Already added to Read List")
        }
    };


    const handleWish = () => {

        if(readList.find(item => item.id === idInt)){
            toast.error("Book already added to Read List")
        }
            
        else if(!wishList.find(item => item.id === idInt)){
            setWishList([...wishList, book]);
            saveDataToLocalStorage({data: book, listType: 'wishlistBooks'});
            toast.success("Added to Wishlist")
        }
        else{
            toast.error("Already added to Wishlist")
        }
    };

   
    return (
        <div className="md:flex items-center gap-20 w-10/12 md:w-11/12 m-auto">
            <img className="w-[400px] md:mt-0 mt-4 h-[450px] bg-[#1313130D] p-8 rounded-2xl" src={book.image} alt="" />
             
             <div className="md:mt-0 mt-6">
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
<p className='text-lg text-black font-medium'><span className='mr-10 font-medium text-lg text-[#131313B3]'>Number Of Pages :</span>  {book.pages}</p>
<p className='text-lg text-black font-medium'><span className='mr-28 font-medium text-lg text-[#131313B3]'>Publisher :</span>  {book.publisher}</p>
<p className='text-lg text-black font-medium'><span className='mr-12 font-medium text-lg text-[#131313B3]'>Year of Publishing :</span>  {book.yearOf_publishing}</p>
<p className='text-lg text-black font-medium'><span className='mr-36 font-medium text-lg text-[#131313B3]'>Rating :</span>  {book.rating}</p>
</div>

<div className="flex gap-7 mt-4 mb-4">
<button onClick={handleRead} className="btn bg-white text-lg border px-8 border-gray-300 text-black btn-success">Read</button>
<button onClick={handleWish} className="btn btn-accent bg-[#59C6D2] px-8 text-lg text-white">Wishlist</button>
<ToastContainer position="top-right"></ToastContainer>
    
      </div>
    <div className="text-center">
    <Link to="/"><a className="btn mt-6 mb-6 text-black text-lg bg-purple-400 font-bold border-none btn-wide">Back To Home</a></Link>
    </div>
             </div>
        </div>
    );
};

export default SingleBook;