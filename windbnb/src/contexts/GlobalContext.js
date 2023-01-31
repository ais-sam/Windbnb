import { createContext, useContext, useReducer } from "react";
import { globalReducer, initialStates } from "../reducer/globalReducer";

// create context
export const GlobalContext = createContext()

// create context provider
export const GlobalProvider = ({children}) => {
  const [state,dispatch] = useReducer(globalReducer,initialStates)
 
  
  
  const value = {
    state,dispatch
  }

  return (
    <GlobalContext.Provider value={value}>
        {children}
    </GlobalContext.Provider>
  )
}


// create context hook
const useGlobal = ()=>{
    const context = useContext(GlobalContext)
    if (context === undefined) {
      throw new Error("useGlobal must be used within GlobalContext")
  }
    return context
}
export default useGlobal