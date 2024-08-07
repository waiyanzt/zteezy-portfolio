const Footer = () => {
  const latitude = "37.7749";
  const longitude = "-122.4194";

  const handleLocationClick = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
      "_blank"
    );
  };
  return (
    <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
      <p>©{new Date().getFullYear()} Wai Yan. All rights reserved.</p>
      <p
        className="mt-1 cursor-crosshair hover:underline"
        onClick={handleLocationClick}
        title="Click to view on Google Maps"
      >
        {latitude}° N, {longitude}° W
      </p>
    </footer>
  );
};

export default Footer;
