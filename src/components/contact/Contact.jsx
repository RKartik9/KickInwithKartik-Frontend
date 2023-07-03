import React from "react";
import { motion } from "framer-motion";
import sneaker from "../../assets/sneakerMain.png";
import Footer from "../home/Footer";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <motion.form
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ delay: 0.2 }}
        >
          <h2>Contact Us</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea
            placeholder="Your Message Here."
            cols="30"
            rows="10"
          ></textarea>
          <button type="">Send</button>
        </motion.form>
        <motion.div
          className="FormBorder"
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{
              y: "-100vh",
              x: "30%",
              opacity: 0,
            }}
            animate={{
              y: "-50%",
              x: "30%",
              opacity: 1,
            }}
            transition={{ delay: 0.7 }}
          >
            <img src={sneaker} alt="" />
          </motion.div>
        </motion.div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
