import { createSlice } from "@reduxjs/toolkit";
import products from "../products.json"
console.log()
const Slice = createSlice({
 
    name: "billgates",
    initialState: {
        items: products.products,
        money: 100000000000 ,
        cartItems: []
    },
    reducers: {
        addItem: (state, action) => {
            if(state.money <= parseInt(action.payload.product.productPrice)) {
                return
            }
            const item = action.payload.product;
            const cartItem = state.cartItems.find(cartItem => cartItem.id === item.id);
            if (cartItem) {
                cartItem.quantity += action.payload.amount;
            } else {
                state.cartItems.push({ ...item, quantity: action.payload.amount });
            }
            let convertedPrice = parseInt(action.payload.product.productPrice);
            state.money -= convertedPrice * action.payload.amount;
          
        },
        removeItem: (state, action) => {
            const item = action.payload.product;
            const cartItem = state.cartItems.find(cartItem => cartItem.id === item.id);
            if (cartItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== item.id);
            } else {
                cartItem.quantity -= action.payload.amount;
            }
            let convertedPrice = parseInt(action.payload.product.productPrice);
            state.money += convertedPrice  * action.payload.amount;
        }
    }
})
export const sliceActions = Slice.actions;
export default Slice