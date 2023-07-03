import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
// import img from "../../assets/Vector1";
import img from "../../assets/vector1.png";
const NotFound = () => {
  return (
    <section className="notFound">
      <main>
        <div>
          <MdError />
          <h1>Error 404</h1>
        </div>

        <p>Page not found, click below to go to home page.</p>
        <Link to="/">Go to Home</Link>
        <img src={img} alt="error-img" />
      </main>
    </section>
  );
};

export default NotFound;
