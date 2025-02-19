import React from "react";
import "./index.css";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-4">Software Engineer | Problem Solver | Innovator</p>
      </section>
      <section className="py-20">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold">Project Title</h3>
            <p className="mt-2">Short description of the project.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <span className="bg-gray-300 px-4 py-2 rounded-full">C#</span>
          <span className="bg-gray-300 px-4 py-2 rounded-full">React</span>
          <span className="bg-gray-300 px-4 py-2 rounded-full">.NET</span>
          <span className="bg-gray-300 px-4 py-2 rounded-full">SQL</span>
        </div>
      </section>
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4">Email: your.email@example.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>
    </div>
  );
};

export default Portfolio;
