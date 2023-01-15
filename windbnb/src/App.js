import './App.css';
import Home from "./pages/Home"
import { useState } from 'react';
import {GlobalProvider} from './contexts/GlobalContext';
import { GlobalContext } from './contexts/GlobalContext';

function App() {
  const [isModal,setModal] = useState(false)
  return (
    <GlobalContext.Provider value={{isModal,setModal}}>
      <div className="relative" >
        <Home/>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
