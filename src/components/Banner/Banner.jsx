import React from "react";
import { Apple, Kiwi, Leaf, Lemon, Tomato } from "../Banner/Fruits";
import Button from "../Button/Button";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="container relative mb-5 mt-5">
      <div className="">
        <h1 className="py-8 text-center text-2xl font-semibold tracking-wide text-dark">
          Taste the Healthy Difference
        </h1>

        <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2">
          <div className="">
            <p className="">
              Step into the virtual realm of Taste Haven, where every click
              leads you on a gastronomic journey unlike any other. As you enter
              our digital doorway, prepare to be tantalized by a symphony of
              flavors, aromas, and culinary delights that await you.
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2">
          <div></div>
          <div>
            <p>
              Navigating through our user-friendly interface, you'll find
              yourself immersed in a culinary wonderland, where every dish tells
              a story and every bite ignites the senses. Whether you're craving
              the comforting embrace of a hearty pasta dish, the exotic allure
              of Asian fusion cuisine, or the timeless elegance of a gourmet
              steak, our extensive menu caters to every palate and preference.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" mt-10 flex items-center justify-center sm:mt-14"
        >
          <Button />
        </motion.div>
      </div>
      {/* ABSOLUTE PNG */}
      <div className="z-[-1]">
        <div className="absolute hidden opacity-50 sm:-bottom-0 sm:right-20 sm:block sm:opacity-100 ">
          <img src={Apple} alt="" className="max-w-[160px]" />
        </div>
        <div className=":top-60  absolute left-36 top-52 opacity-50 sm:top-[320px]  sm:opacity-100 xl:left-[400px]">
          <img src={Kiwi} alt="" className="max-w-[160px]" />
        </div>
        <div className="absolute  -left-16 top-0 opacity-50 sm:left-0 sm:top-0 sm:opacity-100 ">
          <img src={Leaf} alt="" className="max-w-[160px]" />
        </div>
        <div className="absolute  -right-14 -top-3 opacity-50 sm:right-10 sm:top-20 sm:opacity-100">
          <img src={Lemon} alt="" className="max-w-[200px]" />
        </div>
        <div className="absolute  -bottom-[130px] -left-16 opacity-50 sm:-bottom-0  sm:left-10 sm:opacity-100">
          <img src={Tomato} alt="" className="max-w-[300px] sm:max-w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
