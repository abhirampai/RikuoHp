import { INFO } from "../../Common/constants";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MainText = () => {
  const [textToDisplay, setTextToDisplay] = useState("");
  const [loadingElement, setLoading] = useState(true);
  useEffect(() => {
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
    setLoading(false);
  });
  if (loadingElement) return <></>;
  return (
    <>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-50 w-1/2 space-y-6 text-white whitespace-pre-line lg:-inset-x-24 md:-inset-x-12"
      >
        <p className="text-5xl font-bold">{textToDisplay.heading}</p>
        {textToDisplay.content &&
          textToDisplay.content.map((content, idx) => (
            <>
              <div key={idx} className="flex flex-col">
                <p className="text-3xl font-bold ">{content.heading}</p>
                <p className="text-xl font-semibold ">{content.body}</p>
              </div>
            </>
          ))}
      </motion.div>
    </>
  );
};

export default MainText;
