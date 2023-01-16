import './App.css';
import Home from "./pages/Home"
import { useState } from 'react';
import {GlobalProvider} from './contexts/GlobalContext';
import { GlobalContext } from './contexts/GlobalContext';
import useGlobal from './contexts/GlobalContext';


function App() {
  // const [isModal,setModal] = useState(false)
  // const {isModal,setModal,isCities,setCities,isGuestFilters,setGuestFilters} = useGlobal()
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
      <div className="relative" >
        <Home/>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
