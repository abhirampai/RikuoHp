import { INFO } from "../../Common/constants";
import { useState, useEffect } from "react";
import Info from "../Info";

const MainText = () => {
  const [textToDisplay, setTextToDisplay] = useState("");
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
  });
  if (loading) return <></>;
  return (
    <>
      <div className="absolute z-50 w-screen space-y-6 text-white whitespace-pre-line bottom-52 -inset-x-48">
        <p className="text-6xl font-bold">{textToDisplay.heading}</p>
        {textToDisplay.content.map((content, idx) => (
          <>
            <div key={idx} className="flex flex-col">
              <p className="text-4xl font-bold">{content.heading}</p>
              <p className="text-xl font-semibold">{content.body}</p>
            </div>
          </>
        ))}
        <Info />
      </div>
    </>
  );
};

export default MainText;
