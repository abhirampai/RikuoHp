import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../Assets/up-wind-logo-2.jpeg";
import Links from "./Links";
import ScrollableDiv from "./ScrollableDiv";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const Index = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  return (
    <>
      <motion.div
        className="absolute h-screen z-50 flex items-center justify-center w-full bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
      >
        <motion.svg variants={textContainer} className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-screen fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-screen text-gray-600 fill-current"
            />
          </pattern>
          <text
            className="text-4xl font-bold"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            Rikuo
          </text>
        </motion.svg>
      </motion.div>
      {!loading && (
        <>
          <div className="mx-auto">
            <motion.img
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              src={logo}
              alt="logo"
              className="w-24 h-24 mx-auto mt-2"
            />
          </div>
          <div className="flex w-full justify-between">
            <div className="mt-36 w-1/2">
              <Links loading={loading} />
            </div>
            <div className="mt-20 w-1/2">
              <ScrollableDiv />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
