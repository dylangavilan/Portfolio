import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import cv from "../resume/cv-dylangavilan.pdf";
export default function Navbar() {
  return (
    <div className="w-full bg-fondo text-white flex justify-around py-3  items-center font-azeret text-xl border-solid border-b-2 border-gray-500">
      <div>D</div>
      <div className="items-center">
        <li className="flex items-center">
          <ul className="mx-5">
            <a href={cv} target="_blank" rel="noreferrer">
              Resume
            </a>
          </ul>
          <ul className="mx-5">
            <a href="#about">About</a>
          </ul>
          <ul className="mx-5 ">
            <a
              className="text-3x1"
              href="https://github.com/dylangavilan"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="text-5x1" />
            </a>
          </ul>
          <ul className="mx-5">
            <a
              href="https://linkedin.com/in/dylangavilan"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </ul>
        </li>
      </div>
    </div>
  );
}
