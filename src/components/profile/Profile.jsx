import React from "react";
import { animate, motion } from "framer-motion";
import me from "../../assets/Ro.jpg";
import { Link } from "react-router-dom";
const Profile = () => {
  const options = {
    initital: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="profile">
      <main>
        <motion.img src={me} alt="user" {...options} />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          Rohit Kartik
        </motion.h5>
        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link to="/admin/dashboard">Dashboard</Link>
        </motion.div>
        <motion.div
          initial={{
            x: "-100vh",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        >
          <Link to="/orders">Orders</Link>
        </motion.div>
        <motion.button
          initial={{
            x: "-100vh",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ delay: 0.3 }}
        >
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
