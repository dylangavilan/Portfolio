import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="h-screen bg-fondo text-center ">
      <Navbar />
      <div className="py-20">
        <div className="px-4 text-5xl text-white">
          <div className="text-4xl">
            Hi! I'm <span className="text-rosa"> Dylan Gavilan</span>
          </div>
          <div className="text-4xl py-6">
            <h3>
              {" "}
              I'm a creative fullstack developer with a great resolutive skills
            </h3>
          </div>
        </div>
        <div className="py-8">
          <button className="px-8 border-solid border-white border-2 py-1 mx-3 text-white rounded-sm tracking-wider">
            <a href="#about">About</a>
          </button>
          <button className="px-8 border-solid border-white border-2 py-1 mx-3 text-white rounded-sm tracking-wider">
            <a href="#skills"> Projects & Skills</a>
          </button>
        </div>
      </div>
    </div>
  );
}
