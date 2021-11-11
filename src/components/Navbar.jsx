import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Navbar() {
  return (
    <div className="w-full bg-fondo text-white flex justify-around py-3  items-center font-azeret text-xl">
      <div>D</div>
      <div className="items-center">
        <li className="flex items-center">
          <ul className="mx-5">Resume</ul>
          <ul className="mx-5">About</ul>
          <ul className="mx-5 ">
            <a
              className="text-3x1"
              href="https:/github.com/dylangavilan"
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
