import { GlobalProvider } from './contexts/GlobalContext';
import Home from "./pages/Home";


function App() {
  
  return (
    <GlobalProvider>
      <div className="relative" >
        <Home/>
      </div>
    </GlobalProvider>
  );
}

export default App;
