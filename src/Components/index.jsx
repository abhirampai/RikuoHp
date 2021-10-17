import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { INITIAL_LINKS_CLICKED } from "../Common/constants";
import logo from "../Assets/up-wind-logo-2.png";
import Links from "./Links";
import ScrollableDiv from "./ScrollableSection";
import SocialLinks from "./SocialLinks";
import MainText from "./MainText";
import Info from "./Info";

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
  const [linksClick, setLinksClicked] = useState(INITIAL_LINKS_CLICKED);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  return (
    <>
      <motion.div
        className="absolute z-50 flex items-center justify-center w-full h-screen bg-black"
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
          <div>
            <motion.img
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              src={logo}
              alt="logo"
              className="w-24 h-24"
            />
          </div>
          <div className="flex flex-wrap justify-between w-full">
            <div className="w-1/2">
              <Info />
            </div>
            <MainText />
          </div>
          <div className="flex flex-wrap justify-between w-full">
            <div className="absolute bottom-0 left-0 w-full mb-10 md:w-1/2">
              <Links
                loading={loading}
                linksClick={linksClick}
                setLinksClicked={setLinksClicked}
              />
            </div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={!loading && { x: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute bottom-0 right-0 w-full md:w-1/2"
            >
              <ScrollableDiv />
              <SocialLinks />
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
