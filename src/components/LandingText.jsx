import { useState, useEffect } from "react";

const LandingText = () => {
  const [greeting, setGreeting] = useState("Mingalarbar");
  const [selectedChars, setSelectedChars] = useState(0);
  const [phase, setPhase] = useState("initial"); // "initial", "selecting", "selected", "deleting", "typing", "complete"

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
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
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
          Online, I go by Zteezy/ztz. I'm a Software Engineer currently
          specializing in Distributed Systems, with a strong interest in
          Quantitative Finance and Mathematics.
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
          in Singapore, and led the development of a{" "}
          <a
            href="https://github.com/zteezy19/CSIT321-FYP"
            target="_blank"
            className="text-[#9d7cd8]"
          >
            healthcare application
          </a>{" "}
          in a team. As a self-taught trader, I made significant profits in
          cryptocurrencies, focusing on assets in Solana and Ethereum.
        </p>
      </div>
    </section>
  );
};

export default LandingText;
