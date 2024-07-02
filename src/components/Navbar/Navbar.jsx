import React, { useState } from "react";
import { FaUser, FaFacebook, FaCaretDown } from "react-icons/fa";
import Popup from "../Popup/Popup";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "About",
    link: "#",
  },
  {
    id: 3,
    name: "Contact",
    link: "#",
  },
];

const DropdownLink = [
  {
    id: 1,
    name: "Vegetables",
    link: "#",
  },
  {
    id: 2,
    name: "Fruits",
    link: "#",
  },
  {
    id: 3,
    name: "Grains",
    link: "#",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [nav, setNav] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleNav = () => {
    setNav((prevNav) => (prevNav = !nav));
    console.log(nav);
  };

  return (
    <>
      <div className=" bg-white shadow-xl">
        <motion.div
          initial={{ x: "-50px", opacity: 0 }}
          animate={{ x: "0px", opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container flex items-center  justify-between py-4 sm:py-5"
        >
          {/*LOGO SECTION*/}
          <motion.div className="text-3xl font-bold">Logo</motion.div>

          {/*NavLINKS SECTION*/}
          <motion.ul className="hidden sm:flex sm:items-center sm:gap-8 lg:gap-10 ">
            {NavLinks.map((links) => (
              <li key={links.id}>
                <a
                  href={links.link}
                  className="inline-block font-semibold hover:text-primary sm:text-sm lg:text-lg"
                >
                  {links.name}
                </a>
              </li>
            ))}

            {/*Dropdown SECTION*/}
            <li className="group cursor-pointer ">
              <a
                href=""
                className="flex items-center justify-center gap-[2px] font-semibold hover:text-primary sm:text-sm lg:text-lg"
              >
                Dropdown
                <span>
                  <FaCaretDown className="duration-300 group-hover:rotate-180" />
                </span>
              </a>

              {/*Dropdown Pop up SECTION*/}
              <div className="absolute z-[99999] hidden w-[200px] bg-white p-2 text-black shadow-md group-hover:block">
                <ul className="">
                  {DropdownLink.map((dropLinks) => (
                    <li key={dropLinks.id}>
                      <a
                        href={dropLinks.link}
                        className="inline-block w-full rounded-md p-2 text-xl hover:bg-primary/20 sm:text-sm"
                      >
                        {dropLinks.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/*LOGIN BUTTON SECTION*/}
            <li>
              <button
                onClick={handleShow}
                className="flex h-[40px] items-center gap-1 bg-secondary px-4 py-1 font-[400] text-white duration-300 hover:scale-105 sm:text-sm lg:text-lg"
              >
                <FaUser />
                <span>My Account</span>
              </button>
            </li>
          </motion.ul>
          <div
            onClick={handleNav}
            className="cursor-pointer text-4xl sm:hidden"
          >
            {nav ? (
              <IoCloseSharp className="text-secondary" />
            ) : (
              <IoMdMenu className="text-secondary" />
            )}
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-0 h-full w-[50%] border-r-gray-900 bg-black/90 text-white duration-500 ease-in-out md:hidden"
                : "fixed left-[-100%]"
            }
          >
            <div>
              <ul className="mt-16 flex flex-col gap-3 p-5">
                {NavLinks.map((links) => (
                  <li key={links.id}>
                    <a
                      href={links.link}
                      className="inline-block font-semibold hover:text-primary sm:text-sm lg:text-lg"
                    >
                      {links.name}
                    </a>
                  </li>
                ))}

                {/*Dropdown SECTION*/}
                <li className="group cursor-pointer ">
                  <a
                    href=""
                    className="flex items-center justify-start gap-[2px] font-semibold hover:text-primary sm:text-sm lg:text-lg"
                  >
                    Dropdown
                    <span>
                      <FaCaretDown className="duration-300 group-hover:rotate-180" />
                    </span>
                  </a>

                  {/*Dropdown Pop up SECTION*/}
                  <div className="absolute z-[99999] hidden w-[200px] bg-white p-2 text-black shadow-md group-hover:block">
                    <ul className="">
                      {DropdownLink.map((dropLinks) => (
                        <li key={dropLinks.id}>
                          <a
                            href={dropLinks.link}
                            className="inline-block w-full rounded-md p-2 text-xl hover:bg-primary/20 sm:text-sm"
                          >
                            {dropLinks.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                {/*LOGIN BUTTON SECTION*/}
                <li>
                  <button
                    onClick={handleShow}
                    className="flex h-[40px] items-center gap-0 bg-secondary px-1 py-2 text-sm font-[400] text-white duration-300 hover:scale-105 "
                  >
                    <FaUser />
                    <span>My Account</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {show && <Popup handleShow={handleShow} />}
    </>
  );
};

export default Navbar;
