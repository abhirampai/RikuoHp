import { INFO } from "../../Common/constants";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MainText = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  const [textToDisplay, setTextToDisplay] = useState("");
  const [loadingElement, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (window.location.href.includes("information")) {
      setTextToDisplay(INFO.information);
    } else if (window.location.href.includes("ourhistory")) {
      setTextToDisplay(INFO.ourhistory);
    } else if (window.location.href.includes("services")) {
      setTextToDisplay(INFO.services);
    } else if (window.location.href.includes("contact")) {
      setTextToDisplay(INFO.contact);
    } else {
      setTextToDisplay(INFO.information);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, [window.location.href]);
  return (
    <>
      <motion.div
        initial={loadingElement ? { opacity: 0 } : { opacity: 1 }}
        animate={!loadingElement ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.25 }}
        className={`${
          loadingElement ? "invisible" : "block"
        } z-50 w-full mx-auto mt-10 space-y-6 text-center md:text-left text-white whitespace-pre-line md:w-11/12 md:mt-4 md:relative md:mx-0 lg:-inset-x-24 md:-inset-x-12`}
      >
        <p className="text-3xl font-bold md:text-5xl">
          {textToDisplay.heading}
        </p>
        {textToDisplay.content &&
          textToDisplay.content.map((content, idx) => (
            <>
              <div key={idx} className="flex flex-col">
                <p className="text-xl font-bold md:text-3xl ">
                  {content.heading}
                </p>
                <p className="text-lg font-semibold md:text-xl ">
                  {content.body}
                </p>
              </div>
            </>
          ))}
      </motion.div>
    </>
  );
};

export default MainText;
