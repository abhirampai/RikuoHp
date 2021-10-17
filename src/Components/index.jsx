import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { INITIAL_LINKS_CLICKED } from "../Common/constants";
import logo from "../Assets/Up-wind-logo.svg";
import Links from "./Links";
import ScrollableDiv from "./ScrollableSection";
import SocialLinks from "./SocialLinks";
import MainText from "./MainText";
import Info from "./Info";
import Contact from "./Contact";

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
  const [showForm, setShowForm] = useState(false);
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
          <div className="flex justify-between w-full">
            <div className="xl:w-1/7 md:w-4/12 lg:w-37%">
              <motion.img
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                src={logo}
                alt="logo"
                className="mx-auto h-36 w-36"
              />
            </div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={!loading && { x: 0 }}
              transition={{ duration: 1.5 }}
              className="my-auto mr-5"
            >
              <button
                onClick={() => setShowForm(!showForm)}
                className="p-2 pl-5 pr-5 text-sm text-white bg-transparent border-2 border-white rounded-lg xl:text-lg hover:bg-white hover:text-black focus:border-4 focus:border-gray-300"
              >
                Get In Touch
              </button>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-between w-full">
            <div className="w-full md:w-1/2">
              <Info />
            </div>
            <div className="w-full md:w-1/2">
              {!showForm ? <MainText /> : <Contact setShowForm={setShowForm} />}
            </div>
          </div>
          <div className="flex flex-wrap justify-between w-full">
            <div className="bottom-0 left-0 w-full mt-10 mb-6 md:mt-0 md:absolute xl:mb-10 md:w-1/2">
              <Links
                loading={loading}
                setShowForm={setShowForm}
                linksClick={linksClick}
                setLinksClicked={setLinksClicked}
              />
            </div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={!loading && { x: 0 }}
              transition={{ duration: 1.5 }}
              className="bottom-0 right-0 w-full md:absolute md:w-1/2"
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
