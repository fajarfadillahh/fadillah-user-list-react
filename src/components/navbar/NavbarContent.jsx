import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

const NavbarContent = () => {
  return (
    <div className="container flex h-24 items-center justify-between">
      <Link to="/" className="inline-flex items-center gap-[6px]">
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-green-600 to-green-400" />
        <span className="text-[20px] font-extrabold text-gray-900">
          Fadillah.
        </span>
      </Link>

      <div className="absolute inset-x-0 top-24 mx-auto w-full bg-white px-20 py-8 shadow-md md:static md:top-0 md:mx-0 md:flex md:w-auto md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none">
        <ul className="md:gap flex flex-col gap-4 text-center md:flex-row md:gap-6">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Users", "/users"],
          ].map(([name, path], index) => {
            return (
              <li key={index}>
                <Link
                  to={path}
                  className="font-semibold text-gray-900 hover:text-green-600"
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link to="/" className="button mt-4 md:mt-0">
          Get Started
        </Link>
      </div>

      <button className="cursor-pointer rounded-md p-0.5 text-[1.3rem] text-gray-900 hover:bg-green-50 focus:bg-green-200 focus:ring-[3px] focus:ring-green-600/80 focus:ring-offset-[3px] md:hidden">
        <HiOutlineMenu />
      </button>
    </div>
  );
};

export default NavbarContent;
