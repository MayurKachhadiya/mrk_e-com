import React from "react";
import axios from "axios";
import { useEffect,useContext, createContext,useReducer } from "react";
import reducer from "../reducer/ProductReducer";
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleproduct: {},
    isSingleError: false,

}

const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

        const getProductes = async (url) =>{
            dispatch({type:"SET_LOADING"});
            try{
                const res = await axios.get(url);
                const products = await res.data;
                dispatch({type:"SET_API_DATA",payload:products}); 
            }catch(error){
                dispatch({type:"SET_ERROR"});
            }
        };  

        useEffect(() => {
            getProductes(API);
        }, []);

        const getSingleProduct = async (url) =>{
            dispatch({type:"SET_SINGLE_LOADING"});
            try{
                const res = await axios.get(url);
                const singleproduct = await res.data;
                dispatch({type:"SET_SINGLE_API_DATA",payload:singleproduct}); 
            }catch(error){
                dispatch({type:"SET_SINGLE_ERROR"});
            }
        };  
        return(
            <>
                <AppContext.Provider value={{...state, getSingleProduct}}>
                    {children}
                </AppContext.Provider>   
            </>
       );
};
const UseProviders = () =>{
    return (useContext(AppContext) );
}

export {AppProvider,AppContext,UseProviders};