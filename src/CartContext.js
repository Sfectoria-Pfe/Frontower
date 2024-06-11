import React, { createContext, useReducer } from 'react'
import cartReducer from './cartReducer';

export const CartContext= createContext(); 

export const CartProvider = ({Children})=> {
    const [cart, dispatch]= useReducer(cartReducer,[]);

    return (
    <CartContext.Provider value={{ cart, dispatch}}>
        {Children}
    </CartContext.Provider>
  )
}