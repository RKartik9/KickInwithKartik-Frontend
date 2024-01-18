import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/home/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymemtSuccess";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Orders from "./components/orders/Orders";
import OrderDetails from "./components/orders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import About from "./components/about/about";
import Users from "./components/admin/Users";
import UserOrders from "./components/admin/Orders";
import NotFound from "./components/layout/NotFound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/catalogue.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/ConfirmOrder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/ordersdetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";
import "./styles/users.scss";

function App() {
  const dispatch = useDispatch();
  const { error, message, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);

  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (isAuthenticated) {
        next();
      } else {
        next.redirect("/login");
      }
    } else {
      next();
    }
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <GuardProvider guards={[requireLogin]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart" element={<Footer />} />
          <Route path="/PaymentSuccess" element={<PaymentSuccess />} />

          <Route path="/login" element={<Login />} />

          <Route path="/me" element={<Profile />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/ConfirmOrder" element={<ConfirmOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />

          <Route
            path="/admin"
            element={
              <GuardedRoute
                path="/"
                element={<Dashboard />}
                meta={{ auth: true, adminRoute: true }}
              />
            }
          />
          <Route
            path="/admin/users"
            element={
              <GuardedRoute
                path="/"
                element={<Users />}
                meta={{ auth: true, adminRoute: true }}
              />
            }
          />
          <Route
            path="/admin/orders"
            element={
              <GuardedRoute
                path="/"
                element={<UserOrders />}
                meta={{ auth: true, adminRoute: true }}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </GuardProvider>
      <Toaster />
      {/* <Footer /> */}
    </Router>
  );
}

// export default App;

export default App;
