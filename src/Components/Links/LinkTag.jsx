import { motion } from "framer-motion";
import {
  LINK_CLICKED,
  INITIAL_LINKS_CLICKED,
  LINK_NOT_CLICKED,
} from "../../Common/constants";

const LinkTag = ({ linksClick, setLinksClicked, title, setShowForm }) => {
  const key = `${title.split(" ").join("").toLowerCase()}`;
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={linksClick[key] ? { scale: 1.1 } : { scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1
        className={`mb-2 ${
          linksClick[key] ? LINK_CLICKED.textStyle : LINK_NOT_CLICKED.textStyle
        }`}
      >
        <a
          href={`/#${key}`}
          onClick={() => {
            setShowForm(false);
            setLinksClicked((prevClicked) => ({
              ...INITIAL_LINKS_CLICKED,
              [key]: !prevClicked[key],
            }));
          }}
        >
          {title}
        </a>
      </h1>
      <div
        className={`${
          linksClick[key]
            ? LINK_CLICKED.borderStyle
            : LINK_NOT_CLICKED.borderStyle
        }`}
      ></div>
    </motion.div>
  );
};

export default LinkTag;
