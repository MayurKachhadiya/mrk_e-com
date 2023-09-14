
const filterReducer = (state,action) => {
  switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        let priceArr = action.payload.map((curElem) => curElem.price);

        let maxPrice = Math.max(...priceArr);
        return{
            ...state,
            Filter_product: [...action.payload],
            all_product: [...action.payload],
            filters: {...state.filters,maxPrice,price: maxPrice}
        }
      case "SET_GRID_VIEW":
        return{
          ...state,
          grid_view: true
        }
      case "SET_LIST_VIEW":
        return{
          ...state,
          grid_view: false
        }
      case "SET_SORTING":
        return{
          ...state,
          sorting_view: action.payload,
        }
      case "SET_SORTING_VIEW":
        let UseProducts; 
        const {Filter_product,sorting_view} = state;
        let tempsortProduct = [...Filter_product];

        const sortingProduct = (a,b)=>{
          if(sorting_view === "a-z"){
            return a.name.localeCompare(b.name);
          }
        
          if(sorting_view === "z-a"){
            return b.name.localeCompare(a.name);
          }
        
          if(sorting_view === "lowest"){
            return a.price - b.price;
          }
        
          if(sorting_view === "highest"){
            return b.price - a.price;
          }
        }

          UseProducts = tempsortProduct.sort(sortingProduct);
        
        return{
          ...state,
          Filter_product: UseProducts,
        }
      
      case "UPDATE_FILTER_VALUE":
        console.log(action.payload);
      const {name,value} = action.payload;
      
        return{
          ...state,
          filters:{
            ...state.filters, 
            [name]: value,
          },
        };
      
        case "FILTER_PRODUCTS":
          let { all_product } = state;
          let tempFilterProduct = [...all_product];
  
          const {text,category,company,color,price} = state.filters;

          if (text) {
            tempFilterProduct = tempFilterProduct.filter((currEle)=>{
              return currEle.name.toLowerCase().includes(text);
            });
          }
          if (company !== "all") {
            tempFilterProduct = tempFilterProduct.filter((currEle)=>{
              return currEle.company === company;
            });
          }
          if (category !== "all") {
            tempFilterProduct = tempFilterProduct.filter((currEle)=>{
              return currEle.category.toLowerCase() === category.toLowerCase();
            });
          }
         
      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }
      if(price){
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.price <= price
        );
      }
          return{
            ...state,
            Filter_product: tempFilterProduct, 
          }
        
      case "CLEAR_FILTER":
          return{
            ...state,
            filters:{
              ...state.filters,
              text: "",
              category: "all",
              company: "all",
              color: "all",
              maxPrice: 0,
              price: state.filters.maxprice,
              minprice: state.filters.maxprice,
            }
          }
          
      default:
          return state;
    }
}

export default filterReducer
