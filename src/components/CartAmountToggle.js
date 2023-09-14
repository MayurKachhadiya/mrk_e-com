import React from 'react'
import {FaMinus,FaPlus} from 'react-icons/fa';
const CartAmountToggle = ({amount,SetDecreaseAmount,SetIncreaseAmount}) => {
  return (
    <>
      <div className="cart-button">
          <div className="amount-toggle">
              <button onClick={()=>SetDecreaseAmount()}>
                <FaMinus/>
              </button>
              <div className="amount-style">{amount}</div>
              <button onClick={()=>SetIncreaseAmount()}>
                <FaPlus/>
             </button>
          </div>
      </div>
    </>
  )
}

export default CartAmountToggle
