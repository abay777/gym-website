import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { product, products } from "../Data/products";

export interface States {
    productsBag:product[];
    total:number;
    Tamount:number;
}

export const Initialstate:States = {
    productsBag:products,
    total:0,
    Tamount:0,
}

interface actions{
    type:string;
    payload:{
        quantity:number;
        amount:number;
    }
}
 
 export const productSlice = createSlice({
    name:'product',
    initialState:Initialstate,
    reducers:{
        cartUpdate:(state:States,actions:actions)=>{
            const{quantity,amount}= actions.payload;
            const Tamount = state.Tamount + (quantity * amount);
            const total = state.total + quantity
            console.log(actions.payload)
            return {...state, total:total,Tamount:Tamount}
        }
         
    }
 })
  
 export const {cartUpdate} = productSlice.actions;
 export default productSlice.reducer