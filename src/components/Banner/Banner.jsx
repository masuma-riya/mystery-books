import { NavLink } from 'react-router-dom';
import image from '../../assets/images/pngwing 1.png'

const Banner = () => {
  
    return (
    <div className="bg-base-200 max-w-6xl mx-auto rounded-2xl mt-10 mb-14 pb-12 pt-12">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image} className="max-w-72 ml-20" />
    <div>
      <h1 className="text-5xl font-bold text-black mb-14">Books to freshen<br />up your bookshelf..!</h1>
      <NavLink to="/listed-books"><button className="btn rounded-xl text-white bg-[#23BE0A]">View The List</button></NavLink>
    </div>
  </div>
</div>
    );
};

export default Banner;