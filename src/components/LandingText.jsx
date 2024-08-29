import { useState, useEffect } from "react";
import pic1 from "../assets/profile-pic.jpg";
import pic2 from "../assets/profile-pic2.jpg";

const LandingText = () => {
  const [greeting, setGreeting] = useState("Mingalarbar");
  const [selectedChars, setSelectedChars] = useState(0);
  const [phase, setPhase] = useState("initial"); // "initial", "selecting", "selected", "deleting", "typing", "complete"
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (phase === "initial") {
      const timer = setTimeout(() => setPhase("selecting"), 1000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "selecting") {
      if (selectedChars < greeting.length) {
        const timer = setTimeout(
          () => setSelectedChars((prev) => prev + 1),
          100
        );
        return () => clearTimeout(timer);
      } else {
        setPhase("selected");
      }
    }
  }, [phase, selectedChars, greeting.length]);

  useEffect(() => {
    if (phase === "selected") {
      const timer = setTimeout(() => setPhase("deleting"), 1000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "deleting") {
      if (greeting.length > 0) {
        const timer = setTimeout(() => {
          setGreeting((prev) => prev.slice(0, -1));
          setSelectedChars((prev) => prev - 1);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        setPhase("typing");
      }
    }
  }, [phase, greeting]);

  useEffect(() => {
    if (phase === "typing") {
      const newGreeting = "Hello";
      if (greeting.length < newGreeting.length) {
        const timer = setTimeout(() => {
          setGreeting((prev) => newGreeting.slice(0, prev.length + 1));
        }, 150);
        return () => clearTimeout(timer);
      } else {
        setPhase("complete");
      }
    }
  }, [phase, greeting]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-8 md:py-16 lg:py-24">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between">
        <div className="md:max-w-3xl mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#9d7cd8]">
            <span className="relative">
              {greeting.split("").map((char, index) => (
                <span key={index} className="relative z-10">
                  {char}
                </span>
              ))}
              <span
                className="absolute top-0 left-0 h-full bg-[#565f89] transition-all duration-100 z-0"
                style={{ width: `${(selectedChars / greeting.length) * 100}%` }}
              />
            </span>
            {phase === "typing" && <span className="animate-blink">|</span>}
            {"👋 I'm Wai Yan."}
          </h1>
          <p className="text-xl md:text-2xl mb-4 tracking-wide text-[#c0caf5]">
            Online, I go by Zteezy/ztz. I'm a Software Engineer and incoming
            Master's student focusing on distributed systems and web
            applications.
          </p>
          <p className="text-xl md:text-2xl tracking-wide text-[#c0caf5]">
            I've built enterprise-level systems and contributed to{" "}
            <a
              href="https://www.netlinktrust.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9d7cd8]"
            >
              NetLink Trust
            </a>{" "}
            in Singapore.
          </p>
        </div>
        <div className="md:ml-8">
          <div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden  relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={pic1}
              alt="Profile"
              className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-2000 ease-in-out"
              style={{
                opacity: isHovered ? 0 : 1,
              }}
            />
            <img
              src={pic2}
              alt="Alt-Profile"
              className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-2000 ease-in-out"
              style={{
                opacity: isHovered ? 1 : 0,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingText;
