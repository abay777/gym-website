import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { product } from "../Data/products";

interface Cart extends product {
    quantity: number;
    totalCost: number;
}

export interface CartInitialState {
    tQuantity: number;
    totalAmount: number;
    cartList: Cart[];
}

const initialState: CartInitialState = {
    tQuantity: 0,
    cartList: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{ quantity: number; product: product }>) => {
            const { quantity, product } = action.payload;
            const existingProduct = state.cartList.findIndex(pro=>pro.id === product.id)
            if (existingProduct !== -1) {
                const updatedCartList = state.cartList.map(pro => {
                    if (pro.id === product.id) {
                        const newQuantity = pro.quantity + quantity;
                        const newTotalCost = pro.totalCost + (quantity * product.cost);
                        return { ...pro, quantity: newQuantity, totalCost: newTotalCost };
                    } else {
                        return pro;
                    }
                });
                return {
                    ...state,
                    cartList: updatedCartList,
                    totalAmount: state.totalAmount + (quantity * product.cost),
                    tQuantity: state.tQuantity + quantity,
                };
            }else{
                    const newCartProduct = {...product, quantity, totalCost:product.cost * quantity}
                    const newCartList = [...state.cartList, newCartProduct];
                    const newTotalAmount = state.totalAmount + newCartProduct.totalCost;
                    const newTQuantity = state.tQuantity + quantity;
                    return {
                        ...state,
                        cartList: newCartList,
                        totalAmount: newTotalAmount,
                        tQuantity: newTQuantity
                    };
            }
        },
        deleteFromCart:(state,action)=>{
            const id = action.payload
           const removeProductIndex = state.cartList.findIndex(cart => cart.id === id);
           if(removeProductIndex !==-1){
               const removeProduct = state.cartList[removeProductIndex];
               const newCartList = state.cartList.filter(pro => pro.id !== id)
               const newQuantity = state.tQuantity - removeProduct.quantity;
               const newTamount = state.totalAmount - removeProduct.totalCost;
               return{
                ...state,
                cartList:newCartList,
                totalAmount:newTamount,
                tQuantity:newQuantity
               }
           }
           
        }
    },
});

export const { addToCart , deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer;
