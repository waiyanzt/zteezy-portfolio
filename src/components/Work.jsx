import { FiGithub } from "react-icons/fi";

const Work = () => {
  return (
    <section id="work" className="py-10 bg-[#1a1b26]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-[#9d7cd8]">💼 Projects</h1>
        <a
          href="https://github.com/zteezy19/Ztube"
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-8 transition-colors duration-300 hover:bg-[#24263b] cursor-pointer"
        >
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-[#7aa2f7] mb-4">
              Ztube
              <FiGithub className="ml-2 inline-block" size={24} />
            </h2>
            <h3 className="italic text-[#3d59a1] mb-2">
              Nextjs | TypeScript | Express | ffmpeg
            </h3>
            <p className="text-[#b4f9f8] mb-4">
              A FullStack YouTube clone implementing user auth, video uploads,
              video processing and viewing functionalities. Users can sign in,
              upload videos and guest users can view uploaded videos. Designed
              using Google Cloud and ffmpeg.
            </p>
          </div>
        </a>
        {/* You can add more project links here with the same structure */}
        <a
          href="https://github.com/zteezy19/zteezy-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-8 transition-colors duration-300 hover:bg-[#24263b] cursor-pointer"
        >
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-[#7aa2f7] mb-4">
              ZTZ Portfolio
              <FiGithub className="ml-2 inline-block" size={24} />
            </h2>
            <h3 className="italic text-[#3d59a1] mb-2">
              React | JavaScript | Express | Tailwind CSS
            </h3>
            <p className="text-[#b4f9f8] mb-4">
              Source code for this portfolio. Simple, modern and responsive!
              Scroll to the bottom for some neat features. Made in NEOVIM BTW 😎{" "}
            </p>
          </div>
        </a>
        <a
          href="https://github.com/zteezy19/CSIT321-FYP"
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-8 transition-colors duration-300 hover:bg-[#24263b] cursor-pointer"
        >
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-[#7aa2f7] mb-4">
              Medical Appointment System
              <FiGithub className="ml-2 inline-block" size={24} />
            </h2>
            <h3 className="italic text-[#3d59a1] mb-2">
              Java | Spring | React | TypeScript
            </h3>
            <p className="text-[#b4f9f8] mb-4">
              Worked with peers in uni to build this during our 3rd year.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Work;
