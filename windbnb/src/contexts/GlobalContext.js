import { createContext, useContext, useReducer, useState} from "react";
import { initialStates } from "../reducers/globalReducer";
import globalReducer from "../reducers/globalReducer";


// create context
const GlobalContext = createContext(initialStates)

// create context provider
export const GlobalProvider = ({childern}) => {
  const [state, dispatch] = useReducer(globalReducer,initialStates)

  // show / hide the FilterDrawer
  const showFilter = ()=>{
    dispatch({
      type: "SHOW_MODAL"
    })
  }

  // value
  const value = {
    showModal : state.showModal,
    showFilter:()=>{
      dispatch({
        type: "SHOW_MODAL"
      })
    }
  }
  return (
    <GlobalContext.Provider value={value}>
        {childern}
    </GlobalContext.Provider>
  )
}


// create contxt hook
const useGlobal = ()=>{
    const context = useContext(GlobalContext)
    return context
}
export default useGlobal