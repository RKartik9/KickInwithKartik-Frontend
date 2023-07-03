import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <Router>
      <Header isAuthenticated />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart" element={<Footer />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/ConfirmOrder" element={<ConfirmOrder />} />
        <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<UserOrders />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
