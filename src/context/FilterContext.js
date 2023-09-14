import React from "react";
import { createContext,useContext,useReducer,useEffect } from "react";
import { UseProviders } from "./ProductContext";
import  reducer  from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState={
    Filter_product: [],
    all_product: [],
    grid_view: false,
    sorting_view: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: 0,
        minPrice: 0,
        maxPrice: 0,
    }
}
export const FilterProvider = ({children}) =>{
    const {products} = UseProviders();
  
    const [state, dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        dispatch({type:"FILTER_PRODUCTS"});
        dispatch({type:"SET_SORTING_VIEW"});
    }, [products,state.sorting_view,state.filters]);
    
    useEffect(() => {
            dispatch({type:"LOAD_FILTER_PRODUCTS",payload: products});
    }, [products]);


    const setGridView = ()=>{
        return dispatch({type:"SET_GRID_VIEW"});
    }
    const setListView = ()=>{
        return dispatch({type:"SET_LIST_VIEW"});
    }
    const setSorting = (event) =>{
        let userdata = event.target.value;
        return dispatch({type:"SET_SORTING",payload:userdata});
    }
    
    const updateFilterValue = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({type: "UPDATE_FILTER_VALUE",payload:{name,value}});
    }
  
    const clearFilter = () =>{
        return dispatch({type:"CLEAR_FILTER"});
    }
    return(
    <FilterContext.Provider value={{...state,setGridView,setListView,setSorting,updateFilterValue,clearFilter}}>{children}</FilterContext.Provider>
    )
}

export const useFilterContext = () =>{
    return useContext(FilterContext);
}