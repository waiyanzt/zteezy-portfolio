import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HomeIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [showHomeButton, setShowHomeButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#1a1b26] p-4 w-full">
      <div className="max-w-full mx-4 flex justify-between items-center">
        <div
          className="flex items-center"
          onMouseEnter={() => setShowHomeButton(true)}
          onMouseLeave={() => setShowHomeButton(false)}
        >
          <h1 className="text-3xl text-[#7aa2f7] font-bold mr-2">ZTEEZY</h1>
          {showHomeButton && !isMobile && (
            <button
              onClick={scrollToTop}
              className="text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors duration-300"
            >
              <HomeIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        {isMobile ? (
          <button
            onClick={toggleMenu}
            className="text-[#a9b1d6] hover:text-[#7aa2f7]"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        ) : (
          <div className="flex items-center space-x-8">
            <a
              href="#work"
              className="text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors duration-300 text-lg"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors duration-300 text-lg"
            >
              About
            </a>
            <Link
              to="/contact"
              className="bg-[#bb9af7] hover:bg-[#9d7cd8] text-[#1a1b26] px-6 py-2 rounded-md transition-colors duration-300 text-lg font-medium"
            >
              Get In Touch
            </Link>
          </div>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <div className="mt-4 flex flex-col space-y-4">
          <a
            href="#work"
            className="text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors duration-300 text-lg"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors duration-300 text-lg"
          >
            About
          </a>
          <Link
            to="/contact"
            className="bg-[#bb9af7] hover:bg-[#9d7cd8] text-[#1a1b26] px-6 py-2 rounded-md transition-colors duration-300 text-lg font-medium inline-block"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
