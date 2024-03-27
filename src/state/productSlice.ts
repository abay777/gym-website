import { createSlice } from "@reduxjs/toolkit";
import { product, productz } from "../Data/products";


export interface productIntialState {
    productsBag:product[];
    
}

export const Initialstate:productIntialState = {
    productsBag:productz,
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
        default1:(state,action)=>{
          return state
        }
         
    }
 })
  
 export const {default1} = productSlice.actions;
 export default productSlice.reducer