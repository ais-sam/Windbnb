import { createContext, useContext, useReducer,useState } from "react";
import { globalReducer, initialStates } from "../reducers/globalReducer";


// create context
export const GlobalContext = createContext(initialStates)

// create context provider
export const GlobalProvider = ({childern}) => {
  // const [state, dispatch] = useReducer(globalReducer,initialStates)
  const [isModal,setModal] = useState(false)

  // show / hide the FilterDrawer
  // const showFilter = ()=>{
  //   dispatch({
  //     type: "SHOW_MODAL"
  //   })
  // }

  // value (useReducer)
  // const value = {
  //   isModal : state.isModal,
  //   showFilter:()=>{
  //     dispatch({
  //       type: "INCREMENT"
  //     })
  //   }
  // }
  // value (useState)
  const value = {isModal,setModal}
  return (
    <GlobalContext.Provider value={value}>
        {childern}
    </GlobalContext.Provider>
  )
}


// create contxt hook
const useGlobal = ()=>{
    const context = useContext(GlobalContext)
    if (context === undefined) {
      throw new Error("useGlobal must be used within GlobalContext")
  }
    return context
}
export default useGlobal