
const ProductReducer = (state,action) => {
    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true
            };
            case "SET_API_DATA":
                const featureData = action.payload.filter((curritem)=>{
                    return curritem.featured === true;
                }); 
                return{
                    ...state,
                    isLoading: false,
                    products: action.payload,
                    featureProducts: featureData,
                };

            case "SET_ERROR":
                return{
                    ...state,
                    isError: true
                };
            case "SET_SINGLE_LOADING":
                return{
                    ...state,
                    isSingleLoading: true
                };
            case "SET_SINGLE_API_DATA":
                 return{
                    ...state,
                    isSingleLoading: false,
                    singleproduct: action.payload
                 };
            case "SET_SINGLE_ERROR":
                return{
                    ...state,
                    isSingleLoading: false,
                    isSingleError: true
                };   
        default:
            return{ ...state}
    }
}

export default ProductReducer
