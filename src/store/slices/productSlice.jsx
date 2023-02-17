import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: "productList",
  initialState: {
    productList:[],
  },
  reducers: {
    addProduct(state, action){
        const itemInCart = state.productList.find((item)=> item.id === action.payload.id);
        if(itemInCart){
            itemInCart.quantity++;
        }else{
            state.productList.push({...action.payload, quantity: 1});
        }
    },
    incremenQuantity(state, action){
        const item = state.productList.find((item)=>item.id === action.payload);
        item.quantity++;
    },
    decrementQuantity(state, action){
        const item = state.productList.find((item)=>item.id === action.payload);
        if(item.quantity === 1){
            item.quantity = 1;
        }else{
            item.quantity--;
        }
    },

    removeProduct(state, action){
        const removeItem = state.productList.filter((item)=>item.id!==action.payload);
        state.productList = removeItem;
    },
    clearCart(state){
        state.productList = [];
    },
  }
});

export const {addProduct, removeProduct, clearCart, incremenQuantity, decrementQuantity} = productSlice.actions

export default productSlice.reducer