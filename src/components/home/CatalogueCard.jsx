import React from "react";
import { motion } from "framer-motion";

const CatalogueCard = ({
  productNum,
  sneakerSrc,
  price,
  title,
  handler,
  delay = 0,
}) => {
  return (
    <motion.div
      className="catalogueCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{ delay }}
    >
      <div>Product {productNum}</div>
      <main>
        <img src={sneakerSrc} alt={productNum} />
        <h5>₹{price}</h5>
        <p>{title}</p>
        <button
          onClick={() => {
            handler(productNum);
          }}
        >
          Add to Cart
        </button>
      </main>
    </motion.div>
  );
};

export default CatalogueCard;
