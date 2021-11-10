import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Navbar() {
  return (
    <div className="w-full bg-fondo text-white flex justify-around py-3  items-center font-azeret text-xl">
      <div>
        <a className="font-medium">D</a>
      </div>
      <div className="items-center">
        <li className="flex items-center">
          <ul className="mx-5">
            <a href="#">Resume</a>
          </ul>
          <ul className="mx-5">
            <a href="#">About</a>
          </ul>
          <ul className="mx-5 ">
            <a
              className="text-3x1"
              href="https:/github.com/dylangavilan"
              target="_blank"
            >
              <AiFillGithub className="text-5x1" />
            </a>
          </ul>
          <ul className="mx-5">
            <a href="https://linkedin.com/in/dylangavilan" target="_blank">
              <AiFillLinkedin />
            </a>
          </ul>
        </li>
      </div>
    </div>
  );
}
