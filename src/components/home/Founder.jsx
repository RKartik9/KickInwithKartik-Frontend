import React from "react";
import { motion } from "framer-motion";
import ro from "../../assets/Ro.jpg";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <div className="founder">
        <motion.div className="main-1" {...options}>
          <h2>Our Founder</h2>
          <img src={ro} alt="Founder" height={300} width={300} />
          <h3>Rohit Kartik</h3>
          <p>"You can never go wrong with a classic sneaker!"</p>
        </motion.div>
      </div>
    </>
  );
};

export default Founder;
