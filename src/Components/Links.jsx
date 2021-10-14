import { motion } from "framer-motion";

const Links = ({ loading }) => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={!loading && { x: 0 }}
      transition={{ duration: 1 }}
      className="w-1/2 mx-auto"
    >
      <motion.div whileTap={{ scale: 1.1 }} className="mb-4">
        <h1 className="text-white text-4xl mb-2">
          <a href="/#kaishajouhou">Kaisha Jouhou</a>
        </h1>
        <div className="border-b border-white w-12"></div>
      </motion.div>
      <motion.div whileTap={{ scale: 1.1 }} className="mb-4">
        <h1 className="text-white text-4xl mb-4">
          <a href="/#kaisharirekishi">Kaisha Rirekishi</a>{" "}
        </h1>
        <div className="border-b border-white w-12"></div>
      </motion.div>
      <motion.div whileTap={{ scale: 1.1 }} className="mb-4">
        <h2 className="text-gray-400 text-lg mb-2">
          <a href="/#services">Services</a>
        </h2>
        <div className="border-b border-gray-400 w-24"></div>
      </motion.div>
      <motion.div whileTap={{ scale: 1.1 }} className="mb-4">
        <h2 className="text-gray-400 text-lg mb-2">
          <a href="/#contacts">Contact</a>
        </h2>
        <div className="border-b border-gray-400 w-24"></div>
      </motion.div>
    </motion.div>
  );
};

export default Links;
