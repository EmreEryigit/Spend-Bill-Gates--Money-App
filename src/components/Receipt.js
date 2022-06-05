import React from "react";
import { useSelector } from "react-redux";
import "./Receipt.css"
function Receipt() {
  const cartItems = useSelector((state) => state.billgates.cartItems);
  console.log(cartItems);
   const totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.productPrice * item.quantity;
  }, 0)
   if(cartItems.length === 0) {
         return (
              <div className="container">
              <hr style={{color: "black"}} />
                <h1 style={{color: "black"}}>Your cart is empty</h1>
              </div>
         )
   }
  return (
    <div className="row" style={{color: "black"}}>
      <h1>Receipt</h1>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id}>
            <span>{cartItem.quantity} X</span>
            <span> {cartItem.productName} </span>

            <span>${parseInt(cartItem.productPrice)}</span>
          </li>
        ))}
      </ul>
      <hr style={{color: "black"}} />
      <span>Total Cost: {totalAmount} </span>
    </div>
  );
}

export default Receipt;
