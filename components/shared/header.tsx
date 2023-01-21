import React, { FunctionComponent } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
const Header: FunctionComponent = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const monthArray: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="fixed w-screen z-50">
      <div className="md:text-7xl text-white text-5xl font-primary text-center py-10 bg-[#FF671F]">
        The Indian Times
      </div>
      <div className="border-b-4 text-[#06038D] font-semibold bg-white md:text-xs lg:text-lg py-1 border-t-2 border-black flex justify-evenly">
        <Link href="/">
          <div>DEV PUBLICATIONS</div>
        </Link>
        <div className=" hidden space-x-10 md:flex ">
          <Link href="/health">
            <div className=" cursor-pointer">Health</div>
          </Link>
          <Link href="/business">
            <div className=" cursor-pointer">Business</div>
          </Link>
          <Link href="/entertainment">
            <div className=" cursor-pointer">Entertainment</div>
          </Link>
          <Link href="science">
            <div className=" cursor-pointer">Science</div>
          </Link>
          <Link href="/technology">
            <div className=" cursor-pointer">Technology</div>
          </Link>
          <Link href="/sports">
            <div className=" cursor-pointer">Sports</div>
          </Link>
        </div>
        <div>
          {`INDIA
          ${day} 
            ${monthArray[month - 1].toUpperCase()}
           ${year}`}
        </div>
      </div>
      <div className=" overflow-auto space-x-6 px-2 font-semibold border-b-4 text-[#06038D] bg-white text-md lg:text-lg py-1 border-t-2 border-black flex md:hidden">
        <Link href="/health">
          <div className=" cursor-pointer">Health</div>
        </Link>
        <Link href="/business">
          <div className=" cursor-pointer">Business</div>
        </Link>
        <Link href="/entertainment">
          <div className=" cursor-pointer">Entertainment</div>
        </Link>
        <Link href="science">
          <div className=" cursor-pointer">Science</div>
        </Link>
        <Link href="/technology">
          <div className=" cursor-pointer">Technology</div>
        </Link>
        <Link href="/sports">
          <div className=" cursor-pointer">Sports</div>
        </Link>
      </div>
      <motion.div
        className="progress-bar border-4 border-[#06038D]"
        style={{ scaleX }}
      />
    </div>
  );
};

export default Header;
