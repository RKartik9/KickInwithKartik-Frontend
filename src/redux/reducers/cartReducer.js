import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        AIRJORDAN1RETROHIGHOG: {
          quantity: 0,
          price: 20000,
        },
        AIRJORDAN1MIDSE: {
          quantity: 0,
          price: 50000,
        },
        NIKEGTCUT2: {
          quantity: 0,
          price: 18000,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartReducer = createReducer(initialState, {
  AIRJORDAN1RETROHIGHOGIncrement: (state) => {
    state.cartItems.AIRJORDAN1RETROHIGHOG.quantity += 1;
  },
  AIRJORDAN1MIDSEIncrement: (state) => {
    state.cartItems.AIRJORDAN1MIDSE.quantity += 1;
  },
  NIKEGTCUT2Increment: (state) => {
    state.cartItems.NIKEGTCUT2.quantity += 1;
  },
  AIRJORDAN1RETROHIGHOGDecrement: (state) => {
    state.cartItems.AIRJORDAN1RETROHIGHOG.quantity -= 1;
  },
  AIRJORDAN1MIDSEDecrement: (state) => {
    state.cartItems.AIRJORDAN1MIDSE.quantity -= 1;
  },
  NIKEGTCUT2Decrement: (state) => {
    state.cartItems.NIKEGTCUT2.quantity -= 1;
  },

  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.AIRJORDAN1RETROHIGHOG.price *
        state.cartItems.AIRJORDAN1RETROHIGHOG.quantity +
      state.cartItems.AIRJORDAN1MIDSE.price *
        state.cartItems.AIRJORDAN1MIDSE.quantity +
      state.cartItems.NIKEGTCUT2.price * state.cartItems.NIKEGTCUT2.quantity;

    state.tax = state.subTotal * 0.18;
    state.shippingCharges = state.subTotal > 20000 ? 0 : 200;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  emptyState: (state) => {
    state.cartItems = {
      AIRJORDAN1RETROHIGHOG: {
        quantity: 0,
        price: 20000,
      },
      AIRJORDAN1MIDSE: {
        quantity: 0,
        price: 50000,
      },
      NIKEGTCUT2: {
        quantity: 0,
        price: 18000,
      },
    };

    state.subTotal = 0;
    state.shippingCharges = 0;
    state.tax = 0;
    state.total = 0;
  },

  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      city: action.payload.city,
      state: action.payload.state,
      country: action.payload.country,
      pinCode: action.payload.pinCode,
      phoneNo: action.payload.phoneNo,
    };
  },
});
