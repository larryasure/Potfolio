import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav 
        className={`${styles.paddingX} flex w-full items-center justify-between py-5 sticky top-0 z-20 bg-black `}
      >
        <div className=" ">
          <Link to="/" className="items-center flex gap-2">
            <span className="text-lg hover:opacity-80 duration-300">
              Lanre
              <span className="bg-linear-to-r bg-clip-text text-transparent  from-[#804dee] via-[#6b27ff] to-[#ffffff] ">
                codes
              </span>
            </span>
          </Link>
        </div>

        <ul className="hidden sm:flex sm:flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-white/70"
              } text-[18px] hover:text-white cursor-pointer duration-300 font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 "
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6  bg-linear-to-r from-[#434343] to-black  absolute top-15 right-0 mx-4 my-2 rounded-xl z-10 w-42.5 min-h-66  `}
          >
            <ul className=" flex flex-col justify-center items-center gap-4 ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-white/70"
                  }  hover:text-white cursor-pointer font-medium text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
