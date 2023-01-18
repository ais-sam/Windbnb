import { createContext, useContext,useState } from "react";



// create context
export const GlobalContext = createContext()

// create context provider
export const GlobalProvider = ({childern}) => {
  const [isModal,setModal] = useState(false)
  const [isCities,setCities] = useState(false)
  const [isGuestFilters,setGuestFilters] = useState(false)

  const value = {
    isModal,setModal,
    isCities,setCities,
    isGuestFilters,setGuestFilters
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
    if (context === undefined) {
      throw new Error("useGlobal must be used within GlobalContext")
  }
    return context
}
export default useGlobal