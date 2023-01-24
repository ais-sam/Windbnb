import { useState } from 'react';
import './App.css';
import { GlobalContext, GlobalProvider } from './contexts/GlobalContext';
import Home from "./pages/Home";


function App() {
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
    isModal,setModal,
    isCities,setCities,
    isGuestFilters,setGuestFilters,
    choosedLocation,setChoosedLocation,
    location, setLocation,
    guests, setGuests,
    numberOfAdult,setNumberOfAdult,
    numberOfChildren,setNumberOfChildren,
    totalGeusts, setTotalGuests

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
