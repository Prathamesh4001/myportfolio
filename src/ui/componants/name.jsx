import React from 'react';

export const Name = () => {
  return (
    <div>
      <section
        id="hero"
        className="h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center text-center"
      >
        
        <div className="w-full flex flex-col items-center text-center">
          <div>
            <img src="/Prof.png" alt="Profile" className="w-40 h-40 rounded-full animate-bounce" />
          </div>
          <h2 className="my-4 text-lg hover:underline">
            Hello! I'm Prathamesh, a Front-End Web Developer.
          </h2>
        </div>

        <h4 className="text-4xl md:text-6xl font-bold mb-4 mt-40">Welcome to My Portfolio</h4>
        <p className="text-lg md:text-2xl mb-8">Showcasing my projects and skills.</p>

        
        <div className="space-x-4">
          <a href="#projects" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg">
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white hover:bg-white hover:text-gray-800 rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};
