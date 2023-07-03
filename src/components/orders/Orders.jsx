import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

const Orders = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      <section className="orders">
        <main>
          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Status</th>
                <th>Item Qtantity</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((i) => (
                <tr key={i}>
                  <td>#42069</td>
                  <td>Processing</td>
                  <td>34</td>
                  <td>₹{22125}</td>
                  <td>Online</td>
                  <td>
                    <Link to={`/orders/${"42069"}`}>
                      {" "}
                      <AiFillEye />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </section>
    </div>
  );
};

export default Orders;
