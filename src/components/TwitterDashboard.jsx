import profilePicture from "../assets/twitter-dp.jpg";

const TwitterDashboard = () => {
  return (
    <div className="group hover:bg-[#24263b] transition-colors duration-300">
      <a
        href="https://x.com/ztzdotdev"
        target="_blank"
        rel="noopener noreferrer"
        className="block py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 cursor-pointer"
      >
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={profilePicture}
              alt="Profile picture"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-xl font-bold">
                X{" "}
                <span className="text-sm font-normal">(formerly Twitter)</span>
              </p>
              <p className="text-[#1DA1F2] font-semibold">@ztzdotdev</p>
            </div>
          </div>

          <div className="hidden md:block flex-grow px-4 max-w-2xl">
            <p className="text-lg font-semibold mb-2 text-left">
              " 2023 was a warmup 2024 im lockin in "
            </p>
            <p className="mt-2 text-sm text-gray-500 text-left">
              4:48 PM · Dec 25, 2023
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[#c53b53] text-2xl font-bold">Joined</p>
            <p className="text-[#ff757f] text-xl font-semibold">Aug 2015</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default TwitterDashboard;
