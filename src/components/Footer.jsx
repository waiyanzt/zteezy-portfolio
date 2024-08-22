const Footer = () => {
  const latitude = "1.3840";
  const longitude = "103.7470";

  const handleLocationClick = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
      "_blank"
    );
  };

  return (
    <footer className="text-2xl w-full text-[#ff9e64] transition-colors duration-300 ease-in-out hover:bg-[#24263b] font-sans tracking-wide">
      <div className="max-w-screen-xl mx-auto px-4 py-4 text-center">
        <p className="text-base leading-relaxed">
          ©{new Date().getFullYear()} WAI YAN. ALL RIGHTS RESERVED.
        </p>
        <p
          className="mt-2 text-sm leading-relaxed cursor-crosshair hover:text-[#ffc777]"
          onClick={handleLocationClick}
          title="Click to view on Google Maps"
        >
          {latitude}° N, {longitude}° W
        </p>
      </div>
    </footer>
  );
};

export default Footer;
