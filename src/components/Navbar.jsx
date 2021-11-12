import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import cv from "../resume/cv-dylangavilan.pdf";
export default function Navbar() {
  return (
    <div className="text-white  py-3  font-azeret text-xl border-solid border-b-2 border-gray-500 ">
      <div className="items-center">
        <ul className="flex justify-end items-center md:mx-16 mx-4">
          <li className="mx-10 hover:text-rosa hover:text-2xl">
            <a href={cv} target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
          <li className="mx-10 hover:text-rosa hover:text-2xl">
            <a href="#about">About</a>
          </li>
          <li className="mx-10 ">
            <a
              className="text-3x1"
              href="https://github.com/dylangavilan"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="text-5x1  hover:text-rosa hover:text-2xl" />
            </a>
          </li>
          <li className="mx-10">
            <a
              href="https://linkedin.com/in/dylangavilan"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin className="text-5x1 hover:text-rosa hover:text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
