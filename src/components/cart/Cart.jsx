import React from "react";
import { Link } from "react-router-dom";
import sneakers1 from "../../assets/sneakers-1.png";
import sneakers2 from "../../assets/sneakers-2.png";
import sneakers3 from "../../assets/sneakers-3.png";
import sneakers4 from "../../assets/sneakers-4.png";
import sneakers5 from "../../assets/sneakers-5.png";
import sneakers6 from "../../assets/sneakers-6.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};
  const decrement = (item) => {};
  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Shoes @1"}
          img={sneakers1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Shoes @2"}
          img={sneakers2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Shoes @3"}
          img={sneakers3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <CartItem
          title={"Shoes @4"}
          img={sneakers4}
          value={0}
          increment={() => increment(4)}
          decrement={() => decrement(4)}
        />
        <CartItem
          title={"Shoes @5"}
          img={sneakers5}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <CartItem
          title={"Shoes @6 "}
          img={sneakers6}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <article>
          <div>
            <h4>Total</h4>
            <p>₹{20000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{20000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>
          <div>
            <h4>Grand Total</h4>
            <p>₹{20000 + 20000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">CheckOut</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
