import React, { useState,useReducer,createContext } from "react"

const initialState = {
  isOpen: false,
  isBackground: false,
}

function reducer(state, action) {
  /*console.log("state",state)
  console.log("action",action)*/
  if(state.isOpen && action.isBackground){
    action.isBackground = false;
  }
  if( action.isOpen){
    state.isBackground = false;
  }
  return { ...state, ...action };
}

// Create the context
const MenuContext = React.createContext()

export function MenuProvider({ children }) {
  // Place state in here
  /* const [{isOpen,isBackground}, setState] = useState({
    isOpen:[],
    isBackground:false
  }) */

  const [state, dispatch] = useReducer(reducer, initialState);
  

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
