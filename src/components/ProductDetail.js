import React, { useState } from "react";
import "./ProductDetail.css"
import {useDispatch, useSelector} from "react-redux"
import { sliceActions } from "../store/billgatesSlice";

function ProductDetail(props) {
  const [amount, setAmount ] = useState(1)
  const cartItems = useSelector((state) => state.billgates.cartItems);
  const money = useSelector((state) => state.billgates.money);
    const dispatch = useDispatch()
    const amountHandler = (e) => {
        setAmount(e.target.value)
    }
    const buyHandler = () => {
        dispatch(sliceActions.addItem({
          product : props.product,
          amount: amount
        }))
    }
    const sellHandler = () => {
        dispatch(sliceActions.removeItem({
          product : props.product,
          amount: amount
        }))
    }
    const cartItem = cartItems.find(cartItem => cartItem.id === props.product.id);
    const product = props.product;
    const isEnough = product.productPrice > money;
  return (
    <div id="card" className="shadow-lg col-md-3 d-inline-block mx-4 my-1">
      <div className="card " style={{ width: "18rem", height: "18rem" }}>
        <img src={product.image} className="card-img-top" style={{ width: "18rem", height: "8rem" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{color: "black"}}>{product.productName}</h5>
          <p className="card-text" style={{color: "black"}}>${product.productPrice.toLocaleString()}</p>
          <div className="row">
          <button className="col-md-4 btn btn-warning" disabled={isEnough} onClick={buyHandler}>Buy</button>
         <input value={amount} onChange={amountHandler}  className="col-md-4 btn btn-info" type="number" name="" id=""  defaultValue="1"/>
         <button className="btn btn-danger col-md-4" disabled={!cartItem} onClick={sellHandler}>Sell</button>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
