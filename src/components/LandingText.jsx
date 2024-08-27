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
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-between">
      <div className="max-w-3xl ml-[5vw]">
        <h1 className="text-4xl font-bold mb-4 text-[#9d7cd8]">
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
        <p className="text-2xl mb-4 tracking-wide text-[#c0caf5]">
          Online, I go by Zteezy/ztz. I'm a Software Engineer focusing on
          distributed systems and web applications.
        </p>
        <p className="text-2xl tracking-wide text-[#c0caf5]">
          I've built enterprise-level systems, contributed to{" "}
          <a
            href="https://www.netlinktrust.com/"
            target="_blank"
            className="text-[#9d7cd8]"
          >
            NetLink Trust
          </a>{" "}
          in Singapore, and made significant profits in cryptocurrency trading,
          focusing on Solana and Ethereum during the COVID-19 lockdowns. I'm now
          preparing to study a Master's in Advanced Computing in Australia to
          pursue a career in Quant Finance or Big Tech.
        </p>
      </div>
      {/* Modified image section */}
      <div className="mr-[5vw]">
        <div
          className="w-64 h-64 rounded-full overflow-hidden cursor-pointer relative"
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
    </section>
  );
};

export default LandingText;
