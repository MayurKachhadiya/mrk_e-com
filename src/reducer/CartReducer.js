
const CartReducer = (state,action) => {
    if(action.type === "ADD_TO_CART")
    {
        let {id,color,amount,product} = action.payload;
        let existingProduct = state.cart.find((currEle)=> 
            currEle.id === id + color);
        
        if(existingProduct){
            let updatedItem = state.cart.map((currItem)=>{
                if(currItem.id === id + color){
                    let updatedAmount = currItem.amount +amount;
                    if(updatedAmount >= currItem.max){
                        updatedAmount = currItem.max;
                    }
                        return{
                        ...currItem, 
                        amount: updatedAmount,
                        };
                }
                    else{
                    return currItem;
                }
            });
            return{
                ...state,
                cart:updatedItem,
            }
        }
        else{
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock
            }
            return{
                ...state,
                cart: [...state.cart,cartProduct],
            }
        }
    }

    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === action.payload) {
            let decAmount = curElem.amount - 1;
    
            if (decAmount <= 1) {
              decAmount = 1;
            }
    
            return {
              ...curElem,
              amount: decAmount,
            };
          } else {
            return curElem;
          }
        });
        return { ...state, cart: updatedProduct };
      }

      if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === action.payload) {
            let incAmount = curElem.amount + 1;
    
            if (incAmount >= curElem.max) {
              incAmount = curElem.max;
            }
    
            return {
              ...curElem,
              amount: incAmount,
            };
          } else {
            return curElem;
          }
        });
        return { ...state, cart: updatedProduct };
    }

    if(action.type === "CART_COUNT_TOTAL"){
        let countItem = state.cart.reduce((init,currEle)=>{
            let {amount} = currEle;
            init = init + amount;
            return init
        },0);
        return{
            ...state,
            total_item: countItem,
        }
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
          (curItem) => curItem.id !== action.payload
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }

    if(action.type === "CART_TOTAL_AMOUNT"){
        let total_amount = state.cart.reduce((init,currEle)=>{
            let {price,amount} = currEle;
            init = init + price * amount;
            return init;
        },0);
        return{
            ...state,
            total_amount,
        };
    }
    
    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            cart: [],
        };
    }
    return state;
    }

export default CartReducer;
