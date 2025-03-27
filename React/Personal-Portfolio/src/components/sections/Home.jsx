import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const Home = () => {
  return (
    <RevealOnScroll>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        {/* <RevealOnScroll> */}
        <div className="text-center z-10 px-4">
          <h1 className="mt-10 text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Zakaria Khan
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            qui dolore delectus magnam laborum! Beatae esse labore sunt
            numquam,consequuntur cupiditate
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
           hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* </RevealOnScroll> */}
      </section>
    </RevealOnScroll>
  );
};

export default Home;
