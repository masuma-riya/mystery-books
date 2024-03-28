import { NavLink } from 'react-router-dom';
import image from '../../assets/images/pngwing 1.png'

const Banner = () => {
  
    return (
    <div className="bg-base-200 md:w-11/12 w-10/12 mx-auto rounded-2xl md:mt-10 md:mb-14 md:pb-12 pb-6 md:pt-12 pt-6">
    <div className="hero-content flex-col md:flex-row-reverse">
    <img src={image} className="md:max-w-72 max-w-48 md:ml-20" />
    <div>
      <h1 className="md:text-5xl text-3xl font-bold text-black md:mb-14 mb-8">Books to freshen<br />up your bookshelf..!</h1>
      <NavLink to="/listed-books"><button className="btn rounded-xl text-white bg-[#23BE0A]">View The List</button></NavLink>
    </div>
  </div>
</div>
    );
};

export default Banner;