
import React, { useState,useReducer,createContext } from "react"

const initialState = {
  product: "dasdas",
  date: "dassa",
}

function reducer(state, action) {
  console.log("state",state)
  console.log("action",action)
  
  if( action.product){
    state.product = "daje";
  }
  
  return { ...state, ...action };
}

// Create the context
const ProductContext = React.createContext()

export function ProductProvider({ children }) {
  // Place state in here
  /* const [{isOpen,isBackground}, setState] = useState({
    isOpen:[],
    isBackground:false
  }) */

  const [state, dispatch] = useReducer(reducer, initialState);
  

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext
