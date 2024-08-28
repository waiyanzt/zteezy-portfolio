import React from "react";
import { FaReact, FaNode, FaJs } from "react-icons/fa";
import {
  SiTypescript,
  SiCsharp,
  SiNextdotjs,
  SiNeovim,
  SiGo,
} from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-[#9d7cd8]">About Me</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            My Journey
          </h2>
          <p className="text-[#c0caf5] mb-4">
            I moved to Singapore as a teenager and initially studied Electrical
            & Electronics engineering. One of the classes I took taught basic
            programming in C#. It was truly love at first byte. I quickly
            learned to build web applications with JavaScript and CSS, then
            moved on to React. The more I learned and absorbed, the more
            unquenchable my thirst for knowledge became, and the happier I felt.
          </p>
          <p className="text-[#c0caf5] mb-4">
            I like to believe I had found my true calling - to build things
            people will enjoy using and to make my family proud. I'm embracing a
            journey of lifelong learning, and the world has become a vibrant and
            colorful place. Computers have been my companion since childhood,
            from playing C&C Red Alert 2 on my uncle's computer to now aspiring
            to become a dev working on things of great importance.
          </p>
          <p className="text-[#c0caf5]">
            I'm a practicing Theravada Buddhist, and I enjoy challenging video
            games like DOTA 2 and Elden Ring. I'm also currently learning
            Mandarin and hope to be fluent by the time I'm 30!
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            Current Skills
          </h2>
          <p className="text-[#c0caf5] mb-4">
            My main skillset involves building scalable, responsive, and
            aesthetically pleasing web applications, from e-commerce platforms
            to data manipulation with Python and its powerful libraries.
          </p>
          <div className="flex flex-wrap gap-4 text-4xl text-[#c0caf5]">
            <FaReact title="React" />
            <SiNextdotjs title="Next.js" />
            <FaJs title="JavaScript" />
            <SiTypescript title="TypeScript" />
            <FaNode title="Node.js" />
            <SiCsharp title="C#" />
            <SiGo title="Golang" />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            Current Goals
          </h2>
          <p className="text-[#c0caf5] mb-4">
            I'm currently pursuing a career in quant finance as a quant SWE.
            This goal stems from my experience as a self-taught trader, where I
            made significant profits trading assets on Solana and Ethereum
            during the COVID lockdowns.
          </p>
          <p className="text-[#c0caf5]">
            I'm also working on fully transitioning my workflow and attempting
            to make Neovim my main editor of choice.{" "}
            <SiNeovim className="inline text-2xl ml-2" title="Neovim" />
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            Future Aspirations
          </h2>
          <p className="text-[#c0caf5] mb-4">
            In the future, I want to work on a video game project to improve my
            systems programming skills. The reason is simple: John Carmack is
            one of the programmers I look up to, and my dream endgame company is
            Valve. I aspire to contribute to or create a game engine, furthering
            my journey as a T-shaped developer with deep specialization in my
            chosen field.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#7aa2f7]">
            Fun Fact
          </h2>
          <p className="text-[#c0caf5]">
            The color palette chosen for this portfolio webpage is inspired by
            my favorite editor theme: Tokyo Night! It's a testament to my love
            for clean, aesthetically pleasing design in both my code and my work
            environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
