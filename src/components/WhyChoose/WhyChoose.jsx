import React from "react";
import { FaBus } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <div className="py-14 md:py-28 bg-gray-50">
      <div className="container ">
        <div className="flex flex-col items-center gap-20">
          <h1 className="text-2xl font-semibold text-dark tracking-wider">
            Why Choose Us
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4 text-center text-sm">
            <div className="flex flex-col justify-center items-center gap-1 ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="rotate-90 text-xl font-semibold text-primary translate-x-[7px]">
                ....
              </p>
              <FaBus className="text-primary w-7 h-auto" />
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <FaBus className="text-secondary w-7 h-auto" />
              <p className="rotate-90 text-xl font-semibold text-secondary translate-x-2">
                ....
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="rotate-90 text-xl font-semibold text-primary translate-x-2">
                ....
              </p>
              <FaBus className="text-primary w-7 h-auto " />
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
              <FaBus className="text-secondary  w-7 h-auto " />
              <p className="rotate-90 text-xl font-semibold text-secondary translate-x-2">
                ....
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
