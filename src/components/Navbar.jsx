import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      id="navbar"
      className="text-white flex justify-between items-center px-5 py-5 md:px-20 lg:px-40"
    >
      <div className="Logo">
        <h1 className="text-2xl md:text-4xl font-bold">
          Logitech
        </h1>
      </div>

      <div
        className="MenuIcon md:hidden text-xl p-2 rounded-md"
        onClick={toggleMenu}
      >
        <FiMenu />
      </div>

      {isMenuOpen && (
        <div className="absolute top-12 right-0 flex flex-col md:hidden bg-black text-center w-40 rounded-md text-lg">
          <Link to={"/"} href="#" className="py-2">
            Home
          </Link>
          <Link to={"/shop"} href="#" className="py-2">
            Shop
          </Link>
          <Link to={"/about"} href="#" className="py-2">
            About
          </Link>
          <Link to={"/contact"} href="#" className="py-2">
            Contact
          </Link>
        </div>
      )}

      <div className="Links hidden md:flex md:gap-10 lg:gap-16 text-lg">
        <Link
          to={"/"}
          href="#"
          className="transform hover:scale-125 transition duration-300"
        >
          Home
        </Link>
        <Link
          to={"/shop"}
          href="#"
          className="transform hover:scale-125 transition duration-300"
        >
          Shop
        </Link>
        <Link
          to={"/about"}
          href="#"
          className="transform hover:scale-125 transition duration-300"
        >
          About
        </Link>
        <Link
          to={"/contact"}
          href="#"
          className="transform hover:scale-125 transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
