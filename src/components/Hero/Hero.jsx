import React from "react";
import Button from "../Button/Button";
import HeroImg from "../../assets/hero.png";
import HeroBg from "../../assets/heroBg.png";
import { motion } from "framer-motion";
const BgStyle = {
  background:
    "linear-gradient(90deg, rgba(232,209,228,1) 0%, rgba(241,219,236,1) 0%, rgba(232,212,231,1) 8%, rgba(223,196,220,1) 27%, rgba(231,190,227,1) 33%, rgba(228,191,225,1) 35%, rgba(221,192,219,1) 45%, rgba(200,226,231,1) 100%)",
};
const Hero = () => {
  return (
    <div style={BgStyle} className="w-100%">
      <div className="container flex  py-16 sm:py-0 ">
        <div className="grid min-h-[600px] grid-cols-1 place-items-center gap-4 sm:grid-cols-2">
          <motion.div className="order-2 flex flex-col gap-7 sm:order-1">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-5xl"
            >
              Fresh & Healthy Meal Plan{" "}
              <span className="font-cursive text-7xl text-secondary">
                Delivery
              </span>{" "}
              in Miame
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl lg:pr-64"
            >
              Delicious meals delivered to your door from $100 per week
            </motion.p>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 sm:order-2"
          >
            <img src={HeroImg} alt="" className="w-full sm:scale-100 " />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
