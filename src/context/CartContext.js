import React from "react";
import { createContext,useContext,useReducer,useEffect } from "react";
import reducer from "../reducer/CartReducer";
const cartContext = createContext();


const getLocalCartData = () => {
    let localCartData = localStorage.getItem("thapaCart");
    if (localCartData === []) {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  };

const initialState ={
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_charge: 50000,
}
const CartProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id,color,amount,product) =>{
        return dispatch({type: "ADD_TO_CART",payload:{id,color,amount,product}});
    }
    const removeItem = (id) =>{
        return dispatch({type: "REMOVE_ITEM",payload: id});
    }
    const clearCart = () =>{
      return dispatch({type:"CLEAR_CART"});
    }
    const setDecrement = (id) =>{
      return dispatch({type:"SET_DECREMENT",payload: id});
    };
    const setIncrement = (id) =>{
      return dispatch({type:"SET_INCREMENT",payload: id});
    };

    useEffect(() => {
        dispatch({type: "CART_COUNT_TOTAL"});
        dispatch({type: "CART_TOTAL_AMOUNT"});
        localStorage.setItem("thapaCart", JSON.stringify(state.cart));
      }, [state.cart]);

    return <cartContext.Provider value={{...state,addToCart,removeItem,clearCart,setDecrement,setIncrement}}>
        {children}
    </cartContext.Provider>
}
const useCartContext = () =>{
    return useContext(cartContext);
}
export {useCartContext,CartProvider}