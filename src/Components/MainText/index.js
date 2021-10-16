import { INFO } from "../../Common/constants";
import { useState, useEffect } from "react";
import Info from "../Info";

const MainText = () => {
  const [textToDisplay, setTextToDisplay] = useState("");
  useEffect(() => {
    if (window.location.href.includes("kaishajouhou")) {
      setTextToDisplay(INFO.kaishajouhou);
    } else if (window.location.href.includes("kaisharirekish")) {
      setTextToDisplay(INFO.kaisharirekishi);
    } else if (window.location.href.includes("services")) {
      setTextToDisplay(INFO.kaishajouhou);
    } else if (window.location.href.includes("contact")) {
      setTextToDisplay(INFO.contact);
    } else {
      setTextToDisplay(INFO.kaishajouhou);
    }
  });
  return (
    <>
      <div className="absolute z-50 w-screen space-y-48 text-white whitespace-pre-line -inset-x-48">
        <p className="text-2xl">{textToDisplay}</p>
        <Info />
      </div>
    </>
  );
};

export default MainText;
