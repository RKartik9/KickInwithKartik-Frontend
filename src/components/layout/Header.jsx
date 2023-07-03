import React from "react";
import { Link } from "react-router-dom";
import { GiRunningShoe } from "react-icons/gi";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }}>
        <Link to="/">
          <GiRunningShoe className="icon" />
        </Link>
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
