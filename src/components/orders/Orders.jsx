import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../redux/actions/order";
import Loader from "../layout/Loader";
import toast from "react-hot-toast";

const Orders = () => {
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    dispatch(getMyOrders());
  }, [dispatch, error]);

  return (
    <div>
      <section className="orders">
        {loading === false ? (
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
                {orders &&
                  orders.map((i) => (
                    <tr key={i._id}>
                      <td>#{i._id}</td>
                      <td>i.orderStatus</td>
                      <td>
                        {i.orderItems.AIRJORDAN1RETROHIGHOG.quantity +
                          i.orderItems.AIRJORDAN1MIDSE.quantity +
                          i.orderItems.NIKEGTCUT2.quantity}
                      </td>
                      <td>₹{i.totalAmount}</td>
                      <td>{i.paymentMethod}</td>
                      {/* <td>Online</td> */}
                      <td>
                        <Link to={`/order/${i._id}`}>
                          <AiFillEye />
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </main>
        ) : (
          <Loader />
        )}
      </section>
    </div>
  );
};

export default Orders;
