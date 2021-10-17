import { motion } from "framer-motion";
import { useEffect } from "react";
import LinkTag from "./LinkTag";

const Links = ({ loading, linksClick, setLinksClicked }) => {
  useEffect(() => {
    if (window.location.href.includes("information")) {
      setLinksClicked((prevClicked) => ({
        ...prevClicked,
        information: !prevClicked.information,
      }));
    } else if (window.location.href.includes("ourhistory")) {
      setLinksClicked((prevClicked) => ({
        ...prevClicked,
        ourhistory: !prevClicked.ourhistory,
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
        information: !prevClicked.information,
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
        title="Information"
      />
      <LinkTag
        linksClick={linksClick}
        setLinksClicked={setLinksClicked}
        title="Our History"
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
