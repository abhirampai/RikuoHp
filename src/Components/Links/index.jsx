import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { INITIAL_LINKS_CLICKED } from "../../Common/constants";
import LinkTag from "./LinkTag";

const Links = ({ loading }) => {
  const [linksClick, setLinksClicked] = useState(INITIAL_LINKS_CLICKED);
  useEffect(() => {
    if (window.location.href.includes("kaishajouhou")) {
      setLinksClicked((prevClicked) => ({
        ...prevClicked,
        kaishajouhou: !prevClicked.kaishajouhou,
      }));
    } else if (window.location.href.includes("kaisharirekish")) {
      setLinksClicked((prevClicked) => ({
        ...prevClicked,
        kaisharirekishi: !prevClicked.kaisharirekishi,
      }));
    } else if (window.location.href.includes("services")) {
      setLinksClicked((prevClicked) => ({
        ...prevClicked,
        services: !prevClicked.services,
      }));
    } else if (window.location.href.includes("contact")) {
      setLinksClicked((prevClicked) => ({
        ...prevClicked,
        contact: !prevClicked.contact,
      }));
    } else {
      setLinksClicked((prevClicked) => ({
        ...prevClicked,
        kaishajouhou: !prevClicked.kaishajouhou,
      }));
    }
  }, []);
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={!loading && { x: 0 }}
      transition={{ duration: 1 }}
      className="w-1/2 mx-auto space-y-4"
    >
      <LinkTag
        linksClick={linksClick}
        setLinksClicked={setLinksClicked}
        title="Kaisha Jouhou"
      />
      <LinkTag
        linksClick={linksClick}
        setLinksClicked={setLinksClicked}
        title="Kaisha Rirekishi"
      />
      <LinkTag
        linksClick={linksClick}
        setLinksClicked={setLinksClicked}
        title="Services"
      />
      <LinkTag
        linksClick={linksClick}
        setLinksClicked={setLinksClicked}
        title="Contact"
      />
    </motion.div>
  );
};

export default Links;
