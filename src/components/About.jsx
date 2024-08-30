import React from "react";
import { FaReact, FaNode, FaJs } from "react-icons/fa";
import {
  SiTypescript,
  SiCsharp,
  SiNextdotjs,
  SiNeovim,
  SiGo,
  SiCplusplus,
  SiPython,
  SiNumpy,
  SiRust,
  SiZig,
  SiC,
} from "react-icons/si";

const TechIcon = ({ Icon }) => (
  <Icon className="text-4xl text-[#c0caf5] hover:text-[#bb9af7] transition-colors duration-300" />
);

const About = () => {
  return (
    <section id="about" className="py-10 bg-[#1a1b26]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-[#9d7cd8]">About Me</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            My Journey
          </h2>
          <p className="text-[#c0caf5] mb-4">
            My programming journey began unexpectedly during my Electrical &
            Electronics engineering studies in Singapore. A C# class ignited my
            passion for coding - it was truly love at first byte. This spark led
            me to dive into web development, mastering JavaScript, Python, and
            CSS, before embracing React.
          </p>
          <p className="text-[#c0caf5] mb-4">
            As of late 2024, I'm setting my sights on a Master's Degree in
            Australia, aiming to further hone my skills and pave the way for my
            future goals in the tech industry.
          </p>
          <p className="text-[#c0caf5]">
            Beyond coding, I'm a practicing Theravada Buddhist who enjoys
            challenging video games like{" "}
            <a
              href="https://www.dota2.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7dcfff] hover:underline"
            >
              DOTA 2
            </a>{" "}
            and Elden Ring. I'm also on a journey to master Mandarin, aiming for
            fluency by 30! My Dota journey reached its pinnacle at 8800 MMR on
            the SEA Immortal Leaderboards, forging deep friendships and
            unforgettable memories along the way. While that competitive chapter
            has closed, I'm grateful for the experiences and lessons it
            provided. Now, I've channeled that same drive and determination into
            my software engineering career, eagerly anticipating the challenges
            and triumphs that lie ahead.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            Technical Toolkit
          </h2>
          <p className="text-[#c0caf5] mb-4">
            My expertise lies in crafting scalable, responsive, and visually
            appealing web applications. From e-commerce platforms to data
            manipulation with Python, I've honed a versatile skill set that
            includes:
          </p>
          <div className="flex flex-wrap gap-6 text-4xl text-[#c0caf5]">
            <TechIcon Icon={FaReact} color="#00d8ff" />
            <TechIcon Icon={SiNextdotjs} color="#ffffff" />
            <TechIcon Icon={FaJs} color="#f7df1e" />
            <TechIcon Icon={SiTypescript} color="#007acc" />
            <TechIcon Icon={FaNode} color="#339933" />
            <TechIcon Icon={SiCsharp} color="#239120" />
            <TechIcon Icon={SiGo} color="#00ADD8" />
            <TechIcon Icon={SiPython} color="#3776AB" />
            <TechIcon Icon={SiNumpy} color="#013243" />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            Aspirations and Goals
          </h2>
          <p className="text-[#c0caf5] mb-4">
            My current ambition is to break into quant finance as a Quantitative
            Software Engineer. This goal is fueled by my successful experience
            as a self-taught trader during the COVID lockdowns, where I made
            significant profits trading assets on Solana and Ethereum.
          </p>
          <p className="text-[#c0caf5] mb-4">
            To achieve this, I'm diving deep into:
          </p>
          <ul className="list-disc list-inside text-[#c0caf5] mb-4 pl-4">
            <li>Lower-level programming and computer systems</li>
            <li>C++ mastery</li>
            <li>Advanced mathematics for quantitative finance</li>
          </ul>
          <p className="text-[#c0caf5] mb-4">
            This journey isn't just about becoming a quant; it's about gaining a
            comprehensive understanding of computer systems at their core.
          </p>
          <div className="flex flex-wrap gap-6 text-4xl text-[#c0caf5]">
            <TechIcon Icon={SiCplusplus} color="#00599C" />
            <TechIcon Icon={SiNeovim} color="#57A143" />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            Future Horizons
          </h2>
          <p className="text-[#c0caf5] mb-4">
            Looking ahead, I'm excited about:
          </p>
          <ul className="list-disc list-inside text-[#c0caf5] mb-4 pl-4">
            <li>
              Developing a video game to enhance my systems programming skills
            </li>
            <li>Contributing to or creating a game engine</li>
            <li>
              Becoming a T-shaped developer with deep specialization in my
              chosen field
            </li>
            <li>
              Learning C to deepen my understanding of low-level programming
            </li>
            <li>
              Exploring Rust and Zig for systems programming and
              performance-critical applications
            </li>
          </ul>
          <p className="text-[#c0caf5]">
            Inspired by programming legends like John Carmack, I dream of one
            day contributing to groundbreaking projects at companies like Valve.
          </p>
          <div className="flex flex-wrap gap-6 text-4xl text-[#c0caf5] mt-4">
            <TechIcon Icon={SiC} color="#A8B9CC" />
            <TechIcon Icon={SiRust} color="#000000" />
            <TechIcon Icon={SiZig} color="#F7A41D" />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            My Development Environment
          </h2>
          <p className="text-[#c0caf5]">
            Fun Fact: The color palette of this portfolio is inspired by my
            favorite editor theme:{" "}
            <a
              href="https://github.com/enkia/tokyo-night-vscode-theme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7dcfff] hover:underline"
            >
              Tokyo Night
            </a>
            ! I code with the{" "}
            <a
              href="https://www.nerdfonts.com/font-downloads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7dcfff] hover:underline"
            >
              Roboto Mono
            </a>{" "}
            nerdfont, and primarily work on an Apple Silicon MacBook, preferring
            its Unix-based OS for an optimal developer experience. I'm also open
            and interested in trying out Arch Linux in the future.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            Beyond Coding
          </h2>
          <p className="text-[#c0caf5]">
            When I'm not immersed in code, I enjoy diving into a wide range of
            fiction. From Haruki Murakami's "Norwegian Wood" to Frank Herbert's
            "Dune", I find inspiration and relaxation in diverse literary
            worlds. I'm also an avid reader of Japanese light novels and manga,
            which fuel my imagination and creativity.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            Resource Dump
          </h2>
          <p className="text-[#c0caf5] mb-4">
            Here are some resources I've found invaluable and some in my current
            reading list:
          </p>
          <ul className="list-disc list-inside text-[#c0caf5] mb-4 pl-4">
            <li>
              <a
                href="https://www.youtube.com/watch?v=cQP8WApzIQQ&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                MIT 6.824 Distributed Systems
              </a>
            </li>
            <li>
              <a
                href="https://missing.csail.mit.edu/2020/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                MIT The Missing Semester of Your CS Education
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.sg/Operating-Systems-Three-Easy-Pieces/dp/198508659X"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                Operating Systems: Three Easy Pieces
              </a>{" "}
              (Chapters 1 to 32)
            </li>
            <li>
              <a
                href="https://www.amazon.sg/dp/1098113160?ref_=mr_referred_us_sg_sg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                C++ Software Design: Design Principles and Patterns for
                High-Quality Software
              </a>{" "}
              by Klaus Iglberger
            </li>
            <li>
              <a
                href="https://www.amazon.sg/Go-Cookbook-Expert-Solutions-Commonly/dp/1098122119"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                Go Cookbook: Expert Solutions for Commonly Needed Go Tasks
              </a>{" "}
              by Sau Sheong Chang
            </li>
            <li>
              <a
                href="https://www.amazon.sg/TCP-IP-Illustrated-1-Protocols/dp/0201633469"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                TCP/IP Illustrated
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.sg/Beautiful-Core-Guidelines-Writing-Clean/dp/0137647840"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                Beautiful C++
              </a>
            </li>
            <li>
              <a
                href="https://neetcode.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                NeetCode.io
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.sg/Inside-Machine-Introduction-Microprocessors-Architecture/dp/1593276680"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                Inside the Machine
              </a>{" "}
              by Jon Stokes
            </li>
            <li>
              <a
                href="https://www.amazon.sg/Concurrency-Action-2E-Anthony-Williams-dp-1617294691/dp/1617294691/ref=dp_ob_title_bk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                C++ Concurrency in Action
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.sg/Art-Doing-Science-Engineering-Learning/dp/1732265178"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                The Art of Doing Science and Engineering: Learning to Learn
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=m8C0Cq9Uv9o&t=103s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7dcfff] hover:underline"
              >
                Kickstart nvim by TJ DeVries: Great Starting Point for Beginners
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-[#24283b] p-6 rounded-lg shadow-lg">
          <p className="text-[#ff757f] italic text-xl text-center">
            "We must all suffer one of two things: the pain of discipline or the
            pain of regret and disappointment." — Jim Rohn
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
