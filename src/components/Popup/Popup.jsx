import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Popup = ({ handleShow }) => {
  return (
    <>
      <div className="relative z-50">
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm">
          <div className="fixed bg-white w-[300px] rounded-md shadow-md duration-200 p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-dark">Login</h1>
              <IoCloseSharp
                className="text-2xl cursor-pointer"
                onClick={handleShow}
              />
            </div>

            <div className="mt-4 space-y-3">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1"
              />

              <button className="w-full bg-primary rounded-md text-center text-white py-1 text-sm font-semibold hover:scale-105 duration-300">
                Login Now
              </button>
            </div>

            <div className="mt-3 flex flex-col items-center gap-2 font-semibold mb-2">
              <p>or Login with</p>
              <div className="flex items-center justify-center gap-3 text-3xl">
                <FaFacebook className="cursor-pointer hover:text-blue-600 duration-200" />
                <SiGmail className="cursor-pointer hover:text-red-600 duration-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
