import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillBehanceCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Kickin' with Kartik</h2>
        <p>One stop destination for you, Sneakersheads</p>
        <br />
        <em>We would love to hear from you.</em>
        <br />
        <strong className="rights">
          All right reserved @kickin'withkartik
        </strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a
          href="https://www.linkedin.com/in/rohit-kumar-760b0b1b6/"
          target="_blank"
        >
          {" "}
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/RKartik9" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://behance.com/RKartik9" target="_blank">
          <AiFillBehanceCircle />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
