import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
// import me from "../../assets/founder.webp";
import Founder from "../home/Founder";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>KICKIN' WITH KARTIK</h4>
          <p>Where Quality meets Comfort</p>
          <p>
            With over 20,000+ customer and over 5+ countries, KickIn' with
            Kartik is the customer favourite since 2013
          </p>

          <p>
            Explore the wide range of sneaker and start slaying in the streets.
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <article>
            <div>
              <Founder />
            </div>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
