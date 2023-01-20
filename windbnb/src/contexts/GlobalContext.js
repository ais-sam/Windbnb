import { createContext, useContext,useState } from "react";



// create context
export const GlobalContext = createContext()

// create context provider
export const GlobalProvider = ({childern}) => {
  const [isModal,setModal] = useState(false)
  const [isCities,setCities] = useState(false)
  const [isGuestFilters,setGuestFilters] = useState(false)
  const [choosedLocation,setChoosedLocation] = useState('')
  const [choosedNumberOfGuests,setChoosedNumberOfGuests] = useState(0)
  // const [location, setLocation] = useState('');
  // const [guests, setGuests] = useState(0);
  const value = {
    isModal,setModal,
    isCities,setCities,
    isGuestFilters,setGuestFilters,
    choosedLocation,setChoosedLocation,
    
  //   location, setLocation,
  //   guests, setGuests
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