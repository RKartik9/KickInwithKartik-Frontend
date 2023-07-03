import React from "react";
import Footer from "../home/Footer";
import { Country, State } from "country-state-city";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <>
      <section className="shipping">
        <main>
          <h1>Shipping Details</h1>
          <form action="">
            <div>
              <label>Flat/House</label>
              <input type="text" placeholder="Enter the House Number." />
            </div>
            <div>
              <label>Country</label>
              <select>
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label>State</label>
              <select>
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry("IN").map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label>City</label>
              <input type="text" placeholder="Enter the City." />
            </div>

            <div>
              <label>Pincode</label>
              <input type="number" placeholder="Enter the Pincode." />
            </div>
            <div>
              <label>Landmark</label>
              <input type="text" placeholder="Enter the Landmark." />
            </div>
            <div>
              <label>Phone Number</label>
              <input type="number" placeholder="Enter the Phone Number." />
            </div>
            <Link to="/ConfirmOrder">
              <button type="submit">Kick'In</button>
            </Link>
          </form>
        </main>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Shipping;
