import { useEffect, useState } from "react";
import BookCat from "../BookCat/BookCat";

const BookCateGory = () => {

    const [bookCategory, setbookCategory] = useState([]);
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setbookCategory(data));
    },[])
    return (
        
            <div>
            <div className="text-center mb-10 mt-2">
            <i><h2 className="text-3xl text-amber-900 font-bold">Available Categories</h2></i>
            </div>
            <div className="grid grid-cols-3 max-w-5xl gap-10 m-auto">
                {
          bookCategory.map(bookCat => <BookCat key={bookCat.id} bookCat={bookCat}></BookCat>)
                }
            </div>
        </div>
        
    );
};

export default BookCateGory;