import React from "react";
import Link from "next/link";
import { GitHub, Instagram, LinkedIn, Public, Twitter } from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <div className=" text-grey-600 grid grid-cols-1 gap-y-10 bg-primary-light shadow-light-card px-8 py-14 md:grid-cols-3 font-custom">
        <div className="flex flex-col text-primary-white">
          <h2 className="font-head bg-primary-color text-primary-white text-md w-28 text-center border-2 p-2 rounded-xl shadow-light-card">
            Periodically
          </h2>
          <p className="text-md mt-2">
            "The place where you can learn anything and everything about elements by which our universe is made of."
          </p>
        </div>
        <div className="flex text-xs flex-col  text-primary-white">
          <h5 className="font-bold text-center mb-8 text-lg  hover:text-primary-color transition">Social</h5>
          <div className="flex justify-center">
            <Link href={"https://github.com/HarshKumarraghav"} target="_blank">
              <a target="_blank">
                <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary rounded-lg hover:-translate-y-4">
                  <GitHub />
                </div>
              </a>
            </Link>
            <Link href={"https://www.linkedin.com/in/harsh-kumar-raghav-7285311b9/"} target="_blank">
              <a target="_blank">
                <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary rounded-lg hover:-translate-y-4">
                  <LinkedIn />
                </div>
              </a>
            </Link>
            <Link href={"https://www.instagram.com/"} target="_blank">
              <a target="_blank">
                <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary rounded-lg hover:-translate-y-4">
                  <Instagram />
                </div>
              </a>
            </Link>
            <Link href={"https://twitter.com/_Harsh_raghav_"} target="_blank">
              <a target="_blank">
                <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary rounded-lg hover:-translate-y-4">
                  <Twitter />
                </div>
              </a>
            </Link>
            <Link href={"https://harshraghav.me"} target="_blank">
              <a target="_blank">
                <div className="hover:text-primary-color m-2 mr-4 active:scale-90 hover:scale-95 transition shadow-light-card p-3 bg-primary rounded-lg hover:-translate-y-4">
                  <Public />
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div className="flex text-xs flex-col text-primary-white">
          <h5 className="font-bold text-lg  text-center mb-2 hover:text-primary-color transition">About Me</h5>
          <h2 className="text-sm">
            Front-end Developer intern at
            <Link href={"http://botsfusionai.com"} target="_blank">
              <a target="_blank">
                <span className="text-primary-color"> Bots Fusion AI</span>
              </a>
            </Link>
            , Skilled at Algorithms, C (Programming Language), C++, and Video Editing. Strong media and communication
            professional with a Bachelor's degree focused in Information Technology from Gautam buddha University.
          </h2>
        </div>
      </div>
      <div className="display flex items-center flex-col bg-primary text-primary-white">
        <h5 className="text-md">Create with ❤️ by "Harsh Raghav"</h5>
        <h5 className="text-[12px]">Ⓒ2022 Raghav inc. All rights reserved. </h5>
      </div>
    </>
  );
};

export default Footer;
