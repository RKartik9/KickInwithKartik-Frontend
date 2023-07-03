import React from "react";
import Footer from "../home/Footer";

const OrderDetails = () => {
  return (
    <>
      <section className="orderdetails">
        <main>
          <h1>Order Details</h1>
          <div>
            <h1>Shipping</h1>
            <p>
              <b>Address</b>
              {"Alpha-2 "}
            </p>
          </div>
          <div>
            <h1>Contact</h1>
            <p>
              <b>Name</b>
              {"Kartik "}
            </p>
            <p>
              <b>Contact No</b>
              {8340241569}
            </p>
          </div>
          <div>
            <h1>Status</h1>
            <p>
              <b>Order Status</b>
              {"In Transit"}
            </p>
            <p>
              <b>Ordered On</b>
              {"27-04-2023"}
            </p>
            <p>
              <b>Reference No: </b>
              {1789}
            </p>
          </div>

          <div>
            <h1>Payment</h1>
            <p>
              <b>Method</b>
              {"UPI "}
            </p>
            <p>
              <b>Payment Reference</b>#{"6730"}
            </p>
            <p>
              <b>Paid On</b>#{"27-04-2023"}
            </p>
          </div>

          <div>
            <h1>Amount</h1>
            <p>
              <b>Product Price</b>₹{"price"}
            </p>
            <p>
              <b>Shipping Charges</b>₹{"price"}
            </p>
            <p>
              <b>Tax</b>₹{"price"}
            </p>
            <p>
              <b>Total Amount</b>₹{"price"}
            </p>
          </div>
          <article>
            <h1>Total Items</h1>

            <div>
              <h4>AIR JORDAN 1 RETRO HIGH OG</h4>
              <div>
                <span className="span">{1}</span> x{" "}
                <span className="span">{22890}</span>
              </div>
            </div>
          </article>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default OrderDetails;
