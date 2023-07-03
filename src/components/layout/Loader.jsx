import React from "react";
import { GiSonicShoes } from "react-icons/gi";
import { motion } from "framer-motion";

const Loader = () => {
  const options = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      ease: "linear",
      repeat: "Infinity",
      repeatType: "reverse",
    },
  };
  return (
    <div className="loader">
      <GiSonicShoes />

      <div>
        <motion.p {...options}>Loading...</motion.p>
      </div>
    </div>
  );
};

export default Loader;
