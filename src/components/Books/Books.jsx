import { useEffect, useState } from "react";
import Book from "../Book/Book";

 const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    return (
        <div className="mt-6 mb-20">
           <div className="text-center">
           <h2 className="text-4xl font-bold mb-8">Books</h2>
           </div>
          
         <div className="grid grid-cols-3 gap-6 max-w-5xl m-auto">
            {
                books.map(book => <Book key={book.id} book={book}></Book>)
            }
         </div>
        </div>
    );
};

export default Books;