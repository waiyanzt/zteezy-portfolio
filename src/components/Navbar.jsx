import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HomeIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showHomeButton, setShowHomeButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(
        (prevScrollPos > currentScrollPos && currentScrollPos > 0) ||
          currentScrollPos < 10,
      );
      setPrevScrollPos(currentScrollPos);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const goToHome = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (sectionId) => {
    if (location.pathname === "/") {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate("/", { state: { scrollTo: sectionId } });
    }
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  // Effect to handle scrolling after navigation
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      // Clear the state to prevent scrolling on subsequent renders
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const navItems = [
    { label: "Blog", href: "https://zteezy.me/", external: true },
    { label: "Github", href: "https://github.com/waiyanzt", external: true },
    { label: "Work", action: () => handleNavigation("work") },
    { label: "About", action: () => handleNavigation("about") },
  ];

  return (
    <>
      <nav
        className={`bg-[#1a1b26] p-4 w-full fixed top-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-full mx-4 flex justify-between items-center">
          <div
            className="flex items-center"
            onMouseEnter={() => setShowHomeButton(true)}
            onMouseLeave={() => setShowHomeButton(false)}
          >
            <h1 className="text-3xl text-[#7aa2f7] font-bold mr-2">ZTEEZY</h1>
            {showHomeButton && !isMobile && (
              <button
                onClick={goToHome}
                className="text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors duration-300"
              >
                <HomeIcon className="h-6 w-6" />
              </button>
            )}
          </div>

          {isMobile ? (
            <button
              onClick={toggleMenu}
              className="text-[#a9b1d6] hover:text-[#7aa2f7] z-50"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          ) : (
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) =>
                item.external ? (
                  <a
                    key={index}
                    href={item.href}
                    className="text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors duration-300 text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={index}
                    onClick={item.action}
                    className="text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors duration-300 text-lg"
                  >
                    {item.label}
                  </button>
                ),
              )}
              <Link
                to="/contact"
                className="bg-[#bb9af7] hover:bg-[#9d7cd8] text-[#1a1b26] px-6 py-2 rounded-md transition-colors duration-300 text-lg font-medium"
              >
                Get In Touch
              </Link>
            </div>
          )}
        </div>
      </nav>

      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-[#1a1b26] z-40 flex flex-col items-center justify-center">
          <div className="flex flex-col space-y-8 text-center">
            {navItems.map((item, index) =>
              item.external ? (
                <a
                  key={index}
                  href={item.href}
                  className="text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors duration-300 text-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={index}
                  onClick={() => {
                    item.action();
                    toggleMenu();
                  }}
                  className="text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors duration-300 text-2xl"
                >
                  {item.label}
                </button>
              ),
            )}
            <Link
              to="/contact"
              className="bg-[#bb9af7] hover:bg-[#9d7cd8] text-[#1a1b26] px-6 py-2 rounded-md transition-colors duration-300 text-2xl font-medium inline-block"
              onClick={toggleMenu}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
