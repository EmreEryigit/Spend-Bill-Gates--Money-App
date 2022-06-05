import { configureStore } from "@reduxjs/toolkit";
import Slice from "./billgatesSlice";

const store = configureStore({
    reducer: {
        billgates: Slice.reducer
    }
})
export default store