import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="pb-16 pt-32">
      <div className="container flex items-center">
        <div className="mx-auto grid w-[768px] gap-8">
          <Link
            to="/users"
            className="inline-flex w-max items-center gap-1 text-gray-900 hover:text-purple-600"
          >
            <HiOutlineArrowLeft className="text-[1.1rem]" />
            <span className="font-semibold">Back to list</span>
          </Link>

          <div className="grid gap-6">
            <div className="text-center">
              <h1 className="sectio-title text-[48px] font-extrabold">
                Details User 1
              </h1>
              <p className="text-[18px] font-bold text-gray-900">
                Hi, username
              </p>
            </div>

            <ul className="flex flex-col gap-2">
              <li className="inline-flex items-center gap-1 text-gray-900">
                <p className="font-semibold">Name:</p>
                <p className="font-semibold">Fajar Fadillah Agustian</p>
              </li>
              <li className="inline-flex items-center gap-1 text-gray-900">
                <p className="font-semibold">Name:</p>
                <p className="font-semibold">Fajar Fadillah Agustian</p>
              </li>
              <li className="inline-flex items-center gap-1 text-gray-900">
                <p className="font-semibold">Name:</p>
                <p className="font-semibold">Fajar Fadillah Agustian</p>
              </li>
              <li className="inline-flex items-center gap-1 text-gray-900">
                <p className="font-semibold">Name:</p>
                <p className="font-semibold">Fajar Fadillah Agustian</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
