import { INFO } from "../../Common/constants";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MainText = () => {
  const [textToDisplay, setTextToDisplay] = useState("");
  const [loadingElement, setLoading] = useState(true);
  useEffect(() => {
    if (window.location.href.includes("kaishajouhou")) {
      setTextToDisplay(INFO.kaishajouhou);
    } else if (window.location.href.includes("kaisharirekish")) {
      setTextToDisplay(INFO.kaisharirekishi);
    } else if (window.location.href.includes("services")) {
      setTextToDisplay(INFO.services);
    } else if (window.location.href.includes("contact")) {
      setTextToDisplay(INFO.contact);
    } else {
      setTextToDisplay(INFO.kaishajouhou);
    }
    setLoading(false);
  });
  if (loadingElement) return <></>;
  return (
    <>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-50 w-1/2 space-y-6 text-white whitespace-pre-line -inset-x-24 -inset-y-10"
      >
        <p className="text-5xl font-bold xl:text-7xl">
          {textToDisplay.heading}
        </p>
        {textToDisplay.content &&
          textToDisplay.content.map((content, idx) => (
            <>
              <div key={idx} className="flex flex-col">
                <p className="text-3xl font-bold xl:text-6xl">
                  {content.heading}
                </p>
                <p className="text-xl font-semibold xl:text-3xl">
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
