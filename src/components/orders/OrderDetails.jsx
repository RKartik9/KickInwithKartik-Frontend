import React from "react";
import Footer from "../home/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../redux/actions/order";
import Loader from "../layout/Loader";

const OrderDetails = () => {
  const params = useParams();

  const { order, loading } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetails(params.id));
  }, [params.id, dispatch]);

  return (
    <>
      <section className="orderdetails">
        {loading === false && order !== undefined ? (
          <main>
            <h1>Order Details</h1>
            <div>
              <h1>Shipping</h1>
              <p>
                <b>Address</b>
                {`${order.shippingInfo.hNo} ${order.shippingInfo.city} ${order.shippingInfo.state} ${order.shippingInfo.country} ${order.shippingInfo.pinCode}`}
              </p>
            </div>
            <div>
              <h1>Contact</h1>
              <p>
                <b>Name</b>
                {order.user.name}
              </p>
              <p>
                <b>Contact No</b>
                {order.shippingInfo.phoneNo}
              </p>
            </div>
            <div>
              <h1>Status</h1>
              <p>
                <b>Order Status</b>
                {order.orderStatus}
              </p>
              <p>
                <b>Ordered On</b>
                {order.createdAt.split("T")[0]}
              </p>
              <p>
                <b>Delivered At</b>
                {order.deliveredAt ? order.deliveredAt.split("T")[0] : "NA"}
              </p>
            </div>

            <div>
              <h1>Payment</h1>
              <p>
                <b>Method</b>
                {order.paymentMethod}
              </p>
              <p>
                <b>Payment Reference</b>{" "}
                {order.paymentMethod === "Online"
                  ? `#${order.paymentInfo}`
                  : "NA"}
              </p>
              <p>
                <b>Paid On</b>
                {order.paymentMethod === "Online"
                  ? order.paidAt.split("T")[0]
                  : "NA"}
              </p>
            </div>

            <div>
              <h1>Amount</h1>
              <p>
                <b>Product Price</b>₹{order.itemsPrice}
              </p>
              <p>
                <b>Shipping Charges</b>₹{order.shippingCharges}
              </p>
              <p>
                <b>Tax</b>₹{order.taxPrice}
              </p>
              <p>
                <b>Total Amount</b>₹{order.totalAmount}
              </p>
            </div>
            <article>
              <h1>Total Items</h1>

              <div>
                <h4>AIR JORDAN 1 RETRO HIGH OG</h4>
                <div>
                  <span>{order.orderItems.AIRJORDAN1RETROHIGHOG.quantity}</span>{" "}
                  x <span>{order.orderItems.AIRJORDAN1RETROHIGHOG.price}</span>
                </div>
              </div>
              <div>
                <h4>AIR JORDAN 1 MID SE</h4>
                <div>
                  <span>{order.orderItems.AIRJORDAN1MIDSE.quantity}</span> x{" "}
                  <span>{order.orderItems.AIRJORDAN1MIDSE.price}</span>
                </div>
              </div>
              <div>
                <h4>NIKE GT CUT 2</h4>
                <div>
                  <span>{order.orderItems.NIKEGTCUT2.quantity}</span> x{" "}
                  <span>{order.orderItems.NIKEGTCUT2.price}</span>
                </div>
              </div>
              <div>
                <h4
                  style={{
                    fontWeight: 800,
                  }}
                >
                  Sub Total
                </h4>
                <div
                  style={{
                    fontWeight: 800,
                  }}
                >
                  ₹{order.itemsPrice}
                </div>
              </div>
            </article>
          </main>
        ) : (
          <Loader />
        )}
      </section>
      <Footer />
    </>
  );
};

export default OrderDetails;
