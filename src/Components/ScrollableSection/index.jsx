import { motion } from "framer-motion";
import { useRef } from "react";
import { Rerousel } from "rerousel";
import { IMAGES } from "../../Common/constants";
const ScrollableDiv = () => {
  const scrollDiv = useRef(null);
  return (
    <>
      <motion.div className="overflow-auto bg-black h-96">
        <Rerousel itemRef={scrollDiv}>
          {IMAGES.map((c) => {
            return (
              <img
                className="object-right-bottom h-full min-w-full"
                key={c}
                src={c}
                ref={scrollDiv}
              />
            );
          })}
        </Rerousel>
      </motion.div>
    </>
  );
};

export default ScrollableDiv;
