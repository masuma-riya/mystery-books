import { useState } from "react";
import {IoMdMenu} from 'react-icons/io';
import {IoClose } from 'react-icons/io5';
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
 
  const [open, setOpen] = useState(false)

    return (
      <div className="flex md:flex-row  flex-col items-center lg:justify-between md:py-10 w-11/12 gap-7 m-auto">
      <div className="flex justify-between gap-5 lg:gap-96 items-center">
        <div>
        <h2 className="hide font-work text-3xl font-bold">Books Store</h2>
        </div>
       
      </div>
     <div className=" ">
    
     <nav className=" text-[rgba(19, 19, 19, 0.80)] flex justify-between items-center gap-32 lg:gap-0 text-center">
     <h2 className="md:hidden text-lg font-bold font-work  ">Book Vibe</h2>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
         {
             open === true ? <IoClose></IoClose>:  <IoMdMenu className=" md:hidden"></IoMdMenu>
         }
      
        </div>
      
        <ul className={`flex flex-col md:flex-row items-center text-[rgba(19, 19, 19, 0.80)] absolute text-lg font-extrabold md:gap-8 mt-32  md:mt-0 text-center  md:justify-center md:static 
         ${open ? 'right-20' : '-top-96'  }
        `}>
          <NavLink className={({isActive}) => isActive? 'text-lg font-semibold text-[#23BE0A] border p-1 rounded-md border-[#23BE0A]' : 'text-lg font-semibold'} to="/">Home</NavLink>

          <NavLink className={({isActive}) => isActive? 'text-lg font-semibold text-[#23BE0A] border p-1 rounded-md border-[#23BE0A]' : 'text-lg font-semibold'} to="/book-category">Category</NavLink>

          <NavLink className={({isActive}) => isActive? 'text-lg font-semibold text-[#23BE0A] border p-1 rounded-md border-[#23BE0A]' : 'text-lg font-semibold'}  to="/listed-books">Listed Books</NavLink>

          <NavLink className={({isActive}) => isActive? 'text-lg font-semibold text-[#23BE0A] border p-1 rounded-md border-[#23BE0A]' : 'text-lg font-semibold'}  to="/pages-to-read">Pages To Read</NavLink>

          <NavLink className={({isActive}) => isActive? 'text-lg font-semibold text-[#23BE0A] border p-1 rounded-md border-[#23BE0A]' : 'text-lg font-semibold'}  to="/about-us">About us</NavLink>
        
        </ul>
        </nav>
      
     </div>
    
    
      <div className="flex gap-7 lg:mb-0 mb-6">
        <button className="btn bg-[#23BE0A] text-white">Sign In</button>
        <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
        
      </div>
    </div>
    );

};

export default Navbar;


{/* <NavLink to="/" className={({isActive}) => isActive? 'text-lg font-semibold text-[#23BE0A] border border-[#23BE0A]' : 'text-lg font-semibold'} >Home</NavLink> */}