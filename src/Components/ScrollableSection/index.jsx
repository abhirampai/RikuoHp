// import { useEffect, useRef } from "react";
// import { useScroll } from "react-scroll-hooks";
// import { motion } from "framer-motion";
// import Contact from "../Contact";

// const ScrollableDiv = ({ loading }) => {
//   const containerRef = useRef();
//   const kaishaJouhouRef = useRef();
//   const kaishaRirekishiRef = useRef();
//   const servicesRef = useRef();
//   const contactRef = useRef();
//   const scrollSpeed = 20;

//   const { scrollToElement } = useScroll({
//     scrollSpeed,
//     containerRef,
//   });

//   useEffect(() => {
//     if (window.location.href.includes("kaishajouhou")) {
//       scrollToElement(kaishaJouhouRef);
//     } else if (window.location.href.includes("kaisharirekish")) {
//       scrollToElement(kaishaRirekishiRef);
//     } else if (window.location.href.includes("services")) {
//       scrollToElement(servicesRef);
//     } else if (window.location.href.includes("contact")) {
//       scrollToElement(contactRef);
//     }
//     setTimeout(() => {
//       window.scrollTo(0, 0);
//     }, 1000);
//   }, [window.location.href]);

//   return (
//     <motion.div
//       initial={{ x: "100vw" }}
//       animate={!loading && { x: 0 }}
//       transition={{ duration: 1 }}
//       ref={containerRef}
//       className="relative overflow-y-scroll bg-white h-96"
//     >
//       <section ref={kaishaJouhouRef} id="Kaisha Jouhou " className="h-full">
//         Kaisha Jouhou
//       </section>
//       <section
//         ref={kaishaRirekishiRef}
//         id="Kaisha Rirekishi"
//         className="h-full"
//       >
//         Kaisha Rirekishi
//       </section>
//       <section ref={servicesRef} id="Services" className="h-full">
//         Services
//       </section>
//       <section ref={contactRef} id="Contact" className="h-full">
//         <Contact />
//       </section>
//     </motion.div>
//   );
// };

// export default ScrollableDiv;
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
