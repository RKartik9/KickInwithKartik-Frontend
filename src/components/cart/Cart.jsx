import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sneakers1 from "../../assets/sneakers-1.png";
import sneakers2 from "../../assets/sneakers-2.png";
import sneakers3 from "../../assets/sneakers-3.png";
// import sneakers4 from "../../assets/sneakers-4.png";
// import sneakers5 from "../../assets/sneakers-5.png";
// import sneakers6 from "../../assets/sneakers-6.png";

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
  // const increment = (item) => {};
  // const decrement = (item) => {};

  const {
    cartItems: {
      AIRJORDAN1RETROHIGHOG: { quantity: AIRJORDAN1RETROHIGHOG },
      AIRJORDAN1MIDSE: { quantity: AIRJORDAN1MIDSE },
      NIKEGTCUT2: { quantity: NIKEGTCUT2 },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

  const { cartItems: orderItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "AIRJORDAN1RETROHIGHOGIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "AIRJORDAN1MIDSEIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "NIKEGTCUT2Increment" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "AIRJORDAN1RETROHIGHOGIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        if (AIRJORDAN1RETROHIGHOG === 0) break;
        dispatch({ type: "AIRJORDAN1RETROHIGHOGDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        if (AIRJORDAN1MIDSE === 0) break;
        dispatch({ type: "AIRJORDAN1MIDSEDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if (NIKEGTCUT2 === 0) break;
        dispatch({ type: "NIKEGTCUT2Decrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        if (AIRJORDAN1RETROHIGHOG === 0) break;
        dispatch({ type: "AIRJORDAN1RETROHIGHOGDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({
        subTotal,
        tax,
        shippingCharges,
        total,
      })
    );
  }, [orderItems, subTotal, tax, shippingCharges, total]);

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"AIR JORDAN 1 RETRO HIGH OG"}
          img={sneakers1}
          value={AIRJORDAN1RETROHIGHOG}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"AIR JORDAN 1 MID SE"}
          img={sneakers2}
          value={AIRJORDAN1MIDSE}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"NIKE GT CUT 2"}
          img={sneakers3}
          value={NIKEGTCUT2}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        {/* <CartItem
          title={"AIR JORDAN 1 LOW FLYEASE"}
          img={sneakers4}
          value={0}
          increment={() => increment(4)}
          decrement={() => decrement(4)}
        />
        <CartItem
          title={"NIKE AIR MAX PLUS MERCURIAL 25"}
          img={sneakers5}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <CartItem
          title={"AIR JORDAN 5 X DJ KHALED "}
          img={sneakers6}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        /> */}
        <article>
          <div>
            <h4>Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>
          <div>
            <h4>Grand Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">CheckOut</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
