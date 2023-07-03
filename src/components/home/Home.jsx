import React from "react";
import mainSneaker from "../../assets/sneakerMain.png";
import { motion } from "framer-motion";
// import Founder from "./Founder";
import Carousel from "./CarouselComp";
import Catalogue from "./catalogue";
import Footer from "./Footer";

const Home = () => {
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
      <div className="top">
        <div className="main-element">
          <motion.h1 {...options} className="brandname">
            Kickin' with Kartik
          </motion.h1>
          <motion.p
            {...options}
            transition={{
              delay: 0.3,
            }}
          >
            Where Sneaker Dreams Come True
          </motion.p>
          <motion.a
            className="btn-menu"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.7,
            }}
            href="#catalogue"
          >
            Explore our Collection!
          </motion.a>
        </div>
        <motion.div
          initial={{ x: "110%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mainSneaker "
        >
          <img src={mainSneaker} alt="" />
        </motion.div>
      </div>
      {/* <Founder /> */}
      {/* {<Carousel />} */}

      <Catalogue />
      <Footer />
    </>
  );
};

export default Home;
