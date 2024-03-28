import PropTypes from 'prop-types';
import { FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';

    const Book = ({book}) => {
    const {id, image, name, author, category, rating, tags} = book;

    return (

    <Link to={`/book/${id}`}>
    
    <div className="card card-compact bg-base-100 shadow-xl border mb-4">
    <div className='flex justify-center bg-[#F3F3F3] pt-4 pb-4 m-6 rounded-xl'>
    <img className="w-[134px] h-[166px]" src={image} alt="Shoes" />
    </div>

    <div className='flex justify-around'>

     {
  tags.map((tag, idx) => <div className='px-5 flex ml-4 py-2 text-base font-medium bg-[#23BE0A0D] rounded-2xl text-[#23BE0A] mr-4' key={idx}>{tag}</div>)
     }

    </div>

    <div className="card-body mx-6">
    <h2 className="card-title text-black font-bold">{name}</h2>

    <p className='border-b-2 border-dashed text-base font-medium text-[#131313CC] p-1'>By : {author}</p>
    
    <div className='flex justify-between text-base font-medium text-[#131313CC]'>
    <p>{category}</p>
    <p className='flex gap-2 ml-28 text-lg'>{rating}<FcRating className='text-xl mt-1'></FcRating></p>
    </div>
 
      {

      }

  </div>
</div>


    </Link>
    );
};

  Book.propTypes = {
    book: PropTypes.object
  }

export default Book;