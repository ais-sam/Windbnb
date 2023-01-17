import './App.css';
import Home from "./pages/Home"
import { useState } from 'react';
import {GlobalProvider} from './contexts/GlobalContext';
import { GlobalContext } from './contexts/GlobalContext';
import useGlobal from './contexts/GlobalContext';


function App() {
  // show / hide modal
  const [isModal,setModal] = useState(false)
  // show / hide cities search results
  const [isCities,setCities] = useState(false)
  // show / hide guest filters
  const [isGuestFilters,setGuestFilters] = useState(false)
  // number of guest
  const [geustNumber,setGuestNumber] = useState(0)

  const value = {
    isModal,setModal,
    isCities,setCities,
    isGuestFilters,setGuestFilters,
    geustNumber,setGuestNumber
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
