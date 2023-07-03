import React from "react";
import { Link } from "react-router-dom";

const PaymemtSuccess = () => {
  return (
    <section className="paymentsuccess">
      <div>
        <h1>Order Confirmed ! </h1>
        <h2>Let's KickIn' </h2>
        <p>
          Your order has been successfully placed, check your order status below
        </p>
        <Link to="/Status">Status</Link>
      </div>
    </section>
  );
};

export default PaymemtSuccess;
