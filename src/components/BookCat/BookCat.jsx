/* eslint-disable react/prop-types */
const BookCat = ({bookCat}) => {
    const {logo, category_name, availability, logo2} = bookCat;
    return (
        <div className="bg-[#9873FF0D] p-10 rounded-2xl shadow-xl border">
            <div className="flex justify-around">
            <img className="bg-[#9873FF1A] p-2 w-[100px] rounded-lg" src={logo2} alt="" />
            <img className="bg-[#9873FF1A] p-2 w-[100px] rounded-lg" src={logo} alt="" />
            </div>
            <i><p className="font-bold text-2xl text-center mt-4">{category_name}</p></i>
            <p className="text-green-500 underline font-medium text-center mt-4 text-lg">{availability}</p>
        </div>
    );
};

export default BookCat;