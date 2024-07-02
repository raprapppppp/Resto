import React from "react";
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt, FaRegCopyright } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="text-white mt-20">
      <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl py-10 space-y-8">
        <h1 className="text-center text-2xl  font-bold tracking-wider">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center  gap-14">
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <IoLocationSharp className="size-[40px]" />
            </div>
            <div>
              <p>94 Tiaong - Lipa Rd, Tiaong, Quezon</p>
              <p>94 Tiaong - Lipa Rd, Tiaong, Quezon</p>
              <p>94 Tiaong - Lipa Rd, Tiaong, Quezon</p>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <IoMailSharp className="size-[40px]" />
            </div>
            <div>
              <p>Kulawo@gmail.com</p>
              <p>Kulawo@gmail.com</p>
              <p>Kulawo@gmail.com</p>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <FaPhoneAlt className="size-[40px]" />
            </div>
            <div>
              <p>+63 9516232404 - Sale Services</p>
              <p>+63 9516232404 - Sale Services</p>
              <p>+63 9516232404 - Sale Services</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center border-t-[2px] p-4">
          <div className="flex  items-center gap-1">
            <FaRegCopyright />
            <p>Copyright 2024</p>
          </div>
          <div className="flex  items-center gap-5">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
