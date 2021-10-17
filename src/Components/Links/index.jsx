import { motion } from "framer-motion";
import { useEffect } from "react";
import LinkTag from "./LinkTag";

const Links = ({ loading, setShowForm, linksClick, setLinksClicked }) => {
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
      className="flex justify-around w-full md:mx-auto md:space-y-4 md:flex-col md:w-1/2 md:justify-start"
    >
      <LinkTag
        linksClick={linksClick}
        setLinksClicked={setLinksClicked}
        title="Information"
        setShowForm={setShowForm}
      />
      <LinkTag
        linksClick={linksClick}
        setLinksClicked={setLinksClicked}
        title="Our History"
        setShowForm={setShowForm}
      />
      <LinkTag
        linksClick={linksClick}
        setLinksClicked={setLinksClicked}
        title="Services"
        setShowForm={setShowForm}
      />
      <LinkTag
        linksClick={linksClick}
        setLinksClicked={setLinksClicked}
        title="Contact"
        setShowForm={setShowForm}
      />
    </motion.div>
  );
};

export default Links;
