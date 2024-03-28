

import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice'
import { useSelector,TypedUseSelectorHook } from "react-redux";
import CartReducer from './CartSlice'
import { productIntialState } from "./productSlice";

interface PreloadedState {
  cart: any; // Update this with your cart state type
  products: productIntialState;
}

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')||'{}') : {}

const preloadedState: PreloadedState = {
  cart: persistedState.cart , // Update this with your cart state initial structure
  products: persistedState.products, // Initialize with an empty array if not available
};

 export const store = configureStore({
    reducer:{
      products: productReducer,
      cart:CartReducer
     },
     preloadedState:preloadedState

 })

  store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  })

 // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
