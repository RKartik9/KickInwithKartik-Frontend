import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../layout/Loader";
ChartJS.register(Tooltip, ArcElement, Legend);
const loading = false;
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
  const data = {
    labels: ["Ordered", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of order",
        data: [2, 3, 4],
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
            <Box title="Users" value={213} />
            <Box title="Orders" value={23} />
            <Box title="Income" value={21323} />
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
