import React from 'react'
import { useFilterContext } from '../context/FilterContext';
import GridView from '../components/GridView';
import ListView from '../components/ListView';
const ProductList = () => {
  const {Filter_product  ,grid_view} = useFilterContext();

  if(grid_view === true){
    return <GridView products = {Filter_product}/>

  }

  if(grid_view === false){
    return <ListView products = {Filter_product}/>
  }

  if(grid_view === false){
    return <ListView products = {Filter_product}/>
  }
}

export default ProductList
