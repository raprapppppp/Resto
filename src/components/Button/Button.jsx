import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = () => {
  return (
    <div className="flex items-center text-white group ">
      <button className="py-2 px-3 bg-primary rounded-l-lg">
        Choose Your Meal Plan
      </button>
      <FaArrowRight className="w-[40px] h-[40px] rounded-r-lg bg-primaryDark p-[7px] group-hover:translate-x-2 duration-200" />
    </div>
  );
};

export default Button;
