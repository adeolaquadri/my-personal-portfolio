import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white py-20 px-6 text-center" id="home">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Hi, I'm Adeola Quadri
      </h1>
      <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
        A passionate Full-Stack Web Developer building modern, scalable applications using React, Node.js, and more.
      </p>
      <a
        href="#projects"
        className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition"
      >
        View My Projects
      </a>
    </section>
  );
};

export default Hero;
