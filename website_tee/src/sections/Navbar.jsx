import React from "react";
import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="grid gap-4 grid-cols-2 px-4 py-4 sm:grid-cols-12">
      <img src={Logo} className="w-20 sm:col-span-2" />
      <ul className="flex w-full items-center gap-2 sm:gap-6 sm:justify-end sm:col-span-10">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li className="hidden sm:block">
          <a href="#">Playground</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Chat</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
