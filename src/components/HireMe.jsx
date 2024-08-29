import { Link } from "react-router-dom";

const HireMe = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[33vh] hover:bg-[#737aa2] hover:text-[#1f2335] transition-colors duration-300  px-2 sm:px-4 md:px-6 py-8">
      <div className="flex flex-col items-center space-y-4 w-full max-w-4xl text-center">
        <p className="text-2xl sm:text-3xl animate-bounce">🤓</p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Hit me up if you're interested in working together!
        </p>
        <Link
          to="/contact"
          className="group bg-[#bb9af7] hover:bg-[#9d7cd8] text-[#1a1b26] px-8 py-3 rounded-full transition-all duration-300 text-lg sm:text-xl font-medium flex items-center space-x-2 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
