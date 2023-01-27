import { createContext, useContext,useReducer,useState } from "react";
import { globalReducer,initialStates } from "../reducer/globalReducer";
import { types } from "../reducer/types";

// create context
export const GlobalContext = createContext()
const {SHOW_MODAL,SHOW_CITIES,SHOW_GUEST_FILTERS,CHOOSE_LOCATION,CHOOSE_TOTAL_GUESTS,SET_LOCATION,SET_GUESTS,INCREMENT_ADULTS,DECREMENT_ADULTS,INCREMENT_CHILDREN,DECREMENT_CHILDREN} = types

// create context provider
export const GlobalProvider = ({children}) => {
  const [state,dispatch] = useReducer(globalReducer,initialStates)
  // show modal
  const openModal = ()=> {
    dispatch({
      type: SHOW_MODAL,
    })
  }
  // hide modal
  const closeModal = ()=> {
    dispatch({
      type: SHOW_MODAL,
    })
  }
  // show / hide modal
  const [isModal,setModal] = useState(false)
  // show / hide cities search results
  const [isCities,setCities] = useState(false)
  // show / hide guest filters
  const [isGuestFilters,setGuestFilters] = useState(false)
  // the choosed location
  const [choosedLocation,setChoosedLocation] = useState('Helsinki, Finland')
  // total number of guests
  const [totalGeusts, setTotalGuests] = useState(0)
  // location
  const [location, setLocation] = useState('');
  //  number of guest
  const [guests, setGuests] = useState(0);
  // number of adults
  const [numberOfAdult,setNumberOfAdult] = useState(0)
  // number of children
  const [numberOfChildren,setNumberOfChildren] = useState(0)
  
  const value = {
    // isModal,setModal,
    isCities,setCities,
    isGuestFilters,setGuestFilters,
    choosedLocation,setChoosedLocation,
    location, setLocation,
    guests, setGuests,
    numberOfAdult,setNumberOfAdult,
    numberOfChildren,setNumberOfChildren,
    totalGeusts, setTotalGuests,

    // openModal,closeModal,
    // isModal: state.isModal
    state,dispatch
  }

  return (
    <GlobalContext.Provider value={value}>
        {children}
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