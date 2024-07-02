import React, { useState } from "react";
import Wave from "../../assets/vector-wave.png";
import Polygon from "../../assets/polygon.png";
import { MdAccountCircle } from "react-icons/md";
import Popup from "../Popup/Popup";

const BgStyle = {
  backgroundImage: `url(${Polygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const About = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div style={BgStyle} className="">
        <div className="container py-20 space-y-8">
          <h1 className="text-white text-center pt-20 text-3xl font-semibold tracking-wider ">
            About Us
          </h1>
          <div className="bg-white/80 p-10 space-y-10">
            <p className="text-sm text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="flex items-center justify-center ">
              <button
                onClick={handleShow}
                className="flex justify-center items-center text-white gap-1 bg-secondary text-lg px-3 py-1 hover:scale-105 duration-300"
              >
                <MdAccountCircle className="size-[25px]" />
                My Account
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full">
          <img src={Wave} alt="" className="mx-auto w-full" />
        </div>
      </div>
      {show && <Popup handleShow={handleShow} />}
    </>
  );
};

export default About;
