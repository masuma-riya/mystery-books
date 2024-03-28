import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (

    <div className="text-center mt-52">
        <h2 className="text-7xl">Oops!!!</h2>
        <h2 className="text-6xl mt-8 mb-8">Something Went Wrong :(</h2>
<Link to="/"><button className="btn bg-purple-700 rounded-lg text-white font-bold">Back to HOME</button></Link>
    </div>
    
    );
};

export default ErrorPage;