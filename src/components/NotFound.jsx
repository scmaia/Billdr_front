import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="container flex flex-col items-center text-gray-700">
        <div className="text-7xl text-blue-500 font-dark font-extrabold mb-8">
          404
        </div>
        <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
          Page does not exist
        </p>
        <Link to='/' className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-blue-500 active:bg-gray-600 hover:bg-gray-700">
          back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;