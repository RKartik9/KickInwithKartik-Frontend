import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdminStats } from "../../redux/actions/admin";

ChartJS.register(Tooltip, ArcElement, Legend);

const Box = ({ title, value }) => (
  <div>
    <h3>
      {title === "Total" && "₹"}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, usersCount, ordersCount, totalIncome } = useSelector(
    (state) => state.admin
  );
  useEffect(() => {
    dispatch(getAdminStats());
  }, [dispatch]);

  const data = {
    labels: ["Ordered", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of order",
        data: ordersCount
          ? [ordersCount.Ordered, ordersCount.Shipped, ordersCount.Delivered]
          : [0, 0, 0],
        backgroundColor: [
          "rgba(177,180,541,0.1)",
          "rgba(234,145,112,0.2)",
          "rgba(123,232,111,0.3)",
        ],
        borderColor: [
          "rgb(177,180,541)",
          "rgb(234,145,112)",
          "rgb(123,232,111)",
        ],
        borderWidht: 1,
        // width: 340,
        // height: 340,
      },
    ],
  };
  return (
    <section className="dashboard">
      {loading === false ? (
        <main>
          <article>
            <Box title="Users" value={usersCount} />
            <Box title="Orders" value={ordersCount.total} />
            <Box title="Income" value={totalIncome} />
          </article>

          <section>
            <div>
              <Link to="/admin/orders">View Orders</Link>
              <Link to="/admin/users">View Users</Link>
            </div>

            <aside>
              <Doughnut data={data} />
            </aside>
          </section>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Dashboard;
