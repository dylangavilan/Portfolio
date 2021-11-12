import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="h-screen text-center ">
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
          <a href="#about">
            {" "}
            <button className="px-8 mb-4 font-azeret border-solid border-white border-2 py-1 mx-3 hover:bg-white hover:font-semibold hover:text-black text-white rounded-sm tracking-wider">
              About
            </button>
          </a>
          <a href="#skills">
            {" "}
            <button className="mb-4 font-azeret hover:bg-white hover:font-semibold hover:text-black  border-solid border-white border-2 py-1 mx-3 px-2 text-white rounded-sm tracking-wider">
              Projects & Skills
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
