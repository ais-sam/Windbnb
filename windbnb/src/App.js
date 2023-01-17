import { useState } from 'react';
import './App.css';
import { GlobalContext } from './contexts/GlobalContext';
import Home from "./pages/Home";


function App() {
  // show / hide modal
  const [isModal,setModal] = useState(false)
  // show / hide cities search results
  const [isCities,setCities] = useState(false)
  // show / hide guest filters
  const [isGuestFilters,setGuestFilters] = useState(false)
  // number of guest
  const [totalGuest,setTotalGuest] = useState(0)

  const value = {
    isModal,setModal,
    isCities,setCities,
    isGuestFilters,setGuestFilters,
    totalGuest,setTotalGuest
  }
  return (
    <GlobalContext.Provider value={value}>
      <div className="relative" >
        <Home/>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
