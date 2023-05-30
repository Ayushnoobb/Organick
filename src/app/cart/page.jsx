"use client";

import React from 'react';
import { useReducer } from 'react';
import cartReducer, { initialState, actionTypes } from '@/lib/cartReducer'; 


const Cart = () => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);
  const { items } = cartState;

  // Function to handle adding an item to the cart
  const addToCart = (item) => {
    dispatchCart({
      type: actionTypes.ADD_TO_CART,
      payload: item,
    });
  };

  // Function to handle removing an item from the cart
  const removeFromCart = (itemId) => {
    dispatchCart({
      type: actionTypes.REMOVE_FROM_CART,
      payload: itemId,
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    dispatchCart({
      type: actionTypes.CLEAR_CART,
    });
  };

  // Rest of your component code
  // ...

  return (
    <div>
      {
        items.length == 0 ? "please add in cart" : ""
      }
      {/* Render your cart items */}
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      {/* Add an item to the cart */}
      <button onClick={() => addToCart({ id: 1, name: 'Example Item' })}>
        Add to Cart
      </button>

      {/* Clear the cart */}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart ;

// import React from 'react'

// export default function page() {
//   return (
//     <div>page</div>
//   )
// }

